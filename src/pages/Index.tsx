import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Index = () => {
  const [currentLang, setCurrentLang] = useState("vi");
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main>
        <Banner currentLang={currentLang} />
        
        {/* Quick Links - Services */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: currentLang === "vi" ? "Lịch công tác" : "Work Schedule", icon: "calendar" },
                { label: currentLang === "vi" ? "Dịch vụ công trực tuyến" : "Online Public Services", icon: "globe" },
                { label: currentLang === "vi" ? "Tra cứu hồ sơ" : "Document Lookup", icon: "search" },
                { label: currentLang === "vi" ? "Bưu chính công ích" : "Postal Service", icon: "mail" },
                { label: currentLang === "vi" ? "Đánh giá chất lượng dịch vụ HCC" : "HCC Service Quality Assessment", icon: "star" },
                { label: currentLang === "vi" ? "Dự án khuyến khích đầu tư" : "Investment Projects", icon: "dollar" },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white border rounded-md p-3 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-[#024b96]">
                      {/* Placeholder for icon - in production, use actual icons */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="12" fill="currentColor" fillOpacity="0.2" />
                        <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                  <span className="text-sm text-[#024b96] font-medium line-clamp-2">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* VR 360 Tour and Digital Map Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* VR 360 Tour */}
              <div className="relative rounded-lg overflow-hidden h-52 md:h-64">
                <img 
                  src="/placeholder.svg" 
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
                    <button className="bg-blue-500 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-600 transition">
                      {currentLang === "vi" ? "Khám phá VR360" : "Explore VR360"}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Digital Map */}
              <div className="relative rounded-lg overflow-hidden h-52 md:h-64">
                <img 
                  src="/placeholder.svg" 
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
                    <button className="bg-blue-500 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-600 transition">
                      {currentLang === "vi" ? "Khám phá Bản đồ số" : "Explore Digital Map"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 uppercase text-center text-[#024b96]">
              {currentLang === "vi" ? "Tư liệu" : "Resources"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="bg-white rounded-lg overflow-hidden shadow-sm h-48">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Resource ${num}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Affiliated Organizations */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  name: currentLang === "vi" 
                    ? "Công ty phát triển và khai thác hạ tầng KCN Đà Nẵng" 
                    : "Da Nang Industrial Zones Infrastructure Development and Exploitation Company",
                  logo: "/placeholder.svg"
                },
                {
                  name: currentLang === "vi" 
                    ? "Trung tâm dịch vụ tổng hợp Khu công nghệ cao Đà Nẵng" 
                    : "Da Nang Hi-Tech Park Comprehensive Service Center",
                  logo: "/placeholder.svg"
                },
                {
                  name: currentLang === "vi" 
                    ? "Chuyển đổi số" 
                    : "Digital Transformation",
                  logo: "/placeholder.svg"
                },
                {
                  name: currentLang === "vi" 
                    ? "Công nghệ VR360" 
                    : "VR360 Technology",
                  logo: "/placeholder.svg"
                }
              ].map((org, index) => (
                <div key={index} className="bg-white border rounded-lg p-4 flex flex-col h-full">
                  <div className="h-40 mb-3 flex items-center justify-center">
                    <img 
                      src={org.logo} 
                      alt={org.name} 
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <h3 className="text-center font-medium mb-2 text-sm">{org.name}</h3>
                  <div className="mt-auto text-center">
                    <a href="#" className="inline-flex items-center text-blue-600 text-sm hover:underline">
                      {currentLang === "vi" ? "Đi đến website" : "Go to website"}
                      <svg className="w-3.5 h-3.5 ml-1" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Companies and Partners */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 uppercase text-center text-[#024b96]">
              {currentLang === "vi" ? "Doanh Nghiệp Và Đối Tác" : "Companies and Partners"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                "Công ty TNHH Tokyo Keiki Precision Technology",
                "Công ty Cổ phần Long Hậu (LHC)",
                "CEI",
                "CÔNG TY CỔ PHẦN CẤP NƯỚC ĐÀ NẴNG (DAWACO)",
                "Viện Nghiên cứu và Đào tạo Việt - Anh (VN-UK)",
                "Nhật Nam Anh",
                "Công ty TNHH Niwa Foundry Việt Nam",
                "Quỹ Đầu tư phát triển thành phố Đà Nẵng (DDIF)",
                "CÔNG TY TNHH MTV XÂY DỰNG EES (EESCONS)",
                "Trung tâm Trọng tài Thương mại Miền Trung (MCAC)"
              ].map((partner, index) => (
                <div key={index} className="bg-white border p-2 flex items-center justify-center h-20 rounded">
                  <span className="text-xs text-center">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Investment Results */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 uppercase text-center text-[#024b96]">
              {currentLang === "vi" ? "Kết Quả Thu Hút Đầu Tư" : "Investment Results"}
            </h2>
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4">
                {currentLang === "vi" ? "Tình hình thu hút đầu tư" : "Investment Attraction"}
              </h3>
              <p className="text-sm mb-6">
                {currentLang === "vi" 
                  ? "Khu công nghệ cao, Khu CNTT tập trung, các khu công nghiệp" 
                  : "Hi-Tech Park, IT Park, and Industrial Zones"}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* FDI */}
                <div>
                  <h4 className="font-bold mb-3 flex items-center">
                    {currentLang === "vi" ? "(1) Thu Hút Đầu Tư Trực Tiếp Nước Ngoài (FDI)" : "(1) Foreign Direct Investment (FDI)"}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>
                        {currentLang === "vi"
                          ? "3 tháng đầu năm 2025, đã thu hút 02 dự án FDI, tổng vốn đầu tư 18,5 triệu USD"
                          : "First 3 months of 2025, attracted 02 FDI projects, total investment of 18.5 million USD"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>
                        {currentLang === "vi"
                          ? "Lũy kế đến hết tháng 3/2025 thu hút 128 dự án FDI, với tổng vốn đầu tư đăng ký 2.169,1 triệu USD."
                          : "Accumulated to the end of March 2025, attracted 128 FDI projects, with total registered investment of 2,169.1 million USD."}
                      </span>
                    </li>
                  </ul>
                </div>
                
                {/* DDI */}
                <div>
                  <h4 className="font-bold mb-3 flex items-center">
                    {currentLang === "vi" ? "(2) Thu Hút Đầu Tư Trong Nước (DDI)" : "(2) Domestic Direct Investment (DDI)"}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>
                        {currentLang === "vi"
                          ? "3 tháng đầu năm 2025, đã thu hút 02 dự án, tổng vốn đầu tư 6.293,7 tỷ đồng"
                          : "First 3 months of 2025, attracted 02 projects, total investment of 6,293.7 billion VND"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>
                        {currentLang === "vi"
                          ? "Lũy kế đến hết tháng 3/2025, thu hút 399 dự án trong nước với tổng vốn đầu tư đăng ký 42.040,7 tỷ đồng."
                          : "Accumulated to the end of March 2025, attracted 399 domestic projects with total registered investment of 42,040.7 billion VND."}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-4 text-center">
                  {currentLang === "vi" ? "Biểu Đồ Thống Kê" : "Statistical Charts"}
                </h4>
                <div className="flex justify-center">
                  <div className="bg-gray-100 w-full h-48 rounded flex items-center justify-center">
                    <span className="text-gray-500">
                      {currentLang === "vi" ? "Dữ liệu biểu đồ" : "Chart data"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Index;
