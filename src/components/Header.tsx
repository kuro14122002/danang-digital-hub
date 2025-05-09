// src/components/Header.tsx
import { useState, useEffect } from "react";
import { Search, Globe, User } from "lucide-react";
import Navigation from "./Navigation";

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const Header = ({ currentLang, onLanguageChange }: HeaderProps) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    // ... (code định dạng ngày tháng của bạn)
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
    // ÁP DỤNG THAY ĐỔI Ở ĐÂY: làm cho toàn bộ header dính
    <header className="w-full sticky top-0 z-50 shadow-md"> {/* Thêm shadow-md để dễ thấy hơn */}
      {/* Top Bar */}
      <div className="bg-primary-dark text-white">
        <div className="container-custom flex flex-wrap justify-between items-center py-2 text-sm">
          <div>{formatDate(currentDateTime)}</div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleLanguage} className="flex items-center hover:text-accent">
              <Globe className="h-4 w-4 mr-1" />
              <span>{currentLang === "vi" ? "Tiếng Việt" : "English"}</span>
            </button>
            <a href="/login" className="flex items-center hover:text-accent">
              <User className="h-4 w-4 mr-1" />
              <span>{currentLang === "vi" ? "Đăng nhập" : "Login"}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b"> {/* Giữ lại border-b nếu muốn có đường kẻ dưới phần logo */}
        <div className="container-custom py-4">
          <div className="flex flex-wrap items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
            <img
                src="/media/vdyfdo3s/dzesa_logo_home_noback.png"
                alt="Logo"
                className="logo"
              />
              <div>
                <h1 className="text-primary font-bold text-xl sm:text-2xl">
                  {currentLang === "vi" ? "BAN QUẢN LÝ KHU CÔNG NGHỆ CAO VÀ CÁC KHU CÔNG NGHIỆP ĐÀ NẴNG" : "DA NANG SPECIFIC ECONOMIC ZONES AUTHORITY"}
                </h1>
                <p className="text-sm text-gray-600">
                  {currentLang === "vi" ? "DSEZA - Đà Nẵng" : "DSEZA - Da Nang"}
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="mt-4 w-full lg:mt-0 lg:w-auto lg:max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder={currentLang === "vi" ? "Tìm kiếm..." : "Search..."}
                  className="w-full px-4 py-2 border rounded-full pr-10"
                />
                <button className="absolute right-3 top-2.5">
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      {/* Bỏ các lớp sticky khỏi Nav vì Header đã xử lý */}
      <Navigation
        currentLang={currentLang}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Header;