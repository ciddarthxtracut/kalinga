import React from "react";
import EDPClient from "./EDPClient";

export const metadata = {
  title: "Executive Development Program | Kalinga University",
  description: "Prepare for new business challenges with Kalinga University's 1-year Executive Development Program. Enhance leadership skills and identifies innovative solutions.",
  keywords: ["Executive Development Program", "Business Leadership", "Kalinga University", "Management Skills"],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/executive-development-program/",
  },
};

export default function Page() {
  return <EDPClient />;
}
