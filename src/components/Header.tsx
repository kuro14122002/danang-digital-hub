
import { useState, useEffect } from "react";
import { Search, Globe, User } from "lucide-react";
import Navigation from "./Navigation";

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentLang, setCurrentLang] = useState("vi");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(currentLang === "vi" ? "vi-VN" : "en-US", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };
  
  const toggleLanguage = () => {
    setCurrentLang(currentLang === "vi" ? "en" : "vi");
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary-dark text-white">
        <div className="container-custom flex flex-wrap justify-between items-center py-2 text-sm">
          <div>{formatDate(currentDateTime)}</div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleLanguage} className="flex items-center hover:text-accent">
              <Globe className="h-4 w-4 mr-1" />
              <span>{currentLang === "vi" ? "English" : "Tiếng Việt"}</span>
            </button>
            <a href="/login" className="flex items-center hover:text-accent">
              <User className="h-4 w-4 mr-1" />
              <span>{currentLang === "vi" ? "Đăng nhập" : "Login"}</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <div className="flex flex-wrap items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/placeholder.svg" alt="DSEZA Logo" className="h-16 w-auto mr-3" />
              <div>
                <h1 className="text-primary font-bold text-xl sm:text-2xl">
                  {currentLang === "vi" ? "Ban Quản Lý Khu Công Nghệ Cao và Các Khu Công Nghiệp Đà Nẵng" : "Da Nang Hi-Tech Park and Industrial Zones Authority"}
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
      <Navigation 
        currentLang={currentLang} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
