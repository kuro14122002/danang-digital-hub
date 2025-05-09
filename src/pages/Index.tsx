
// src/pages/Index.tsx
import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FeaturedNews from "../components/FeaturedNews";
import IndustrialZones from "../components/IndustrialZones";
import InvestorInfo from "../components/InvestorInfo";
import InvestmentEnv from "../components/InvestmentEnv";
import Footer from "../components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [currentLang, setCurrentLang] = useState("vi");
  const [utilitiesOpen, setUtilitiesOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  // Định nghĩa các Quick Links dựa trên ngôn ngữ hiện tại
  const quickLinks = [
    { label: currentLang === "vi" ? "Dịch vụ công trực tuyến" : "Online Public Services", href: "#" },
    { label: currentLang === "vi" ? "Thủ tục hành chính" : "Administrative Procedures", href: "#" },
    { label: currentLang === "vi" ? "Công khai kết quả TTHC" : "Procedure Results", href: "#" },
    { label: currentLang === "vi" ? "Tiếp nhận phản ánh" : "Receive Feedback", href: "#" },
    { label: currentLang === "vi" ? "Đặt lịch hẹn" : "Appointment Booking", href: "#" },
  ];

  // Định nghĩa các Utilities Links dựa trên ngôn ngữ hiện tại
  const utilityLinks = [
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
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <main>
        <Banner currentLang={currentLang} />

        {/* Quick Links - improved mobile spacing */}
        <section className="py-4 md:py-6 border-b">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-white border rounded-md p-3 text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-primary font-medium text-sm md:text-base">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <FeaturedNews currentLang={currentLang} />
        <IndustrialZones currentLang={currentLang} />
        <InvestorInfo currentLang={currentLang} />
        <InvestmentEnv currentLang={currentLang} />

        {/* VR Tour Banner - optimized for mobile */}
        <section className="py-6 md:py-10">
          <div className="container-custom">
            <div className="rounded-lg overflow-hidden relative h-40 sm:h-48 md:h-64">
              <img
                src="/placeholder.svg" // Replace with actual image
                alt={currentLang === "vi" ? "Tham quan VR360" : "VR360 Tour"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">
                    {currentLang === "vi" ? "Khám Phá VR360 Tour" : "Explore VR360 Tour"}
                  </h2>
                  <p className="mb-3 md:mb-4 text-sm md:text-base">
                    {currentLang === "vi"
                      ? "Tham quan Khu Công nghệ cao Đà Nẵng theo góc nhìn 360°"
                      : "Take a 360° virtual tour of Da Nang Hi-Tech Park"}
                  </p>
                  <a
                    href="#" // Replace with actual link
                    className="bg-white text-primary px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm md:text-base"
                  >
                    {currentLang === "vi" ? "Trải Nghiệm Ngay" : "Experience Now"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Utilities Grid - with dropdown for mobile */}
        <section className="py-6 md:py-10 bg-light">
          <div className="container-custom">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-8">
              {currentLang === "vi" ? "Tiện Ích" : "Utilities"}
            </h2>
            
            {/* Mobile dropdown version */}
            {isMobile ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full bg-white border rounded-md p-3 flex items-center justify-between">
                  <span className="text-primary font-medium">
                    {currentLang === "vi" ? "Xem các tiện ích" : "View utilities"}
                  </span>
                  <ChevronDown className="h-4 w-4 text-primary" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[calc(100vw-2rem)] bg-white">
                  <DropdownMenuGroup>
                    {utilityLinks.map((link, index) => (
                      <DropdownMenuItem key={index} asChild>
                        <a href={link.href} className="w-full cursor-pointer">
                          {link.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // Desktop grid version
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {utilityLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="bg-white border rounded-md p-3 text-center hover:shadow-md transition-shadow flex items-center justify-center h-14 md:h-16"
                  >
                    <span className="text-primary font-medium text-sm md:text-base">{link.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Investment Statistics - mobile responsive */}
        <section className="py-6 md:py-10">
          <div className="container-custom">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="card-header">
                <h2 className="text-lg md:text-xl font-bold">
                  {currentLang === "vi" ? "Kết Quả Thu Hút Đầu Tư" : "Investment Results"}
                </h2>
              </div>

              <div className="p-3 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {/* FDI */}
                  <div className="border rounded-lg p-3 md:p-4">
                    <h3 className="font-bold text-lg md:text-xl mb-2 text-primary">
                      {currentLang === "vi" ? "Vốn FDI" : "FDI Capital"}
                    </h3>
                    <div className="flex items-end space-x-2">
                      <span className="text-2xl md:text-3xl font-bold">2.6</span>
                      <span className="text-base md:text-lg font-medium mb-1">
                        {currentLang === "vi" ? "tỷ USD" : "billion USD"}
                      </span>
                    </div>
                    <div className="mt-3 md:mt-4 space-y-2">
                      <div>
                        <div className="flex justify-between text-xs md:text-sm mb-1">
                          <span>{currentLang === "vi" ? "Số dự án" : "Projects"}</span>
                          <span className="font-medium">128</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs md:text-sm mb-1">
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
                  <div className="border rounded-lg p-3 md:p-4">
                    <h3 className="font-bold text-lg md:text-xl mb-2 text-primary">
                      {currentLang === "vi" ? "Vốn DDI" : "DDI Capital"}
                    </h3>
                    <div className="flex items-end space-x-2">
                      <span className="text-2xl md:text-3xl font-bold">65.8</span>
                      <span className="text-base md:text-lg font-medium mb-1">
                        {currentLang === "vi" ? "nghìn tỷ VNĐ" : "trillion VND"}
                      </span>
                    </div>
                    <div className="mt-3 md:mt-4 space-y-2">
                      <div>
                        <div className="flex justify-between text-xs md:text-sm mb-1">
                          <span>{currentLang === "vi" ? "Số dự án" : "Projects"}</span>
                          <span className="font-medium">274</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs md:text-sm mb-1">
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
                  <div className="border rounded-lg p-3 md:p-4">
                    <h3 className="font-bold text-lg md:text-xl mb-2 text-primary">
                      {currentLang === "vi" ? "Phân bổ đầu tư" : "Investment Distribution"}
                    </h3>
                    <div className="h-36 md:h-48 flex items-center justify-center">
                      <span className="text-gray-500 text-sm md:text-base">
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
