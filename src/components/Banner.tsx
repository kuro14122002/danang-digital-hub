import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '/public/css/sites/styles.css'; // Import SCSS/CSS gốc nếu cần

const slides = [
  {
    bg: '/media/uh1bpkyt/kcnc.png',
    title: 'KHU CÔNG NGHỆ CAO ĐÀ NẴNG',
    subtitle: 'VR 360 TOUR - KHU CÔNG NGHỆ CAO ĐÀ NẴNG (DEMO)',
    btn: { text: 'Xem thêm', link: '/vr360/' },
  },
  {
    bg: '/media/cplcsjnm/mg7153-16981361351081529439819.jpg',
    title: 'Welcome to',
    subtitle: 'Ban Quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng',
    btn: { text: 'Xem thêm', link: '/chi-tiet-tin-tuc/thu-ngo/' },
  },
  {
    bg: '/media/t1xnwdpz/cdc.png',
    title: 'CDC ĐÀ NẴNG - CỘNG ĐỒNG PHÒNG CHỐNG DỊCH',
    subtitle: 'Hãy Like và Follow Fanpage "CDC Đà Nẵng - Cộng Đồng Phòng Chống Dịch" để cùng nhau chung tay phòng chống dịch bệnh!',
    btn: { text: 'Xem thêm', link: 'https://www.facebook.com/CDCDaNangCongdongPhongChongDich' },
  },
];

const Banner: React.FC = () => {
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
