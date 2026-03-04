"use client";

import React from "react";
import APITable from "../components/general/api-table";

export default function ResearchPapersClient() {
    return (
        <main className="bg-white font-jakarta">
            <div className="container mx-auto px-6 py-16">
                <APITable
                    tableId="57"
                    title="Research Paper Publications"
                    overflowX={true}
                    nested={false}
                />
            </div>
        </main>
    );
}
