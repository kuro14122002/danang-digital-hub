
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '/public/css/sites/styles.css';

interface BannerProps {
  currentLang?: string;
}

const Banner: React.FC<BannerProps> = ({ currentLang = "vi" }) => {
  const slides = [
    {
      bg: '/media/uh1bpkyt/kcnc.png',
      title: currentLang === "vi" ? 'KHU CÔNG NGHỆ CAO ĐÀ NẴNG' : 'DA NANG HI-TECH PARK',
      subtitle: currentLang === "vi" ? 'VR 360 TOUR - KHU CÔNG NGHỆ CAO ĐÀ NẴNG (DEMO)' : 'VR 360 TOUR - DA NANG HI-TECH PARK (DEMO)',
      btn: { text: currentLang === "vi" ? 'Xem thêm' : 'Learn more', link: '/vr360/' },
    },
    {
      bg: '/media/cplcsjnm/mg7153-16981361351081529439819.jpg',
      title: currentLang === "vi" ? 'Chào mừng đến với' : 'Welcome to',
      subtitle: currentLang === "vi" ? 'Ban Quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng' : 'Da Nang Hi-Tech Park and Industrial Zones Authority',
      btn: { text: currentLang === "vi" ? 'Xem thêm' : 'Learn more', link: '/chi-tiet-tin-tuc/thu-ngo/' },
    },
    {
      bg: '/media/t1xnwdpz/cdc.png',
      title: currentLang === "vi" ? 'CDC ĐÀ NẴNG - CỘNG ĐỒNG PHÒNG CHỐNG DỊCH' : 'DA NANG CDC - DISEASE PREVENTION COMMUNITY',
      subtitle: currentLang === "vi" ? 'Hãy Like và Follow Fanpage "CDC Đà Nẵng - Cộng Đồng Phòng Chống Dịch" để cùng nhau chung tay phòng chống dịch bệnh!' : 'Like and Follow "Da Nang CDC - Disease Prevention Community" Fanpage to join hands in disease prevention!',
      btn: { text: currentLang === "vi" ? 'Xem thêm' : 'Learn more', link: 'https://www.facebook.com/CDCDaNangCongdongPhongChongDich' },
    },
  ];

  return (
    <div className="swiper custom-home-banner" style={{ position: 'relative' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        effect="creative"
        creativeEffect={{
          prev: { shadow: true, translate: [0, 0, -400] },
          next: { translate: ['100%', 0, 0] },
        }}
        loop
        speed={1500}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        className="custom-home-banner-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="swiper-slide"
              style={{
                color: '#fff',
                backgroundImage: `url('${slide.bg}')`,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                backgroundSize: 'cover',
                width: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: 400,
              }}
            >
              <div
                className="p-4 m-4"
                style={{
                  background: 'linear-gradient(to bottom, #004fa0, transparent)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  borderRadius: 40,
                  maxWidth: 500,
                }}
              >
                <h2>{slide.title}</h2>
                <h3>{slide.subtitle}</h3>
                <a
                  href={slide.btn.link}
                  className="btn btn-custom-banner mt-2"
                  target={slide.btn.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  {slide.btn.text}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
