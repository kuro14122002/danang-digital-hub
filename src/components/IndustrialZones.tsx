
import { FileBarChart, Building2, Warehouse, MapPin } from "lucide-react";

interface IndustrialZonesProps {
  currentLang: string;
}

const IndustrialZones = ({ currentLang }: IndustrialZonesProps) => {
  const zones = [
    {
      id: "dnhtp",
      name: currentLang === "vi" ? "Khu Công Nghệ Cao Đà Nẵng" : "Da Nang Hi-Tech Park",
      image: "/placeholder.svg",
      area: "1,128.4",
      companies: 24,
      occupancy: 65,
      href: "#"
    },
    {
      id: "hoakhanh",
      name: currentLang === "vi" ? "KCN Hòa Khánh" : "Hoa Khanh Industrial Zone",
      image: "/placeholder.svg",
      area: "396.3",
      companies: 72,
      occupancy: 95,
      href: "#"
    },
    {
      id: "danang",
      name: currentLang === "vi" ? "KCN Đà Nẵng" : "Da Nang Industrial Zone",
      image: "/placeholder.svg",
      area: "73.5",
      companies: 25,
      occupancy: 98,
      href: "#"
    },
    {
      id: "hoacam",
      name: currentLang === "vi" ? "KCN Hòa Cầm" : "Hoa Cam Industrial Zone",
      image: "/placeholder.svg",
      area: "142.8",
      companies: 38,
      occupancy: 87,
      href: "#"
    },
    {
      id: "lienchieu",
      name: currentLang === "vi" ? "KCN Liên Chiểu" : "Lien Chieu Industrial Zone",
      image: "/placeholder.svg",
      area: "320.5",
      companies: 60,
      occupancy: 82,
      href: "#"
    },
    {
      id: "thuysandn",
      name: currentLang === "vi" ? "KCN Dịch vụ Thủy sản" : "Fishery Services Industrial Zone",
      image: "/placeholder.svg",
      area: "22.1",
      companies: 8,
      occupancy: 75,
      href: "#"
    }
  ];

  return (
    <section className="py-10 bg-primary text-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {currentLang === "vi" ? "Khu Công Nghệ Cao & Các Khu Công Nghiệp" : "Hi-Tech Park & Industrial Zones"}
          </h2>
          <a 
            href="/zones" 
            className="bg-white text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            {currentLang === "vi" ? "Xem tất cả" : "View all"}
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone) => (
            <div key={zone.id} className="bg-white rounded-lg overflow-hidden shadow-lg text-gray-800">
              <div className="relative h-40">
                <img 
                  src={zone.image} 
                  alt={zone.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-bold p-4 text-lg">{zone.name}</h3>
                </div>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} className="text-primary" />
                    <div>
                      <p className="text-xs text-gray-500">
                        {currentLang === "vi" ? "Diện tích (ha)" : "Area (ha)"}
                      </p>
                      <p className="font-semibold">{zone.area}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Building2 size={18} className="text-primary" />
                    <div>
                      <p className="text-xs text-gray-500">
                        {currentLang === "vi" ? "Doanh nghiệp" : "Companies"}
                      </p>
                      <p className="font-semibold">{zone.companies}</p>
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500 mb-1">
                      {currentLang === "vi" ? "Tỷ lệ lấp đầy" : "Occupancy rate"}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${zone.occupancy}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-xs mt-1">{zone.occupancy}%</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <a
                    href={zone.href}
                    className="block text-center bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    {currentLang === "vi" ? "Xem chi tiết" : "View details"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialZones;
