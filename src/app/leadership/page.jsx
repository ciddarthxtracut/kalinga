"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AdminLeadershipSection from "../components/administrationleadership/adminleadershipsection";

export default function Page() {
  const pathname = usePathname();

  
  return (
    <>
      <AdminLeadershipSection />
    </>
  );
}