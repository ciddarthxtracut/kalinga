"use client";

import React from "react";
import PublicationCard from "../components/general/PublicationCard";

const BookPublicationsClient = ({ books }) => {
    return (
        <div className="bg-white min-h-screen">
            <section className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {books.map((book, index) => (
                        <PublicationCard key={index} data={book} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BookPublicationsClient;
