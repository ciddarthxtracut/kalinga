"use client";

import React from "react";
import FAQ from "../components/general/faq";

const OtherCommitteesClient = ({ tableSections, faqItems }) => {
    return (
        <div className="min-h-screen bg-white pt-10">
            <FAQ
                title="List Of Important Committee Members"
                subtitle="Committees"
                variant="card-display"
                tableSections={tableSections}
                items={faqItems}
                pyClassName="py-8 md:py-12"
            />
        </div>
    );
};

export default OtherCommitteesClient;
