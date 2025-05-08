
import React from 'react';
import { FileText, Globe, Search, Mail, Star, TrendingUp } from "lucide-react";

interface QuickLinksProps {
  currentLang: string;
}

const QuickLinks: React.FC<QuickLinksProps> = ({ currentLang }) => {
  const services = [
    { 
      label: currentLang === "vi" ? "Lịch công tác" : "Work Schedule", 
      icon: <FileText className="h-6 w-6" />,
      link: "/lich-cong-tac"
    },
    { 
      label: currentLang === "vi" ? "Dịch vụ công trực tuyến" : "Online Public Services", 
      icon: <Globe className="h-6 w-6" />,
      link: "/dich-vu-cong"
    },
    { 
      label: currentLang === "vi" ? "Tra cứu hồ sơ" : "Document Lookup", 
      icon: <Search className="h-6 w-6" />,
      link: "/tra-cuu-ho-so"
    },
    { 
      label: currentLang === "vi" ? "Bưu chính công ích" : "Postal Service", 
      icon: <Mail className="h-6 w-6" />,
      link: "/buu-chinh-cong-ich"
    },
    { 
      label: currentLang === "vi" ? "Đánh giá chất lượng dịch vụ HCC" : "HCC Service Quality Assessment", 
      icon: <Star className="h-6 w-6" />,
      link: "/danh-gia-chat-luong"
    },
    { 
      label: currentLang === "vi" ? "Dự án khuyến khích đầu tư" : "Investment Projects", 
      icon: <TrendingUp className="h-6 w-6" />,
      link: "/du-an-khuyen-khich-dau-tu"
    }
  ];

  return (
    <section className="py-6 border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="bg-white border rounded-md p-3 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                <span className="text-[#024b96]">
                  {service.icon}
                </span>
              </div>
              <span className="text-sm text-[#024b96] font-medium line-clamp-2">{service.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
