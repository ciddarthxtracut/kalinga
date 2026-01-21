"use client";

import React from "react";
import Newraipurvideos from "@/app/components/about-raipur/newraipurvideos"; // adjust path if needed

function Sportsandwellnessvideo() {
    const sportsVideos = [
        { id: 1, title: "Overall Fest Highlight", videoUrl: "https://www.youtube.com/watch?v=r0tBeANR5fQ" },
        { id: 2, title: "Table Tennis", videoUrl: "https://www.youtube.com/watch?v=U1aBugRMjR8" },
        { id: 3, title: "Shot Put", videoUrl: "https://www.youtube.com/watch?v=0ASlPFdyICo" },
        { id: 4, title: "Three Legged Race", videoUrl: "https://www.youtube.com/watch?v=KARK2Fgp0eg" },
        { id: 5, title: "Volleyball", videoUrl: "https://www.youtube.com/watch?v=IMUwEBMbltM" },
        { id: 6, title: "Kabaddi", videoUrl: "https://www.youtube.com/watch?v=QuoB-jvWMfE" },
        { id: 7, title: "Long Jump", videoUrl: "https://www.youtube.com/watch?v=b2wJRPcV0S0" },
        { id: 8, title: "Pool Table", videoUrl: "https://www.youtube.com/watch?v=wZP-H1rJNQ0" },
        { id: 9, title: "Tug of War", videoUrl: "https://www.youtube.com/watch?v=mGaPNC0l9Uc" },
        { id: 10, title: "Badminton", videoUrl: "https://www.youtube.com/watch?v=hDfPd3YcenY" },
        { id: 11, title: "Carrom", videoUrl: "https://www.youtube.com/watch?v=YFK7EXdNd70" },
        { id: 12, title: "Chess", videoUrl: "https://www.youtube.com/watch?v=NsVFeCefaO4" },
        { id: 13, title: "Relay Race", videoUrl: "https://www.youtube.com/watch?v=txIjq75AU3k" },
        { id: 14, title: "BasketBall", videoUrl: "https://www.youtube.com/watch?v=lB7DUUQV-08" },
        { id: 15, title: "Race", videoUrl: "https://www.youtube.com/watch?v=rnuVoT7025U" },
        { id: 16, title: "Cricket", videoUrl: "https://www.youtube.com/watch?v=7GzXKL3J08s" },
        { id: 17, title: "Football", videoUrl: "https://www.youtube.com/watch?v=aU5pcxA3evk" },
        { id: 18, title: "Discuss Throw", videoUrl: "https://www.youtube.com/watch?v=u7Wmpf3_nAo" },
        { id: 19, title: "Javelin Throw", videoUrl: "https://www.youtube.com/watch?v=oGWV3GLw8gw" },
        { id: 20, title: "Kho Kho", videoUrl: "https://www.youtube.com/watch?v=AB5KLq1KL2s" },
        { id: 21, title: "Hammer Throw", videoUrl: "https://www.youtube.com/watch?v=i6QJqI-kwFM" },
        { id: 22, title: "General", videoUrl: "https://www.youtube.com/watch?v=N40W5e_8ylM" },
        { id: 23, title: "General", videoUrl: "https://www.youtube.com/watch?v=jA8c39EbEuw" },
        { id: 24, title: "Gopinath", videoUrl: "https://www.youtube.com/watch?v=_-JAX7r5dMc" },
    ];

    return (
        <div className="mb-16 md:mb-24">
            <Newraipurvideos
                title="Sports & Wellness"
                description="Explore highlights from sports events and wellness activities at Kalinga University."
                videos={sportsVideos}
                backgroundColor="bg-[var(--light-gray)]"
                showPagination={true}
                showNavigation={true}
            />
        </div>
    );
}

export default Sportsandwellnessvideo;
