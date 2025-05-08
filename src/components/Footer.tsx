import React from 'react';
import '/public/css/sites/styles.css';

const Footer: React.FC = () => (
  <>
    <div className="container-fluid footer-container mt-3">
      <div className="row h-100 custom-mt-footer-mobile">
        <div className="col-md-8 mt-2">
          <p className="custom-font lien-he-title mb-2">LIÊN HỆ</p>
          <div className="row">
            <div className="col-1 col-md-auto">
              <img src="/media/tcap1ce2/address.svg" alt="diaChiIcon" className="lien-he-icon" />
            </div>
            <div className="col-11 col-md-11">
              <p className="custom-font lien-he-label">Lô A17, đường Trung tâm, Khu công nghệ cao, xã Hòa Liên, huyện Hòa Vang, Đà Nẵng</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1 col-md-auto">
              <img src="/media/0ibbsoss/phone.svg" alt="dienThoaiIcon" className="lien-he-icon" />
            </div>
            <div className="col-11 col-md-11">
              <p className="custom-font lien-he-label">0236 3666117</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1 col-md-auto">
              <img src="/media/0ibbsoss/phone.svg" alt="dienThoaiIcon" className="lien-he-icon" />
            </div>
            <div className="col-11 col-md-11">
              <p className="custom-font lien-he-label">Điện thoại bộ phận Tiếp nhận hồ sơ và Trả kết quả cho công dân, tổ chức: 0236.3666100</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1 col-md-auto">
              <img src="/media/e3igajfb/mail.svg" alt="emailIcon" className="lien-he-icon" />
            </div>
            <div className="col-11 col-md-11">
              <p className="custom-font lien-he-label">dseza@danang.gov.vn</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-md-end justify-content-center mt-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3833.4418592568395!2d108.0822033!3d16.0944277!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421f89a43bfb03%3A0x40f66e6ba7346b99!2zQmFuIHF14bqjbiBsw70gS2h1IGPDtG5nIG5naOG7hyBjYW8gdsOgIGPDoWMgS2h1IGPDtG5nIG5naGnhu4dwIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1736085791335!5m2!1svi!2s"
            className="ban-do-footer"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <div className="hr-footer"></div>
      <div className="row align-items-center">
        <div className="col-12 col-md-2 d-flex align-items-center justify-content-md-start justify-content-center">
          <img src="/media/3vknguhu/tinnhiemmang.png" alt="giayPhep" className="img-giayphep" />
        </div>
        <div className="col-12 col-md-10 d-flex align-items-center justify-content-md-start justify-content-center">
          <span className="custom-font-giayPhepText mb-2">
            <p><strong>Giấy phép:</strong> Số 05/GP-STTTT do Sở Thông tin và Truyền thông Đà Nẵng cấp ngày 02/01/2020<br /><strong>Trưởng Ban biên tập:</strong> Trần Văn Tỵ, Phó Trưởng ban&nbsp;Ban Quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng<br />Ghi rõ nguồn "Trang thông tin điện tử Khu công nghệ cao và các khu công nghiệp Đà Nẵng" hoặc "www.dseza.danang.gov.vn" khi trích dẫn lại thông tin từ Website này.</p>
          </span>
        </div>
      </div>
    </div>
    <div className="hr2-footer"></div>
    <div className="container-fluid footer-container">
      <div className="row align-items-center pt-1">
        <div className="col-md-8">
          <span className="custom-font lien-he-label">©© Bản quyền của Ban Quản lý Khu công nghệ cao và các Khu công nghiệp Đà Nẵng</span>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-md-end justify-content-start mb-2">
          <img src="/media/vqxfntwc/chart.svg" alt="colChartIcon" className="col-chart-icon" />
          <span className="custom-font lien-he-label">Số lượt truy cập: 13608</span>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
