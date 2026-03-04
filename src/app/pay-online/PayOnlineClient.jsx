"use client";

import React from "react";
import Link from "next/link";
import LeadershipCard from "../components/general/leadership-card";

export default function PayOnlineClient({ paymentOptions }) {
    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {paymentOptions.map((option) => (
                        <Link key={option.id} href={option.href} target="_blank" className="block h-full group">
                            <LeadershipCard
                                image={option.image}
                                name={option.name}
                                title={option.title}
                                imageContainerClassName="h-[250px] md:h-[300px]"
                                usePTagForName={true}
                                showArrowButton={true}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
