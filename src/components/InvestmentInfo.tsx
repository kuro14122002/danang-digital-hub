
import React from 'react';
import { FileText, Search, FileCheck, MailPlus, Users, Map } from 'lucide-react';

interface InvestmentInfoProps {
  currentLang: string;
}

const InvestmentInfo: React.FC<InvestmentInfoProps> = ({ currentLang }) => {
  const investorServices = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: currentLang === "vi" ? "Quy trình đầu tư" : "Investment Process",
      description: currentLang === "vi" ? "Các bước thực hiện đầu tư dự án" : "Project investment implementation steps",
      link: "/quy-trinh-dau-tu"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: currentLang === "vi" ? "Lĩnh vực thu hút đầu tư" : "Investment Attraction Fields",
      description: currentLang === "vi" ? "Các ngành nghề ưu tiên thu hút đầu tư" : "Priority sectors for investment attraction",
      link: "/linh-vuc-dau-tu"
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: currentLang === "vi" ? "Tra cứu TTHC" : "Administrative Procedures",
      description: currentLang === "vi" ? "Tra cứu các thủ tục hành chính" : "Search administrative procedures",
      link: "/thu-tuc-hanh-chinh"
    },
    {
      icon: <MailPlus className="h-6 w-6" />,
      title: currentLang === "vi" ? "Nộp hồ sơ qua bưu điện" : "Submit via Post",
      description: currentLang === "vi" ? "Hướng dẫn nộp hồ sơ qua bưu điện" : "Guide to submit applications by mail",
      link: "/nop-ho-so-buu-dien"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: currentLang === "vi" ? "Đặt lịch hẹn" : "Appointment",
      description: currentLang === "vi" ? "Đặt lịch hẹn với Ban quản lý" : "Make appointment with management board",
      link: "/dat-lich-hen"
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: currentLang === "vi" ? "Quy hoạch" : "Planning",
      description: currentLang === "vi" ? "Thông tin quy hoạch các khu công nghiệp" : "Industrial zones planning information",
      link: "/quy-hoach"
    }
  ];

  return (
    <div className="py-4">
      <h2 className="text-xl font-bold mb-6 uppercase text-center text-[#024b96]">
        {currentLang === "vi" ? "Dành cho nhà đầu tư" : "For Investors"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {investorServices.map((service, index) => (
          <a 
            key={index} 
            href={service.link} 
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full"
          >
            <div className="flex items-start mb-3">
              <div className="bg-blue-50 p-3 rounded-full text-[#004FA0] mr-3">
                {service.icon}
              </div>
              <h3 className="font-semibold text-[#004FA0]">{service.title}</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">{service.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InvestmentInfo;
