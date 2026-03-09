import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ToolsSections from "@/components/ToolsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('/assets/jpg/landing_background.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80"></div>

        {/* Content */}
        <div className="relative z-10">
          <HeroSection />
          <ServiceSection />
          <ToolsSections />
        </div>
      </div>
    </main>
  );
}