import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavigationProps {
  currentLang: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navigation = ({ currentLang, mobileMenuOpen, setMobileMenuOpen }: NavigationProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };
  
  const menuItems = [
    {
      key: "introduction",
      label: currentLang === "vi" ? "Giới thiệu" : "Introduction",
      submenu: [
        {
          label: currentLang === "vi" ? "Giới thiệu" : "Introduction",
          submenu: [
            { label: currentLang === "vi" ? "Thư ngỏ" : "Welcome Letter", href: "#" },
            { label: currentLang === "vi" ? "Tổng quan về TP.Đà Nẵng" : "Overview of Da Nang City", href: "#" },
            { label: currentLang === "vi" ? "Tổng quan về Ban Quản lý" : "About DSEZA", href: "#", 
              submenu: [
                { label: currentLang === "vi" ? "Chức năng, nhiệm vụ" : "Functions and Tasks", href: "#" },
                { label: currentLang === "vi" ? "Các phòng Ban" : "Departments", href: "#" },
                { label: currentLang === "vi" ? "Đơn vị trực thuộc" : "Affiliated Units", href: "#" }
              ] 
            }
          ]
        },
        {
          label: currentLang === "vi" ? "Khu Hành chính" : "Administrative Areas",
          submenu: [
            { label: currentLang === "vi" ? "Khu công nghệ cao Đà Nẵng" : "Da Nang Hi-Tech Park", href: "#" },
            { label: currentLang === "vi" ? "Khu thương mại tự do Đà Nẵng" : "Da Nang Free Trade Zone", href: "#" },
            { label: currentLang === "vi" ? "Khu công nghệ thông tin tập trung" : "IT Park", href: "#" },
            { 
              label: currentLang === "vi" ? "Các Khu công nghiệp Đà Nẵng" : "Da Nang Industrial Zones", 
              href: "#",
              submenu: [
                { label: currentLang === "vi" ? "Khu công nghiệp Hòa Khánh" : "Hoa Khanh Industrial Zone", href: "#" },
                { label: currentLang === "vi" ? "Khu công nghiệp Hòa Khánh mở rộng" : "Hoa Khanh Extended Industrial Zone", href: "#" },
                { label: currentLang === "vi" ? "Khu công nghiệp Đà Nẵng" : "Da Nang Industrial Zone", href: "#" },
                { label: currentLang === "vi" ? "Khu công nghiệp Dịch vụ Thủy sản Đà Nẵng" : "Da Nang Fishery Service Industrial Zone", href: "#" },
                { label: currentLang === "vi" ? "Khu công nghiệp Hòa Cầm" : "Hoa Cam Industrial Zone", href: "#" },
                { label: currentLang === "vi" ? "Khu công nghiệp Liên Chiểu" : "Lien Chieu Industrial Zone", href: "#" },
                { label: currentLang === "vi" ? "Khu công nghiệp Hòa Ninh" : "Hoa Ninh Industrial Zone", href: "#" }
              ]
            }
          ]
        }
      ]
    },
    {
      key: "news",
      label: currentLang === "vi" ? "Tin tức" : "News",
      submenu: [
        {
          label: currentLang === "vi" ? "Tin tức | Sự kiện" : "News | Events",
          submenu: [
            { label: currentLang === "vi" ? "Đầu tư - Hợp tác Quốc tế" : "Investment - International Cooperation", href: "#" },
            { label: currentLang === "vi" ? "Doanh nghiệp" : "Business", href: "#" },
            { label: currentLang === "vi" ? "Chuyển đổi số" : "Digital Transformation", href: "#" },
            { label: currentLang === "vi" ? "Đào tạo, Ươm tạo Khởi nghiệp" : "Training, Startup Incubation", href: "#" },
            { label: currentLang === "vi" ? "Hoạt động Ban Quản lý" : "Management Board Activities", href: "#" },
            { label: currentLang === "vi" ? "Tin khác" : "Other News", href: "#" }
          ]
        },
        {
          label: currentLang === "vi" ? "Xem thêm" : "More",
          submenu: [
            { label: currentLang === "vi" ? "Lịch công tác" : "Work Schedule", href: "#" },
            { label: currentLang === "vi" ? "Thông báo" : "Announcements", href: "#" },
            { label: currentLang === "vi" ? "Thông tin báo chí" : "Press Information", href: "#" }
          ]
        }
      ]
    },
    {
      key: "business",
      label: currentLang === "vi" ? "Doanh nghiệp" : "Business",
      submenu: [
        {
          label: currentLang === "vi" ? "Báo cáo" : "Reports",
          submenu: [
            { label: currentLang === "vi" ? "Báo cáo trực tuyến về DHPIZA" : "Online Reports on DHPIZA", href: "#" },
            { label: currentLang === "vi" ? "Báo cáo giám sát và đánh giá đầu tư" : "Investment Monitoring and Evaluation Reports", href: "#" },
            { label: currentLang === "vi" ? "Mẫu | Bảng biểu báo cáo" : "Forms | Report Tables", href: "#" }
          ]
        },
        {
          label: currentLang === "vi" ? "Xem thêm" : "More",
          submenu: [
            { label: currentLang === "vi" ? "Thủ tục | Hồ sơ | Dữ liệu môi trường" : "Procedures | Documents | Environmental Data", href: "#" },
            { label: currentLang === "vi" ? "Thống kê Doanh nghiệp" : "Business Statistics", href: "#" },
            { label: currentLang === "vi" ? "Tuyển dụng" : "Recruitment", href: "#" }
          ]
        }
      ]
    },
    {
      key: "investmentGuide",
      label: currentLang === "vi" ? "Cẩm nang đầu tư" : "Investment Guide",
      href: "/investment-guide"
    },
    {
      key: "documents",
      label: currentLang === "vi" ? "Văn bản" : "Documents",
      submenu: [
        {
          label: currentLang === "vi" ? "Văn bản pháp luật" : "Legal Documents",
          submenu: [
            { label: currentLang === "vi" ? "Văn bản pháp quy Trung ương" : "Central Regulatory Documents", href: "#" },
            { label: currentLang === "vi" ? "Văn bản pháp quy địa phương" : "Local Regulatory Documents", href: "#" },
            { label: currentLang === "vi" ? "Văn bản Chỉ đạo điều hành" : "Directive Documents", href: "#" },
            { label: currentLang === "vi" ? "Văn bản CCHC" : "Administrative Reform Documents", href: "#" }
          ]
        },
        {
          label: currentLang === "vi" ? "Xem thêm" : "More",
          submenu: [
            { label: currentLang === "vi" ? "Văn bản hướng dẫn" : "Guidance Documents", href: "#" },
            { label: currentLang === "vi" ? "Góp ý dự thảo Văn bản" : "Draft Document Feedback", href: "#" }
          ]
        }
      ]
    },
    {
      key: "administration",
      label: currentLang === "vi" ? "Cải cách hành chính" : "Administrative Reform",
      submenu: [
        {
          label: currentLang === "vi" ? "Ứng dụng và dịch vụ" : "Applications and Services",
          submenu: [
            { label: currentLang === "vi" ? "Dịch vụ công trực tuyến" : "Online Public Services", href: "#" },
            { label: currentLang === "vi" ? "Bưu chính công ích" : "Postal Service", href: "#" },
            { label: currentLang === "vi" ? "Tra cứu hồ sơ" : "Record Lookup", href: "#" },
            { label: currentLang === "vi" ? "Đặt lịch hẹn giao dịch trực tuyển" : "Online Transaction Appointment", href: "#" },
            { label: currentLang === "vi" ? "Đánh giá chất lượng dịch vụ HCC" : "HCC Service Quality Assessment", href: "#" }
          ]
        },
        {
          label: currentLang === "vi" ? "Văn bản" : "Documents",
          submenu: [
            { label: currentLang === "vi" ? "Thủ tục hành chính" : "Administrative Procedures", href: "#" },
            { 
              label: currentLang === "vi" ? "Quy trình thực hiện TTHC" : "Administrative Procedure Process", 
              submenu: [
                { label: currentLang === "vi" ? "Lĩnh vực đầu tư" : "Investment Field", href: "#" }
              ]
            },
            { label: currentLang === "vi" ? "Văn bản CCHC" : "Administrative Reform Documents", href: "#" }
          ]
        }
      ]
    },
    {
      key: "contact",
      label: currentLang === "vi" ? "Liên hệ" : "Contact",
      href: "/contact"
    }
  ];

  return (
    <nav className="bg-[#024b96] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto relative">
        {/* Mobile menu button */}
        <div className="flex items-center justify-between py-3 lg:hidden px-4">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none flex items-center gap-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="text-base font-medium">{currentLang === "vi" ? "Menu" : "Menu"}</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex h-14">
            {menuItems.map((item) => (
              <li key={item.key} className="relative group h-full">
                {item.href ? (
                  <a 
                    href={item.href}
                    className="block px-6 py-4 h-full hover:bg-[#023e7d] transition-colors duration-200 font-medium text-base"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button 
                    className="flex items-center px-6 py-4 h-full hover:bg-[#023e7d] transition-colors duration-200 group-hover:bg-[#023e7d] font-medium text-base"
                    onClick={() => toggleDropdown(item.key)}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </button>
                )}
                {item.submenu && activeDropdown === item.key && (
                  <div className="absolute left-0 top-full w-full bg-white text-gray-800 shadow-lg z-50 py-4 px-6 rounded-b-lg border-t-2 border-[#024b96]">
                    <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto">
                      {item.submenu.map((sub, index) => (
                        <div key={index} className="mb-4">
                          <p className="font-semibold text-[#024b96] mb-3 text-lg border-b pb-2">{sub.label}</p>
                          {sub.submenu && (
                            <ul className="space-y-3">
                              {sub.submenu.map((subItem, subIndex) => (
                                <li key={subIndex} className="relative group/sub">
                                  <a 
                                    href={subItem.href} 
                                    className="block text-sm hover:text-[#024b96] transition-colors duration-200"
                                  >
                                    {subItem.label}
                                  </a>
                                  {subItem.submenu && (
                                    <div className="absolute left-full top-0 ml-4 w-64 bg-white text-gray-800 shadow-lg z-50 py-3 px-4 rounded-lg border-t-2 border-[#024b96] hidden group-hover/sub:block">
                                      <ul className="space-y-2">
                                        {subItem.submenu.map((nestedItem, nestedIndex) => (
                                          <li key={nestedIndex}>
                                            <a 
                                              href={nestedItem.href} 
                                              className="block text-sm hover:text-[#024b96] transition-colors duration-200"
                                            >
                                              {nestedItem.label}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white text-gray-800 shadow-lg z-50 max-h-[80vh] overflow-y-auto px-4 py-3">
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.key} className="border-b border-gray-100 pb-2">
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="block py-2 px-3 text-[#024b96] font-medium hover:bg-gray-100 rounded-md transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <>
                      <button 
                        className="flex justify-between items-center w-full py-2 px-3 text-[#024b96] font-medium hover:bg-gray-100 rounded-md transition-colors duration-200"
                        onClick={() => toggleDropdown(item.key)}
                      >
                        {item.label}
                        {item.submenu && <ChevronDown className={`h-4 w-4 transform ${activeDropdown === item.key ? 'rotate-180' : ''}`} />}
                      </button>
                      {item.submenu && activeDropdown === item.key && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.submenu.map((sub, index) => (
                            <div key={index} className="border-l-2 border-[#024b96] pl-3">
                              <p className="font-semibold text-[#024b96] mb-2 text-sm">{sub.label}</p>
                              {sub.submenu && (
                                <ul className="space-y-2">
                                  {sub.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex} className="relative">
                                      {subItem.href ? (
                                        <a 
                                          href={subItem.href} 
                                          className="block text-sm text-gray-700 hover:text-[#024b96] py-1 px-2 hover:bg-gray-100 rounded transition-colors duration-200"
                                          onClick={() => setMobileMenuOpen(false)}
                                        >
                                          {subItem.label}
                                        </a>
                                      ) : (
                                        <>
                                          <button 
                                            className="flex justify-between items-center w-full text-sm text-gray-700 hover:text-[#024b96] py-1 px-2 hover:bg-gray-100 rounded transition-colors duration-200"
                                            onClick={() => toggleDropdown(`${item.key}-${index}-${subIndex}`)}
                                          >
                                            {subItem.label}
                                            {subItem.submenu && <ChevronDown className={`h-3 w-3 transform ${activeDropdown === `${item.key}-${index}-${subIndex}` ? 'rotate-180' : ''}`} />}
                                          </button>
                                          {subItem.submenu && activeDropdown === `${item.key}-${index}-${subIndex}` && (
                                            <ul className="pl-4 mt-1 space-y-1 border-l-2 border-gray-200">
                                              {subItem.submenu.map((nestedItem, nestedIndex) => (
                                                <li key={nestedIndex}>
                                                  <a 
                                                    href={nestedItem.href} 
                                                    className="block text-xs text-gray-600 hover:text-[#024b96] py-1 px-2 hover:bg-gray-100 rounded transition-colors duration-200"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                  >
                                                    {nestedItem.label}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          )}
                                        </>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
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
