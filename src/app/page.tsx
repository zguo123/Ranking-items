import React from "react";
import HomeClient from "@/components/PageComponents/HomeClient";

export const metadata = {
  title: "Ranking System",
  description: "This is a proof of concept for a ranking system in Next.js.",
};

export default function RootServerPage() {
  return <HomeClient />;
}
