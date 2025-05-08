
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IndustrialZones: React.FC = () => {
  const zones = [
    {
      id: 1,
      name: "Khu Công Nghệ Cao Đà Nẵng",
      nameEn: "Da Nang Hi-Tech Park",
      area: "1,128.4 ha",
      image: "/media/tcwbbl0d/khu-cnc.jpeg",
      description: "Khu Công nghệ cao Đà Nẵng được Thủ tướng Chính phủ quyết định thành lập năm 2010, là một khu công nghệ cao đa chức năng...",
      link: "/kcnc-da-nang"
    },
    {
      id: 2,
      name: "Khu Công Nghiệp Hòa Khánh",
      nameEn: "Hoa Khanh Industrial Zone",
      area: "196 ha",
      image: "/media/pnjblcbf/h1.jpg",
      description: "Khu công nghiệp Hòa Khánh là khu công nghiệp đầu tiên của Đà Nẵng được thành lập năm 1996...",
      link: "/kcn-hoa-khanh"
    },
    {
      id: 3,
      name: "Khu Công Nghiệp Liên Chiểu",
      nameEn: "Lien Chieu Industrial Zone",
      area: "300 ha",
      image: "/media/bnsp35dc/iconmtdt5.png",
      description: "Khu công nghiệp Liên Chiểu được thành lập năm 2003, chuyên về sản xuất công nghiệp nặng...",
      link: "/kcn-lien-chieu"
    },
    {
      id: 4,
      name: "Khu CNTT Tập Trung",
      nameEn: "Concentrated IT Park",
      area: "341 ha",
      image: "/media/o3jnwlci/khu-công-nghe-thong-tin-tap-trung.png",
      description: "Khu CNTT tập trung Đà Nẵng là trung tâm công nghệ thông tin lớn của miền Trung...",
      link: "/kcntt-da-nang"
    },
    {
      id: 5,
      name: "Khu Công Nghiệp Hòa Cầm",
      nameEn: "Hoa Cam Industrial Zone",
      area: "142.8 ha",
      image: "/media/rmxb45pf/iconmtdt2.png",
      description: "Khu công nghiệp Hòa Cầm được thành lập năm 2003, tập trung vào các doanh nghiệp vừa và nhỏ...",
      link: "/kcn-hoa-cam"
    }
  ];

  return (
    <div className="relative py-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {zones.map(zone => (
          <SwiperSlide key={zone.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
              <div className="relative h-40">
                <img 
                  src={zone.image} 
                  alt={zone.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-2 px-4">
                  <h3 className="text-white font-semibold text-lg">{zone.name}</h3>
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <div className="mb-2 flex items-center">
                  <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {zone.area}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                  {zone.description}
                </p>
                <a 
                  href={zone.link}
                  className="self-start text-sm bg-[#024b96] text-white px-3 py-1.5 rounded hover:bg-blue-700 transition mt-auto inline-flex items-center"
                >
                  Chi tiết
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IndustrialZones;
