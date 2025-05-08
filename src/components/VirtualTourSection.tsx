
import React from 'react';

interface VirtualTourSectionProps {
  currentLang: string;
}

const VirtualTourSection: React.FC<VirtualTourSectionProps> = ({ currentLang }) => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* VR 360 Tour */}
          <div className="relative rounded-lg overflow-hidden h-52 md:h-64">
            <img 
              src="/media/uh1bpkyt/kcnc.png" 
              alt="VR360 Tour" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h2 className="text-xl font-bold mb-2">
                  {currentLang === "vi" ? "VR 360 TOUR - KHU CÔNG NGHỆ CAO ĐÀ NẴNG" : "VR 360 TOUR - DA NANG HI-TECH PARK"}
                </h2>
                <p className="mb-3 text-sm">
                  {currentLang === "vi" ? "(DEMO)" : "(DEMO)"}
                </p>
                <a href="/vr360" className="inline-block bg-[#004FA0] text-white px-4 py-1.5 rounded text-sm hover:bg-[#003e80] transition">
                  {currentLang === "vi" ? "Khám phá VR360" : "Explore VR360"}
                </a>
              </div>
            </div>
          </div>
          
          {/* Digital Map */}
          <div className="relative rounded-lg overflow-hidden h-52 md:h-64">
            <img 
              src="/media/n0fdpyz0/kcnc1.png" 
              alt="Digital Map" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h2 className="text-xl font-bold mb-2">
                  {currentLang === "vi" ? "BẢN ĐỒ SỐ KHU CNC & CÁC KCN ĐÀ NẴNG" : "DIGITAL MAP OF HI-TECH PARK & INDUSTRIAL ZONES"}
                </h2>
                <p className="mb-3 text-sm">
                  {currentLang === "vi" ? "BÁO CÁO TRỰC TUYẾN" : "ONLINE REPORTS"}
                </p>
                <a href="/ban-do-so" className="inline-block bg-[#004FA0] text-white px-4 py-1.5 rounded text-sm hover:bg-[#003e80] transition">
                  {currentLang === "vi" ? "Khám phá Bản đồ số" : "Explore Digital Map"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourSection;
