import React, { useState, useEffect } from 'react';
import { Search, User, Menu, X } from "lucide-react";
import Navigation from "./Navigation";
import logo from '/public/media/vdyfdo3s/dzesa_logo_home_noback.png';
import vnFlag from '/public/media/1rdhyfzn/vnflag.png';
// Nếu có cờ tiếng Anh, import tương tự
// import enFlag from '/public/media/ftwlb1c0/usflag.png';

const Header: React.FC = () => {
  const [currentLang, setCurrentLang] = useState('vi');
  const [date, setDate] = useState(new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Nếu có nhiều ngôn ngữ, có thể mở rộng thêm state

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const weekdays = [
      'Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy',
    ];
    const day = weekdays[date.getDay()];
    const dateNum = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${day} - ${dateNum}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const toggleLanguage = () => {
    setCurrentLang(currentLang === "vi" ? "en" : "vi");
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#024b96] text-white py-1 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <i className="far fa-calendar-alt"></i>
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="/so-do-site" className="hover:text-blue-200 transition-colors duration-200">
              {currentLang === "vi" ? "Sơ đồ site" : "Site Map"}
            </a>
            <span className="border-l border-white h-4"></span>
            <div className="flex items-center gap-2">
              <img 
                src={vnFlag} 
                alt="Language Flag" 
                className="w-5 h-3"
              />
              <select 
                value={currentLang} 
                onChange={(e) => setCurrentLang(e.target.value)} 
                className="bg-transparent text-white border-none focus:outline-none cursor-pointer"
              >
                <option value="en" className="text-black">Tiếng Anh</option>
                <option value="vi" className="text-black">Tiếng Việt</option>
              </select>
            </div>
            <span className="border-l border-white h-4"></span>
            <a href="/umbraco/login" className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-700 text-white hover:bg-blue-600 transition-colors duration-200">
              <User size={14} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-3 md:mb-0">
            <a href="/">
              <img 
                src={logo} 
                alt="DSEZA Logo" 
                className="h-16 w-auto" 
              />
            </a>
            <h1 className="text-[#024b96] font-bold text-xl uppercase leading-tight max-w-[300px] md:max-w-[400px]">
              {currentLang === "vi" 
                ? "BAN QUẢN LÝ KHU CÔNG NGHỆ CAO VÀ CÁC KHU CÔNG NGHIỆP ĐÀ NẴNG" 
                : "DA NANG HI-TECH PARK AND INDUSTRIAL ZONES AUTHORITY"}
            </h1>
          </div>
          
          {/* Desktop Search */}
          <div className="hidden lg:flex items-center justify-end gap-3 ml-auto">
            <div className="relative w-64">
              <input 
                type="text" 
                placeholder={currentLang === "vi" ? "Tìm kiếm" : "Search"}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#024b96] focus:border-transparent pr-10" 
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#024b96] p-1 rounded-full transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Mobile Search and Menu */}
          <div className="lg:hidden flex items-center gap-3">
            <button className="text-[#024b96] p-2 hover:bg-blue-50 rounded-full transition-colors duration-200" onClick={() => {/* Mobile search toggle logic */}}>
              <Search className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#024b96] p-2 hover:bg-blue-50 rounded-full transition-colors duration-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
