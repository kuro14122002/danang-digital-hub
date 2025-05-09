
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavigationProps {
  currentLang: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navigation = ({ currentLang, mobileMenuOpen, setMobileMenuOpen }: NavigationProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const menuItems = [
    {
      key: "introduction",
      label: currentLang === "vi" ? "Giới thiệu" : "Introduction",
      submenu: [
        { label: currentLang === "vi" ? "Thư ngỏ" : "Welcome Letter", href: "#" },
        { label: currentLang === "vi" ? "Tổng quan về TP. Đà Nẵng" : "Overview of Da Nang City", href: "#" },
        { label: currentLang === "vi" ? "Tổng quan về Ban Quản lý" : "About DSEZA", href: "#" }
      ]
    },
    {
      key: "administrativeAreas",
      label: currentLang === "vi" ? "Khu Hành chính" : "Administrative Areas",
      submenu: [
        { label: currentLang === "vi" ? "Khu công nghệ cao Đà Nẵng" : "Da Nang Hi-Tech Park", href: "#" },
        { label: currentLang === "vi" ? "Khu thương mại tự do Đà Nẵng" : "Da Nang Free Trade Zone", href: "#" },
        { label: currentLang === "vi" ? "Khu công nghệ thông tin tập trung" : "IT Park", href: "#" },
        { label: currentLang === "vi" ? "Các Khu công nghiệp Đà Nẵng" : "Da Nang Industrial Zones", href: "#" }
      ]
    },
    {
      key: "news",
      label: currentLang === "vi" ? "Tin tức" : "News",
      submenu: [
        { label: currentLang === "vi" ? "Tin tức | Sự kiện" : "News | Events", href: "#" },
        { label: currentLang === "vi" ? "Xem thêm" : "More", href: "#" }
      ]
    },
    {
      key: "business",
      label: currentLang === "vi" ? "Doanh nghiệp" : "Business",
      submenu: [
        { label: currentLang === "vi" ? "Báo cáo" : "Reports", href: "#" },
        { label: currentLang === "vi" ? "Xem thêm" : "More", href: "#" },
        { label: currentLang === "vi" ? "Cẩm nang đầu tư" : "Investment Guide", href: "#" }
      ]
    },
    {
      key: "documents",
      label: currentLang === "vi" ? "Văn bản" : "Documents",
      submenu: [
        { label: currentLang === "vi" ? "Văn bản pháp luật" : "Legal Documents", href: "#" },
        { label: currentLang === "vi" ? "Xem thêm" : "More", href: "#" }
      ]
    },
    {
      key: "administration",
      label: currentLang === "vi" ? "Cải cách hành chính" : "Administration Reform",
      submenu: [
        { label: currentLang === "vi" ? "Ứng dụng và dịch vụ" : "Applications and Services", href: "#" },
        { label: currentLang === "vi" ? "Văn bản" : "Documents", href: "#" }
      ]
    },
    {
      key: "contact",
      label: currentLang === "vi" ? "Liên hệ" : "Contact",
      href: "#"
    }
  ];

  return (
    <nav className="bg-primary text-white">
      <div className="container-custom relative">
        {/* Mobile menu button - improved touch target */}
        <div className="flex items-center justify-between py-3 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none flex items-center py-2 px-3 rounded-md"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="ml-2 text-base">{currentLang === "vi" ? "Menu" : "Menu"}</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="flex">
            {menuItems.map((item) => (
              <li key={item.key} className="relative group">
                {item.href ? (
                  <a
                    href={item.href}
                    className="block px-4 py-3 hover:bg-primary-dark transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    className="flex items-center px-4 py-3 hover:bg-primary-dark transition-colors"
                    onClick={() => toggleDropdown(item.key)}
                  >
                    {item.label}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                )}

                {item.submenu && (
                  <div className="absolute left-0 hidden group-hover:block bg-white text-gray-800 shadow-lg min-w-[220px] z-50">
                    <ul>
                      {item.submenu.map((subitem, index) => (
                        <li key={index}>
                          <a
                            href={subitem.href}
                            className="block px-4 py-2 hover:bg-gray-100 border-b last:border-0"
                          >
                            {subitem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation - improved */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 bg-primary-dark z-40 shadow-lg max-h-[80vh] overflow-y-auto">
            <ul className="py-2">
              {menuItems.map((item) => (
                <li key={item.key} className="relative">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block px-4 py-4 hover:bg-primary/90 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-4 py-4 hover:bg-primary/90 transition-colors"
                        onClick={() => toggleDropdown(item.key)}
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`} />
                      </button>

                      {item.submenu && activeDropdown === item.key && (
                        <div className="bg-primary/80">
                          <ul>
                            {item.submenu.map((subitem, index) => (
                              <li key={index}>
                                <a
                                  href={subitem.href}
                                  className="block px-8 py-3 hover:bg-primary/90 border-t border-white/10"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subitem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
