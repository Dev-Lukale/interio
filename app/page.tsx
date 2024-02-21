import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Feature1 from "@/components/Feature1/Feature1";
import WorkProcess from "@/components/WorkProcess/WorkProcess";
import Hero from "@/components/hero/Hero";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Feature1 />
      <ChooseUs />
      <WorkProcess/>
    </main>
  );
}
