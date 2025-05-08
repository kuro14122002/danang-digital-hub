
import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import FeaturedNews from "../components/FeaturedNews";
import QuickLinks from "../components/QuickLinks";
import VirtualTourSection from "../components/VirtualTourSection";
import IndustrialZones from "../components/IndustrialZones";
import InvestmentInfo from "../components/InvestmentInfo";
import PartnersSection from "../components/PartnersSection";
import InvestmentResults from "../components/InvestmentResults";

const Index = () => {
  const [currentLang, setCurrentLang] = useState("vi");
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Banner currentLang={currentLang} />
        
        {/* Quick Links - Services */}
        <QuickLinks currentLang={currentLang} />
        
        {/* Featured News */}
        <section className="py-4 px-4">
          <div className="container mx-auto">
            <FeaturedNews news={[]} />
          </div>
        </section>
        
        {/* VR 360 Tour and Digital Map Section */}
        <VirtualTourSection currentLang={currentLang} />
        
        {/* Industrial Zones Section */}
        <section className="py-6 bg-[#EBF6FF]">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 uppercase text-center text-[#024b96]">
              {currentLang === "vi" ? "Khu Công Nghệ Cao & Các Khu Công Nghiệp" : "Hi-Tech Park & Industrial Zones"}
            </h2>
            <IndustrialZones />
          </div>
        </section>
        
        {/* Investment Info Section */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <InvestmentInfo currentLang={currentLang} />
          </div>
        </section>
        
        {/* Partners Section */}
        <section className="py-6 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 uppercase text-center text-[#024b96]">
              {currentLang === "vi" ? "Doanh Nghiệp Và Đối Tác" : "Companies and Partners"}
            </h2>
            <PartnersSection />
          </div>
        </section>
        
        {/* Investment Results */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 uppercase text-center text-[#024b96]">
              {currentLang === "vi" ? "Kết Quả Thu Hút Đầu Tư" : "Investment Results"}
            </h2>
            <InvestmentResults currentLang={currentLang} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
