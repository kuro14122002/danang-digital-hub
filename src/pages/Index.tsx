
import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FeaturedNews from "../components/FeaturedNews";
import IndustrialZones from "../components/IndustrialZones";
import InvestorInfo from "../components/InvestorInfo";
import InvestmentEnv from "../components/InvestmentEnv";
import Footer from "../components/Footer";

const Index = () => {
  const [currentLang, setCurrentLang] = useState("vi");
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main>
        <Banner currentLang={currentLang} />
        
        {/* Quick Links */}
        <section className="py-6 border-b">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: currentLang === "vi" ? "Dịch vụ công trực tuyến" : "Online Public Services", href: "#" },
                { label: currentLang === "vi" ? "Thủ tục hành chính" : "Administrative Procedures", href: "#" },
                { label: currentLang === "vi" ? "Công khai kết quả TTHC" : "Procedure Results", href: "#" },
                { label: currentLang === "vi" ? "Tiếp nhận phản ánh" : "Receive Feedback", href: "#" },
                { label: currentLang === "vi" ? "Đặt lịch hẹn" : "Appointment Booking", href: "#" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-white border rounded-md p-3 text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-primary font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        <FeaturedNews currentLang={currentLang} />
        <IndustrialZones currentLang={currentLang} />
        <InvestorInfo currentLang={currentLang} />
        <InvestmentEnv currentLang={currentLang} />
        
        {/* VR Tour Banner */}
        <section className="py-10">
          <div className="container-custom">
            <div className="rounded-lg overflow-hidden relative h-48 md:h-64">
              <img 
                src="/placeholder.svg" 
                alt="VR360 Tour" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-2xl font-bold mb-2">
                    {currentLang === "vi" ? "Khám Phá VR360 Tour" : "Explore VR360 Tour"}
                  </h2>
                  <p className="mb-4">
                    {currentLang === "vi" 
                      ? "Tham quan Khu Công nghệ cao Đà Nẵng theo góc nhìn 360°" 
                      : "Take a 360° virtual tour of Da Nang Hi-Tech Park"}
                  </p>
                  <a 
                    href="#" 
                    className="bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    {currentLang === "vi" ? "Trải Nghiệm Ngay" : "Experience Now"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quick Links Grid */}
        <section className="py-10 bg-light">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-center mb-8">
              {currentLang === "vi" ? "Tiện Ích" : "Utilities"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: currentLang === "vi" ? "Lịch công tác" : "Work Schedule", href: "#" },
                { label: currentLang === "vi" ? "Dịch vụ công" : "Public Services", href: "#" },
                { label: currentLang === "vi" ? "Tra cứu hồ sơ" : "Document Lookup", href: "#" },
                { label: currentLang === "vi" ? "Bưu chính công ích" : "Postal Service", href: "#" },
                { label: currentLang === "vi" ? "Đánh giá chất lượng" : "Quality Assessment", href: "#" },
                { label: currentLang === "vi" ? "Dự án khuyến khích đầu tư" : "Investment Projects", href: "#" },
                { label: currentLang === "vi" ? "Báo cáo giám sát" : "Monitoring Reports", href: "#" },
                { label: currentLang === "vi" ? "Thủ tục môi trường" : "Environmental Procedures", href: "#" },
                { label: currentLang === "vi" ? "Thông tin báo chí" : "Press Information", href: "#" },
                { label: currentLang === "vi" ? "Báo cáo thống kê" : "Statistical Reports", href: "#" },
                { label: currentLang === "vi" ? "Mua sắm công" : "Public Procurement", href: "#" },
                { label: currentLang === "vi" ? "Góp ý văn bản" : "Document Feedback", href: "#" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-white border rounded-md p-4 text-center hover:shadow-md transition-shadow flex items-center justify-center h-16"
                >
                  <span className="text-primary font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Investment Statistics */}
        <section className="py-10">
          <div className="container-custom">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="card-header">
                <h2 className="text-xl font-bold">
                  {currentLang === "vi" ? "Kết Quả Thu Hút Đầu Tư" : "Investment Results"}
                </h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* FDI */}
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold text-xl mb-2 text-primary">
                      {currentLang === "vi" ? "Vốn FDI" : "FDI Capital"}
                    </h3>
                    <div className="flex items-end space-x-2">
                      <span className="text-3xl font-bold">2.6</span>
                      <span className="text-lg font-medium mb-1">
                        {currentLang === "vi" ? "tỷ USD" : "billion USD"}
                      </span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{currentLang === "vi" ? "Số dự án" : "Projects"}</span>
                          <span className="font-medium">128</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{currentLang === "vi" ? "Quốc gia/vùng lãnh thổ" : "Countries/Territories"}</span>
                          <span className="font-medium">23</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* DDI */}
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold text-xl mb-2 text-primary">
                      {currentLang === "vi" ? "Vốn DDI" : "DDI Capital"}
                    </h3>
                    <div className="flex items-end space-x-2">
                      <span className="text-3xl font-bold">65.8</span>
                      <span className="text-lg font-medium mb-1">
                        {currentLang === "vi" ? "nghìn tỷ VNĐ" : "trillion VND"}
                      </span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{currentLang === "vi" ? "Số dự án" : "Projects"}</span>
                          <span className="font-medium">274</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{currentLang === "vi" ? "Doanh nghiệp trong nước" : "Domestic firms"}</span>
                          <span className="font-medium">195</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: '55%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chart */}
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold text-xl mb-2 text-primary">
                      {currentLang === "vi" ? "Phân bổ đầu tư" : "Investment Distribution"}
                    </h3>
                    <div className="h-48 flex items-center justify-center">
                      <span className="text-gray-500">
                        {currentLang === "vi" ? "Biểu đồ thống kê đầu tư" : "Investment statistics chart"}
                      </span>
                    </div>
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
