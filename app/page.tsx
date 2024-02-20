import Feature1 from "@/components/Feature1/Feature1";
import Hero from "@/components/hero/Hero";

import React, { ReactNode } from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Feature1/>
    </main>
  );
}
