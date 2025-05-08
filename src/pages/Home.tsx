import React, { useEffect, useState } from 'react';
import FeaturedNews from '../components/FeaturedNews';
import Footer from '../components/Footer';
import IndustrialZones from '../components/IndustrialZones';
import { initializeApp, performSearch, performSearchOnMobi, switchLanguage, updateClock } from '../js/scripts.js';

function Home() {
  const [news, setNews] = useState([]);
  const [zones, setZones] = useState([]);

  useEffect(() => {
    // Initialize app functionalities
    initializeApp();
    
    // Set up clock interval
    const clockInterval = setInterval(updateClock, 1000);
    updateClock();
    
    // Fetch data from backend APIs
    fetchNews();
    fetchIndustrialZones();
    
    // Clean up interval on component unmount
    return () => clearInterval(clockInterval);
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news');
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const fetchIndustrialZones = async () => {
    try {
      const response = await fetch('/api/industrial-zones');
      const data = await response.json();
      setZones(data);
    } catch (error) {
      console.error('Error fetching industrial zones:', error);
    }
  };

  return (
    <div>
      <header>
        <div className="container-fluid main-container">
          <div className="row">
            <div className="col-xl-8 col-lg-7 col-md-7 col-sm-12 header-bar">
              <i className="fa fa-calendar-alt icon-day me-2"></i>
              <span className="custom-font">Thứ Tư - 07/05/2025</span>
              <i className="fa-regular fa-clock icon-time me-2" id="iconTimeHeader"></i>
              <span className="custom-font" id="clock">03:35:24</span>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-5 col-sm-12 header-bar">
              <div className="row" style={{ width: 'auto' }}>
                <div className="col-lg-4 col-md-4 col-4 d-flex align-items-center justify-content-center">
                  <a href="/so-do-site" className="custom-font main-site-map-link">Sơ đồ site</a>
                </div>
                <div className="col-lg-1 col-md-1 col-1 d-flex align-items-center justify-content-center">
                  <span className="separator">|</span>
                </div>
                <div className="col-lg-4 col-md-4 col-4 d-flex align-items-center justify-content-center">
                  <div className="language-dropdown d-flex align-items-center">
                    <span id="selectedFlag" className="flag-icon">
                      <img id="curFlagLang" src="images/vnflag.png" alt="Vietnamese Flag" />
                    </span>
                    <select id="language-select" onChange={(e) => switchLanguage(e.target.value, e.target.options[e.target.selectedIndex].getAttribute('data-lang'))} className="language-select">
                      <option value="/en/" data-lang="en-us" data-flag="images/usflag.png">Tiếng Anh</option>
                      <option value="/" selected data-lang="vi" data-flag="images/vnflag.png">Tiếng Việt</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-1 d-flex align-items-center justify-content-center">
                  <span className="separator">|</span>
                </div>
                <div className="col-lg-2 col-md-2 col-2 d-flex align-items-center justify-content-center">
                  <a href="/umbraco/login" className="icon-button" style={{ backgroundColor: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}>
                    <div className="icon-circle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa fa-user" style={{ color: 'white' }}></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid main-container-logo" style={{ margin: '8px 0' }}>
          <div className="row align-items-center">
            <div className="col-lg-10 col-md-10 col-10 d-flex align-items-center gap-2">
              <a href="/" role="link">
                <img src="images/dzesa_logo_home_noback.png" alt="Logo" className="logo" />
              </a>
              <span className="custom-tittle">BAN QUẢN LÝ KHU CÔNG NGHỆ CAO VÀ CÁC KHU CÔNG NGHIỆP ĐÀ NẴNG</span>
            </div>
            <div className="col-lg-2 col-md-2 col-2 d-flex align-items-center gap-3 justify-content-end">
              <div className="input-group input-group-header-search">
                <input hidden id="ket-qua-tim-kiem-link" value="/ket-qua-tim-kiem/" />
                <input id="ip-search" type="text" className="form-control form-control-search" placeholder="Tìm kiếm" />
                <span className="input-group-icon-search" onClick={() => performSearch()} style={{ cursor: 'pointer' }}>
                  <i className="fa fa-search"></i>
                </span>
              </div>
              <span className="mobile-search-icon" onClick={() => performSearch()} style={{ cursor: 'pointer', zIndex: 10000, position: 'relative' }}>
                <i className="fa fa-search dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></i>
                <ul className="dropdown-menu" style={{ padding: 5, backgroundColor: 'transparent', border: 'none' }}>
                  <li className="input-group input-group-header-search-mobi">
                    <input id="ip-search-mobi" type="text" className="form-control form-control-search" placeholder="Tìm kiếm" />
                    <span className="input-group-icon-search input-group-text" onClick={() => performSearchOnMobi()} style={{ cursor: 'pointer' }}>
                      <i className="fa fa-search"></i>
                    </span>
                  </li>
                </ul>
              </span>
              <div className="dropdown custom-dropdown"></div>
              <button className="btn menu-btn dropdown-toggle no-caret" type="button" id="menuDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-bars"></i>
              </button>
              {/* Add more navigation elements as needed */}
            </div>
          </div>
        </div>
      </header>
      {/* Main content sections */}
      <main>
        <FeaturedNews news={news} />
        <IndustrialZones zones={zones} />
        {/* Add other sections as needed */}
      </main>
      <Footer />
    </div>
  );
}

export default Home; 