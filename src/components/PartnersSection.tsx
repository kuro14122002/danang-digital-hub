
import React from 'react';

const PartnersSection: React.FC = () => {
  const partners = [
    "Công ty TNHH Tokyo Keiki Precision Technology",
    "Công ty Cổ phần Long Hậu (LHC)",
    "CEI",
    "CÔNG TY CỔ PHẦN CẤP NƯỚC ĐÀ NẴNG (DAWACO)",
    "Viện Nghiên cứu và Đào tạo Việt - Anh (VN-UK)",
    "Nhật Nam Anh",
    "Công ty TNHH Niwa Foundry Việt Nam",
    "Quỹ Đầu tư phát triển thành phố Đà Nẵng (DDIF)",
    "CÔNG TY TNHH MTV XÂY DỰNG EES (EESCONS)",
    "Trung tâm Trọng tài Thương mại Miền Trung (MCAC)"
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {partners.map((partner, index) => (
        <div key={index} className="bg-white border p-2 flex items-center justify-center h-20 rounded">
          <span className="text-xs text-center">{partner}</span>
        </div>
      ))}
    </div>
  );
};

export default PartnersSection;
