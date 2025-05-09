
import { Network, Factory, Map, Leaf, Building, Users, Award, Laptop } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface InvestmentEnvProps {
  currentLang: string;
}

const InvestmentEnv = ({ currentLang }: InvestmentEnvProps) => {
  const isMobile = useIsMobile();
  
  const envItems = [
    {
      icon: Factory,
      title: currentLang === "vi" ? "Hạ tầng KCN" : "IZ Infrastructure",
      description: currentLang === "vi" 
        ? "Hạ tầng kỹ thuật hiện đại" 
        : "Modern technical infrastructure",
      href: "#"
    },
    {
      icon: Map,
      title: currentLang === "vi" ? "Giao thông" : "Transportation",
      description: currentLang === "vi" 
        ? "Kết nối đa phương thức" 
        : "Multimodal connectivity",
      href: "#"
    },
    {
      icon: Leaf,
      title: currentLang === "vi" ? "KHCN-Môi trường" : "Science-Environment",
      description: currentLang === "vi" 
        ? "Tiêu chuẩn môi trường cao" 
        : "High environmental standards",
      href: "#"
    },
    {
      icon: Network,
      title: currentLang === "vi" ? "Logistics" : "Logistics",
      description: currentLang === "vi" 
        ? "Hệ thống hậu cần đồng bộ" 
        : "Integrated logistics system",
      href: "#"
    },
    {
      icon: Building,
      title: currentLang === "vi" ? "Hạ tầng xã hội" : "Social Infrastructure",
      description: currentLang === "vi" 
        ? "Dịch vụ xã hội đầy đủ" 
        : "Comprehensive social services",
      href: "#"
    },
    {
      icon: Users,
      title: currentLang === "vi" ? "Nguồn nhân lực" : "Human Resources",
      description: currentLang === "vi" 
        ? "Lao động chất lượng cao" 
        : "High-quality workforce",
      href: "#"
    },
    {
      icon: Award,
      title: currentLang === "vi" ? "CCHC" : "Admin Reform",
      description: currentLang === "vi" 
        ? "Thủ tục đơn giản, nhanh chóng" 
        : "Simple, quick procedures",
      href: "#"
    },
    {
      icon: Laptop,
      title: currentLang === "vi" ? "Chuyển đổi số" : "Digital Transformation",
      description: currentLang === "vi" 
        ? "Ứng dụng công nghệ toàn diện" 
        : "Comprehensive tech application",
      href: "#"
    }
  ];

  return (
    <section className="py-6 md:py-10">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="card-header">
            <h2 className="text-lg md:text-xl font-bold">
              {currentLang === "vi" ? "Môi Trường Đầu Tư" : "Investment Environment"}
            </h2>
          </div>
          
          <div className="p-3 md:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {envItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex flex-col items-center text-center p-3 md:p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 md:mb-3">
                    <item.icon size={isMobile ? 18 : 24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1 text-sm md:text-base">{item.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentEnv;
