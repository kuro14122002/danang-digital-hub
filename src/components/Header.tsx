
// src/components/Header.tsx
import { useState, useEffect } from "react";
import { Search, Globe, User } from "lucide-react";
import Navigation from "./Navigation";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const Header = ({ currentLang, onLanguageChange }: HeaderProps) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    if (currentLang === "vi") {
      const dayOfWeek = new Intl.DateTimeFormat("vi-VN", { weekday: 'long' }).format(date);
      const day = new Intl.DateTimeFormat("vi-VN", { day: 'numeric' }).format(date);
      const month = new Intl.DateTimeFormat("vi-VN", { month: 'numeric' }).format(date);
      const year = new Intl.DateTimeFormat("vi-VN", { year: 'numeric' }).format(date);
      const time = new Intl.DateTimeFormat("vi-VN", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(date);
      return `${dayOfWeek}, ngày ${day} tháng ${month} năm ${year}, ${time}`;
    } else {
      return new Intl.DateTimeFormat("en-US", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(date);
    }
  };

  const toggleLanguage = () => {
    const newLang = currentLang === "vi" ? "en" : "vi";
    onLanguageChange(newLang);
  };

  return (
    <header className={isMobile ? "w-full" : "w-full sticky top-0 z-50 shadow-md"}>
      {/* Top Bar */}
      <div className="bg-primary-dark text-white">
        <div className="container-custom flex flex-wrap justify-between items-center py-2 text-sm">
          <div className="text-xs sm:text-sm">{formatDate(currentDateTime)}</div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleLanguage} className="flex items-center hover:text-accent text-xs sm:text-sm">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span>{currentLang === "vi" ? "Tiếng Việt" : "English"}</span>
            </button>
            <a href="/login" className="flex items-center hover:text-accent text-xs sm:text-sm">
              <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span>{currentLang === "vi" ? "Đăng nhập" : "Login"}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - Not sticky on mobile */}
      <div className="bg-white border-b">
        <div className="container-custom py-3 md:py-4">
          <div className="flex flex-wrap items-center justify-between">
            {/* Logo - hidden on mobile */}
            <div className="hidden sm:flex items-center">
              <img
                src="/media/vdyfdo3s/dzesa_logo_home_noback.png"
                alt="Logo"
                className="logo w-12 h-12 sm:w-auto sm:h-auto"
              />
              <div>
                <h1 className="text-primary font-bold text-base sm:text-xl md:text-2xl leading-tight">
                  {currentLang === "vi" ? "BAN QUẢN LÝ KHU CÔNG NGHỆ CAO VÀ CÁC KHU CÔNG NGHIỆP ĐÀ NẴNG" : "DA NANG SPECIFIC ECONOMIC ZONES AUTHORITY"}
                </h1>
                <p className="text-xs sm:text-sm text-gray-600">
                  {currentLang === "vi" ? "DSEZA - Đà Nẵng" : "DSEZA - Da Nang"}
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="mt-3 w-full lg:mt-0 lg:w-auto lg:max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder={currentLang === "vi" ? "Tìm kiếm..." : "Search..."}
                  className="w-full px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full pr-10 text-sm"
                />
                <button className="absolute right-3 top-1.5 sm:top-2.5">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - This remains sticky on both mobile and desktop */}
      <div className="sticky top-0 z-50"> {/* This wrapper makes only the Navigation sticky */}
        <Navigation
          currentLang={currentLang}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>
    </header>
  );
};

export default Header;
