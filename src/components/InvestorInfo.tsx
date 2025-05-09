
import { FileText, FileCheck, Map, Search, Globe, SendHorizontal } from "lucide-react";

interface InvestorInfoProps {
  currentLang: string;
}

const InvestorInfo = ({ currentLang }: InvestorInfoProps) => {
  const investorItems = [
    {
      icon: FileText,
      title: currentLang === "vi" ? "Quy trình lĩnh vực đầu tư" : "Investment field process",
      description: currentLang === "vi" 
        ? "Hướng dẫn chi tiết các bước thực hiện đầu tư" 
        : "Detailed guidance on investment steps",
      href: "#"
    },
    {
      icon: Globe,
      title: currentLang === "vi" ? "Lĩnh vực thu hút đầu tư" : "Investment attraction areas",
      description: currentLang === "vi" 
        ? "Các ngành nghề ưu tiên thu hút đầu tư" 
        : "Priority sectors for investment",
      href: "#"
    },
    {
      icon: Map,
      title: currentLang === "vi" ? "Quy hoạch khu chức năng" : "Functional area planning",
      description: currentLang === "vi" 
        ? "Bản đồ quy hoạch các khu công nghiệp" 
        : "Industrial zone planning maps",
      href: "#"
    },
    {
      icon: SendHorizontal,
      title: currentLang === "vi" ? "Đăng ký nộp hồ sơ qua bưu điện" : "Register to submit application by post",
      description: currentLang === "vi" 
        ? "Hướng dẫn nộp hồ sơ qua đường bưu điện" 
        : "Guidance for postal submission",
      href: "#"
    },
    {
      icon: Search,
      title: currentLang === "vi" ? "Tra cứu thủ tục hành chính" : "Look up administrative procedures",
      description: currentLang === "vi" 
        ? "Tra cứu thủ tục hành chính" 
        : "Administrative procedure lookup",
      href: "#"
    },
    {
      icon: FileCheck,
      title: currentLang === "vi" ? "Dịch vụ công trực tuyến" : "Online Public Services",
      description: currentLang === "vi" 
        ? "Thực hiện dịch vụ công trực tuyến" 
        : "Online public services portal",
      href: "#"
    }
  ];

  return (
    <section className="py-10 bg-light">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="card-header bg-primary text-white p-4">
            <h2 className="text-xl font-bold">
              {currentLang === "vi" ? "Dành Cho Nhà Đầu Tư" : "For Investors"}
            </h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {investorItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 p-4 group"
                >
                  <div className="mr-4 text-primary group-hover:text-primary-dark transition-colors">
                    <item.icon size={40} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorInfo;
