
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface FeaturedNewsProps {
  news: any[];
}

const FeaturedNews: React.FC<FeaturedNewsProps> = ({ news }) => {
  // Default data if backend fetch fails or is empty
  const defaultNews = [
    {
      img: '/media/ndubrxey/1anhlamtt.jpg',
      date: '30-04-2025',
      icon: '/media/s2qmq3oh/iconnoibat.png',
      title: 'SỰ KIỆN TIÊU ĐIỂM',
      desc: 'Nội dung sự kiện tiêu điểm nổi bật tại Đà Nẵng...'
    },
    {
      img: '/media/yakng25x/bia-sach-chuyen-doi-so-859.jpg',
      date: '30-12-2023',
      icon: '/media/s2qmq3oh/iconnoibat.png',
      title: 'Chuyển đổi số Đà Nẵng',
      desc: 'Đà Nẵng đẩy mạnh chuyển đổi số trong các lĩnh vực...'
    },
    {
      img: '/media/xeif0kyz/thongbao.png',
      date: '30-04-2025',
      icon: '/media/s2qmq3oh/iconnoibat.png',
      title: 'Thông báo mới',
      desc: 'Thông báo quan trọng từ Ban Quản lý...'
    },
  ];

  // Use fetched news if available, otherwise default
  const displayNews = news.length > 0 ? news.map(item => ({
    img: item.imageUrl || defaultNews[0].img,
    date: new Date(item.publishedDate).toLocaleDateString('vi-VN') || defaultNews[0].date,
    icon: '/media/s2qmq3oh/iconnoibat.png',
    title: item.title,
    desc: item.content.substring(0, 100) + (item.content.length > 100 ? '...' : '')
  })) : defaultNews;

  if (displayNews.length === 0) return <div>No news available</div>;

  return (
    <div className="row mt-3">
      <div className="col-12">
        <div className="card card-noibat">
          <div className="card-header header-noibat">
            <strong>SỰ KIỆN TIÊU ĐIỂM</strong>
          </div>
          {/* Desktop view */}
          <div className="card-body body-noibat d-none d-md-block">
            <div className="card feature-card-noibat">
              <div className="card-body w-100">
                <div className="row">
                  {/* Column 1: Image */}
                  <div className="col-md-6">
                    <img src={displayNews[0].img} alt="Tin nổi bật" className="img-fluid main-img-noibat" />
                  </div>
                  {/* Column 2: Text */}
                  <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="row mb-2 align-items-center">
                      <div className="col-auto d-flex align-items-center">
                        <img src={displayNews[0].icon} alt="Icon" className="img-fluid main-icon-tintuc" />
                      </div>
                      <div className="col" style={{ padding: 0 }}>
                        <p className="mb-0 main-date-tintuc">{displayNews[0].date}</p>
                      </div>
                    </div>
                    <h4 className="main-title-noibat mb-2">{displayNews[0].title}</h4>
                    <p className="main-desc-noibat">{displayNews[0].desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile view: Swiper */}
          <div className="mt-2 p-2 swiper d-md-none card small-card-noibat-tin-tuc" id="swiperTin">
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation
              spaceBetween={10}
              slidesPerView={1}
              loop
              className="small-card-noibat-tin-tuc-swiper"
            >
              {displayNews.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div style={{ height: 240 }}>
                    <img src={item.img} alt="Tin nổi bật" className="small-image-noibat h-100" />
                  </div>
                  <div className="mt-2">
                    <div className="row mb-2 align-items-center">
                      <div className="col-auto d-flex align-items-center">
                        <img src={item.icon} alt="Icon" className="img-fluid main-icon-tintuc" />
                      </div>
                      <div className="col" style={{ padding: 0 }}>
                        <p className="mb-0 main-date-tintuc">{item.date}</p>
                      </div>
                    </div>
                    <h4 className="main-title-noibat mb-2">{item.title}</h4>
                    <p className="main-desc-noibat">{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
