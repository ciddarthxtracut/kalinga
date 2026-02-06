"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import APITable from "../components/general/api-table";

export default function MOUPage() {
    const pathname = usePathname();

    
    return (
        <>


            {/* Test APITable with the MOU table */}
            <APITable
                tableId="10"
                title="Active Memorandum of Understanding"
                className="py-16"
                overflowX={true}
            />
        </>
    );
}
