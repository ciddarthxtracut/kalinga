"use client";

import CtcdTrainingTabs from "../components/ctcd/ctcd_training_tabs";



if (typeof window !== "undefined") 

export default function CtcdPage() {
  return (
    <main className="w-full">
      {/* IMPORTANT: Breadcrumb overlay spacing (your project needs this) */}
      <div className="mt-[260px]">
        {/* 1) Hero is already handled by breadcrumb global component */}
        {/* 2) Objectives section (you already have / will add) */}
        {/* 3) THEN add this section exactly here: */}
        <div className="container py-10">
          <CtcdTrainingTabs />
        </div>

        {/* 4) Masterclasses section below (as per your 2nd screenshot) */}
      </div>
    </main>
  );
}
