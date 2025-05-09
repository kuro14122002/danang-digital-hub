
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface BannerProps {
  currentLang: string;
}

const Banner = ({ currentLang }: BannerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  const banners = [
    {
      id: 1,
      image: "/placeholder.svg",
      title: currentLang === "vi" ? "Khu Công Nghệ Cao Đà Nẵng" : "Da Nang Hi-Tech Park",
      description: currentLang === "vi" 
        ? "Trung tâm công nghệ, đổi mới sáng tạo và khởi nghiệp tại miền Trung Việt Nam" 
        : "Center for Technology, Innovation and Startups in Central Vietnam",
      btnText: currentLang === "vi" ? "Xem chi tiết" : "Learn More",
      btnLink: "#"
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: currentLang === "vi" ? "Đầu Tư Vào Đà Nẵng" : "Invest in Da Nang",
      description: currentLang === "vi" 
        ? "Điểm đến đầu tư lý tưởng với cơ sở hạ tầng hiện đại và nguồn nhân lực chất lượng cao" 
        : "Ideal investment destination with modern infrastructure and high-quality workforce",
      btnText: currentLang === "vi" ? "Tìm hiểu thêm" : "Discover More",
      btnLink: "#"
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: currentLang === "vi" ? "Chuyển Đổi Số" : "Digital Transformation",
      description: currentLang === "vi" 
        ? "Thúc đẩy chuyển đổi số trong các khu công nghiệp và doanh nghiệp tại Đà Nẵng" 
        : "Promoting digital transformation in industrial zones and enterprises in Da Nang",
      btnText: currentLang === "vi" ? "Khám phá" : "Explore",
      btnLink: "#"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/40"></div>
          </div>
          
          <div className="container-custom relative h-full flex flex-col justify-center">
            <div className="max-w-lg text-white p-3 md:p-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">{banner.title}</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6">{banner.description}</p>
              <a 
                href={banner.btnLink} 
                className="inline-block bg-white text-primary px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                {banner.btnText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - hide on small screens */}
      <button
        onClick={prevSlide}
        className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors"
      >
        <ChevronLeft size={isMobile ? 20 : 24} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/40 transition-colors"
      >
        <ChevronRight size={isMobile ? 20 : 24} />
      </button>

      {/* Dots - made larger for mobile */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
