
import { useState } from "react";
import { Calendar } from "lucide-react";

interface FeaturedNewsProps {
  currentLang: string;
}

const FeaturedNews = ({ currentLang }: FeaturedNewsProps) => {
  const [activeTab, setActiveTab] = useState("investment");
  
  const tabs = [
    { 
      id: "investment", 
      label: currentLang === "vi" ? "Đầu tư - Hợp tác Quốc tế" : "Investment - Int'l Cooperation" 
    },
    { 
      id: "training", 
      label: currentLang === "vi" ? "Đào tạo" : "Training" 
    },
    { 
      id: "digital", 
      label: currentLang === "vi" ? "Chuyển đổi số" : "Digital Transformation" 
    },
    { 
      id: "activities", 
      label: currentLang === "vi" ? "Hoạt động Ban Quản lý" : "DSEZA Activities" 
    },
    { 
      id: "other", 
      label: currentLang === "vi" ? "Tin khác" : "Other News" 
    }
  ];

  // Sample news data - in a real application this would come from an API
  const newsData = {
    investment: [
      {
        id: 1,
        title: currentLang === "vi" 
          ? "Đà Nẵng thu hút thêm 150 triệu USD vốn FDI trong quý II/2023" 
          : "Da Nang attracts additional $150 million FDI in Q2/2023",
        date: "2023-06-30",
        image: "/placeholder.svg",
        excerpt: currentLang === "vi"
          ? "Ban Quản lý Khu công nghệ cao và các Khu công nghiệp Đà Nẵng vừa công bố..."
          : "The Da Nang Hi-Tech Park and Industrial Zones Authority has just announced..."
      },
      {
        id: 2,
        title: currentLang === "vi" 
          ? "Tọa đàm xúc tiến đầu tư với doanh nghiệp Hàn Quốc" 
          : "Investment promotion workshop with Korean businesses",
        date: "2023-06-15",
        image: "/placeholder.svg",
        excerpt: currentLang === "vi"
          ? "Sáng ngày 15/6, Ban Quản lý Khu công nghệ cao và các Khu công nghiệp Đà Nẵng đã tổ chức..."
          : "On the morning of June 15, the Da Nang Hi-Tech Park and Industrial Zones Authority organized..."
      },
      {
        id: 3,
        title: currentLang === "vi" 
          ? "Khởi công dự án nhà máy sản xuất linh kiện điện tử" 
          : "Groundbreaking ceremony for electronic components factory",
        date: "2023-05-20",
        image: "/placeholder.svg",
        excerpt: currentLang === "vi"
          ? "Dự án có tổng vốn đầu tư 50 triệu USD từ Tập đoàn NEOTX (Nhật Bản)..."
          : "The project has a total investment of $50 million from NEOTX Group (Japan)..."
      }
    ],
    training: [
      {
        id: 1,
        title: currentLang === "vi" 
          ? "Chương trình đào tạo kỹ năng số cho người lao động trong KCN" 
          : "Digital skills training program for industrial zone workers",
        date: "2023-07-10",
        image: "/placeholder.svg",
        excerpt: currentLang === "vi"
          ? "Nhằm nâng cao năng lực số cho người lao động tại các khu công nghiệp..."
          : "To improve digital capabilities for workers in industrial zones..."
      }
    ],
    digital: [
      {
        id: 1,
        title: currentLang === "vi" 
          ? "Ra mắt nền tảng quản lý thông tin doanh nghiệp KCN thông minh" 
          : "Launch of smart IZ business information management platform",
        date: "2023-07-20",
        image: "/placeholder.svg",
        excerpt: currentLang === "vi"
          ? "Hệ thống quản lý thông tin doanh nghiệp thông minh vừa được triển khai..."
          : "The smart business information management system has just been implemented..."
      }
    ],
    activities: [
      {
        id: 1,
        title: currentLang === "vi" 
          ? "Ban Quản lý tổ chức tập huấn về quy định mới trong lĩnh vực đầu tư" 
          : "The Authority organizes training on new investment regulations",
        date: "2023-07-15",
        image: "/placeholder.svg",
        excerpt: currentLang === "vi"
          ? "Sự kiện thu hút sự tham gia của hơn 100 doanh nghiệp đến từ các KCN và KCNC..."
          : "The event attracted participation from more than 100 businesses from IZs and Hi-Tech Park..."
      }
    ],
    other: [
      {
        id: 1,
        title: currentLang === "vi" 
          ? "Khánh thành trung tâm tiêm chủng vắc-xin tại KCN Hòa Khánh" 
          : "Inauguration of vaccination center at Hoa Khanh Industrial Zone",
        date: "2023-07-05",
        image: "/placeholder.svg",
        excerpt: currentLang === "vi"
          ? "Trung tâm có khả năng phục vụ hơn 1000 người lao động mỗi ngày..."
          : "The center can serve more than 1000 workers daily..."
      }
    ]
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat(currentLang === "vi" ? "vi-VN" : "en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const renderFeaturedNews = () => {
    const currentNews = newsData[activeTab as keyof typeof newsData];
    
    if (!currentNews || currentNews.length === 0) {
      return (
        <div className="text-center py-8">
          {currentLang === "vi" ? "Không có tin tức nào." : "No news available."}
        </div>
      );
    }

    const mainNews = currentNews[0];
    const secondaryNews = currentNews.slice(1);

    return (
      <div className="mt-6">
        {/* Main news item */}
        {mainNews && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img 
                  src={mainNews.image} 
                  alt={mainNews.title} 
                  className="w-full h-64 md:h-full object-cover" 
                />
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center text-primary text-sm mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>{formatDate(mainNews.date)}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{mainNews.title}</h3>
                <p className="text-gray-600 mb-4">{mainNews.excerpt}</p>
                <a 
                  href={`/news/${mainNews.id}`} 
                  className="text-primary font-medium hover:underline"
                >
                  {currentLang === "vi" ? "Xem chi tiết »" : "Read more »"}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Secondary news items */}
        {secondaryNews.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {secondaryNews.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex">
                  <div className="w-1/3">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-4 w-2/3">
                    <div className="flex items-center text-primary text-xs mb-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{formatDate(news.date)}</span>
                    </div>
                    <h4 className="text-base font-bold mb-2 line-clamp-2">{news.title}</h4>
                    <a 
                      href={`/news/${news.id}`} 
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      {currentLang === "vi" ? "Xem chi tiết »" : "Read more »"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-10">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="card-header flex items-center justify-between">
            <h2 className="text-xl font-bold">
              {currentLang === "vi" ? "Tin Tức Nổi Bật" : "Featured News"}
            </h2>
            <a href="/news" className="text-sm hover:underline">
              {currentLang === "vi" ? "Xem tất cả »" : "View all »"}
            </a>
          </div>
          
          <div className="p-4">
            {/* Tabs */}
            <div className="flex flex-wrap border-b">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors
                    ${activeTab === tab.id 
                      ? "border-b-2 border-primary text-primary" 
                      : "text-gray-500 hover:text-primary"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab content */}
            {renderFeaturedNews()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
