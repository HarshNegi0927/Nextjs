import WhyChooseUs from "@/components/ WhyChooseUs";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
import HeroSection from "@/components/ui/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
   </main>
  );
}
