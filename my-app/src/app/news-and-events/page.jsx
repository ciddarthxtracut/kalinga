"use client"
import { useEffect, useState, useCallback, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import EventCalendar from "../components/news_and_events/event_calendar";
import ThreeCardSider from "../components/general/three_card_sider";
import UpcomingEvents from "../components/admissions/upcoming_events";
import UpcomingConference from "../components/research/upcoming_conference";
import Gallery from "../components/general/gallery";
import AdmissionCareer from "../components/general/admission_cta";
import { fetchNewsEvents, fetchAllDepartments, parseHtmlToText } from '../lib/api';

import MediaCardSlider from "../components/general/media-card-slider";

const placementGalleryImages = [
  // // Training and Placement Cell
  // { id: 1, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-1.webp", title: "Training and Placement Gallery" },
  // { id: 2, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-2.webp", title: "Training and Placement Gallery" },
  // { id: 3, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-3.webp", title: "Training and Placement Gallery" },

  // // Aditya Biotech Lab
  // { id: 4, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-4.webp", title: "Aditya Biotech Lab" },
  // { id: 5, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/pt-glimple-5.webp", title: "Aditya Biotech Lab" },

  // International Students / Campus (IDs 6-9)
  { id: 6, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-1.jpeg", title: "Aditya Biotech Lab" },
  { id: 7, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-2.jpeg", title: "Aditya Biotech Lab" },
  { id: 8, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-3.jpeg", title: "Aditya Biotech Lab" },
  { id: 9, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-4.jpg", title: "Automobile Expo Visit" },

  // Automobile Expo Visit
  { id: 10, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-5.jpg", title: "Automobile Expo Visit" },
  { id: 11, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-6.jpg", title: "Automobile Expo Visit" },
  { id: 12, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-7.jpg", title: "Automobile Expo Visit" },
  { id: 13, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-8.jpg", title: "Automobile Expo Visit" },
  { id: 14, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-9.jpg", title: "Automobile Expo Visit" },
  { id: 15, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-10.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 16, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-11.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 17, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-12.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 18, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-13.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 19, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-14.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 20, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-15.jpg", title: "Bhilai Steel Plant Industrial Visit" },

  // Bhilai Steel Plant Industrial Visit
  { id: 21, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-16.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 22, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-17.jpg", title: "Bhilai Steel Plant Industrial Visit" },

  // CIPET Visit
  { id: 23, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-18.jpg", title: "Bhilai Steel Plant Industrial Visit" },
  { id: 24, image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/ind-19.jpg", title: "Bhilai Steel Plant Industrial Visit" },
];

const breadcrumbData = {
  pageTitle: "News & Events",
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/news-and-events/news-and-event.jpg",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'News & Events', href: '/news-and-events' }
  ]
}

function NewsAndEvents() {
  const [newsItems, setNewsItems] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }

    // Fetch departments
    const loadDepartments = async () => {
      try {
        const deps = await fetchAllDepartments();
        setDepartments(deps);
      } catch (err) {
        console.error("Failed to load departments", err);
      }
    };
    loadDepartments();
  }, []);

  const loadNews = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch all items to handle distinct sections client-side for smoother transition
      const params = {};
      const data = await fetchNewsEvents(params);

      if (data && data.results) {
        setNewsItems(data.results);

        // Extract unique categories from the data
        const categoryMap = new Map();
        data.results.forEach(item => {
          if (item.category && item.category_name) {
            categoryMap.set(String(item.category), {
              id: String(item.category),
              name: item.category_name
            });
          }
        });
        const uniqueCategories = Array.from(categoryMap.values());
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.error("Failed to fetch news", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  // --- Derived Data Processing ---
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 1. Future Events (Date > Today) - For Top Section
  const futureEvents = useMemo(() => {
    return newsItems.filter(item => {
      if (!item.date) return false;
      return new Date(item.date) > today;
    }).map(item => ({
      id: item.id,
      image: item.images?.[0]?.image || 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      title: item.heading,
      badgeText: item.date,
      slug: item.slug
    }));
  }, [newsItems]);

  // 2. Newly Adds (This Week) - For Bottom Section
  const newlyAdds = useMemo(() => {
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);
    const oneWeekFuture = new Date(today);
    oneWeekFuture.setDate(today.getDate() + 7);

    return newsItems.filter(item => {
      if (!item.date) return false;
      const d = new Date(item.date);
      return d >= oneWeekAgo && d <= oneWeekFuture;
    }).slice(0, 3).map(item => ({
      id: item.id,
      title: item.heading,
      date: item.date,
      category: item.category_name,
      description: parseHtmlToText(item.content).substring(0, 80) + "...",
      image: item.images?.[0]?.image || 'https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg',
      href: `/news-and-events/${item.slug}`,
      registerButtonText: "Read More"
    }));
  }, [newsItems]);



  return (
    <div>


      {/* 1. Upcoming Events (Future items) */}
      {futureEvents.length > 0 && (
        <UpcomingEvents events={futureEvents} />
      )}

      {/* 2. Main Filters & List */}
      <EventCalendar items={newsItems} departments={departments} categories={categories} />

      {/* 3. Newly Adds (This Week) */}
      {newlyAdds.length > 0 && (
        <UpcomingConference
          conferences={newlyAdds}
          title="This Week's Updates"
          backgroundColor="bg-[var(--light-gray)]"
          categoryText="New" // Override category badge if needed
        />
      )}

      {/* Static Sections */}
      <ThreeCardSider />
      <MediaCardSlider
        title="Industrial Visits"
        imageItems={placementGalleryImages}
        categoryTitle=""
        id="industrial-visits"
      />
      <Gallery />
      <AdmissionCareer />

      {/* Scrollbar Styles */}
      <style jsx global>{`
        .date-scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .date-scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default NewsAndEvents;