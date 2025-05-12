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
import { ChevronDown, Search, MapPin, Briefcase, FileText, Video, Link as LinkIcon, CalendarDays, ArrowRight } from "lucide-react"; // Thêm ArrowRight
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [currentLang, setCurrentLang] = useState("vi");
  const isMobile = useIsMobile();

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  const quickLinks = [
    { label: currentLang === "vi" ? "Dịch vụ công trực tuyến" : "Online Public Services", href: "#" },
    { label: currentLang === "vi" ? "Thủ tục hành chính" : "Administrative Procedures", href: "#" },
    { label: currentLang === "vi" ? "Công khai kết quả TTHC" : "Procedure Results", href: "#" },
    { label: currentLang === "vi" ? "Tiếp nhận phản ánh" : "Receive Feedback", href: "#" },
    { label: currentLang === "vi" ? "Đặt lịch hẹn" : "Appointment Booking", href: "#" },
  ];

  const utilityLinks = [
    { icon: CalendarDays, label: currentLang === "vi" ? "Lịch công tác" : "Work Schedule", href: "#" },
    { icon: Briefcase, label: currentLang === "vi" ? "Dịch vụ công trực tuyến" : "Online Public Services", href: "#" },
    { icon: Search, label: currentLang === "vi" ? "Tra cứu hồ sơ" : "Document Lookup", href: "#" },
    { icon: FileText, label: currentLang === "vi" ? "Bưu chính công ích" : "Postal Service", href: "#" },
    { icon: Briefcase, label: currentLang === "vi" ? "Đánh giá chất lượng dịch vụ HCC" : "HCC Service Quality Assessment", href: "#" },
    { icon: Briefcase, label: currentLang === "vi" ? "Dự án khuyến khích đầu tư" : "Investment Projects", href: "#" },
    { icon: FileText, label: currentLang === "vi" ? "Báo cáo giám sát và đánh giá đầu tư" : "Investment Monitoring & Evaluation Reports", href: "#" },
    { icon: FileText, label: currentLang === "vi" ? "Thủ tục - Hồ sơ - Dữ liệu môi trường" : "Environmental Procedures - Documents - Data", href: "#" },
    { icon: FileText, label: currentLang === "vi" ? "Thủ tục hành chính" : "Administrative Procedures", href: "#" },
    { icon: FileText, label: currentLang === "vi" ? "Thông tin báo chí" : "Press Information", href: "#" },
    { icon: FileText, label: currentLang === "vi" ? "Báo cáo thống kê" : "Statistical Reports", href: "#" },
    { icon: Briefcase, label: currentLang === "vi" ? "Mua sắm công" : "Public Procurement", href: "#" },
    { icon: FileText, label: currentLang === "vi" ? "Góp ý dự thảo văn bản" : "Draft Document Feedback", href: "#" },
    { icon: CalendarDays, label: currentLang === "vi" ? "Đặt lịch hẹn giao dịch trực tuyến" : "Online Appointment Booking", href: "#" },
  ];

  const mediaAssets = {
    images: [
      { id: 1, src: "/placeholder.svg", alt: "Image 1", title: "Lễ Khởi Công Dự Án Mới" },
      { id: 2, src: "/placeholder.svg", alt: "Image 2", title: "Hội Thảo Xúc Tiến Đầu Tư" },
      { id: 3, src: "/placeholder.svg", alt: "Image 3", title: "Hoạt Động Hỗ Trợ Cộng Đồng" },
    ],
    videos: [
      { id: 1, src: "/placeholder.svg", title: "Video Giới Thiệu Khu Công Nghệ Cao", duration: "5:30" },
    ],
    links: [
      { id: 1, text: currentLang === "vi" ? "Cổng thông tin điện tử TP. Đà Nẵng" : "Da Nang City Portal", href: "#" },
      { id: 2, text: currentLang === "vi" ? "Sở Kế hoạch và Đầu tư Đà Nẵng" : "Da Nang DPI", href: "#" },
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <main>
        <Banner currentLang={currentLang} />

        <section className="py-4 md:py-6 border-b">
           {/* Quick Links */}
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

        {/* VR 360 Tour Section - THEO HÌNH ẢNH MỚI */}
        <section className="py-6 md:py-8 bg-primary text-white"> {/* Giả sử nền xanh dương đậm là primary */}
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left p-4 md:p-6 rounded-lg" style={{ backgroundColor: 'hsl(var(--primary))' }}> {/* Hoặc màu xanh dương bạn muốn */}
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                  VR 360 TOUR - {currentLang === "vi" ? "KHU CÔNG NGHỆ CAO ĐÀ NẴNG" : "DA NANG HI-TECH PARK"}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold opacity-90">
                  (DEMO)
                </p>
              </div>
              <Button
                variant="default" // Hoặc "outline" nếu bạn muốn viền
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-6 rounded-md text-base md:text-lg"
                onClick={() => window.open("#", "_blank")} // Thay "#" bằng link VR Tour thực tế
              >
                {currentLang === "vi" ? "Khám phá VR360" : "Explore VR360"}
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>


        {/* Utilities Grid - DANH MỤC */}
        <section className="py-6 md:py-10 bg-light">
          {/* ... (Mã phần Danh mục giữ nguyên như lần trước) ... */}
           <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-primary">
              {currentLang === "vi" ? "DANH MỤC" : "CATEGORIES"}
            </h2>

            {isMobile ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full bg-white border rounded-md p-3 flex items-center justify-between">
                  <span className="text-primary font-medium">
                    {currentLang === "vi" ? "Xem các danh mục" : "View categories"}
                  </span>
                  <ChevronDown className="h-4 w-4 text-primary" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[calc(100vw-2rem)] bg-white">
                  <DropdownMenuGroup>
                    {utilityLinks.map((link, index) => (
                      <DropdownMenuItem key={index} asChild>
                        <a href={link.href} className="w-full cursor-pointer flex items-center py-2 px-3">
                          {link.icon && <link.icon size={18} className="mr-2 text-primary" />}
                          {link.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6">
                {utilityLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="bg-white border rounded-lg p-4 text-center hover:shadow-xl transition-shadow flex flex-col items-center justify-center aspect-square"
                  >
                    {link.icon && <link.icon size={isMobile ? 24 : 32} className="mb-2 text-primary" />}
                    <span className="text-primary font-medium text-sm md:text-base leading-tight">{link.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* BẢN ĐỒ SỐ & BÁO CÁO TRỰC TUYẾN */}
        <section className="py-8 md:py-12 bg-primary text-white">
          {/* ... (Mã phần Bản đồ số & Báo cáo trực tuyến giữ nguyên như lần trước) ... */}
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold">
                  - {currentLang === "vi" ? "BẢN ĐỒ SỐ KHU CNC & CÁC KCN ĐÀ NẴNG" : "DIGITAL MAP OF HI-TECH PARK & DA NANG IZs"}
                </h2>
                <h2 className="text-2xl md:text-3xl font-bold mt-1">
                  - {currentLang === "vi" ? "BÁO CÁO TRỰC TUYẾN" : "ONLINE REPORTS"}
                </h2>
              </div>
                <Button
                  variant="outline"
                  className="bg-white text-primary hover:bg-gray-100 hover:text-primary-dark border-2 border-white font-semibold py-2 px-6 rounded-md"
                  onClick={() => window.open("#", "_blank")}
                >
                  {currentLang === "vi" ? "Khám phá Bản đồ số" : "Explore Digital Map"}
                  <Search size={20} className="ml-2" />
                </Button>
            </div>
          </div>
        </section>

        {/* TƯ LIỆU */}
        <section className="py-8 md:py-12">
         {/* ... (Mã phần Tư liệu giữ nguyên như lần trước) ... */}
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-primary">
              {currentLang === "vi" ? "TƯ LIỆU" : "RESOURCES"}
            </h2>
            <Tabs defaultValue="images" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:max-w-md mx-auto mb-6">
                <TabsTrigger value="images">{currentLang === "vi" ? "Hình ảnh" : "Images"}</TabsTrigger>
                <TabsTrigger value="videos">{currentLang === "vi" ? "Video" : "Videos"}</TabsTrigger>
                <TabsTrigger value="links">{currentLang === "vi" ? "Liên kết" : "Links"}</TabsTrigger>
              </TabsList>
              <TabsContent value="images">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {mediaAssets.images.map(image => (
                    <div key={image.id} className="group relative rounded-lg overflow-hidden shadow-md">
                      <img src={image.src} alt={image.alt} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                      <div className="absolute bottom-0 left-0 p-3">
                        <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="videos">
                {mediaAssets.videos.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {mediaAssets.videos.map(video => (
                      <div key={video.id} className="group relative rounded-lg overflow-hidden shadow-md">
                        <img src={video.src} alt={video.title} className="w-full h-48 object-cover" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Video size={48} className="text-white/80" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-3 bg-black/60 w-full">
                          <h3 className="text-white font-semibold text-sm">{video.title}</h3>
                          <p className="text-xs text-gray-300">{video.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-600">{currentLang === "vi" ? "Chưa có video." : "No videos yet."}</p>
                )}
              </TabsContent>
              <TabsContent value="links">
                {mediaAssets.links.length > 0 ? (
                  <ul className="space-y-3">
                    {mediaAssets.links.map(link => (
                      <li key={link.id} className="bg-white p-3 border rounded-md hover:shadow-md transition-shadow">
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                          <LinkIcon size={18} className="mr-2" />
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-center text-gray-600">{currentLang === "vi" ? "Chưa có liên kết nào." : "No links yet."}</p>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Investment Statistics - mobile responsive */}
        <section className="py-6 md:py-10">
            {/* ... (Mã Investment Statistics giữ nguyên) ... */}
        </section>
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Index;
