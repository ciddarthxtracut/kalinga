"use client";

import React from "react";
import APITable from "../components/general/api-table";
import CtcdTrainingTabs from "../components/ctcd/ctcd_training_tabs";

const BookChaptersClient = () => {
    const bookChapterTabs = Array.from({ length: 8 }, (_, i) => {
        const id = 27 + i; // 27 to 34
        const yearStart = 2025 - i; // 2025 to 2018
        const yearEnd = yearStart + 1;
        const label = `${yearStart}-${yearEnd}`;

        return {
            value: `year-${id}`,
            label,
            content: (
                <APITable
                    tableId={id.toString()}
                    title={`Book / Book Chapters ${label}`}
                    className="py-16"
                    overflowX={true}
                />
            ),
        };
    });

    return (
        <main className="bg-white font-jakarta">
            <CtcdTrainingTabs customTabs={bookChapterTabs} />
        </main>
    );
};

export default BookChaptersClient;
