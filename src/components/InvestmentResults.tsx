
import React from 'react';

interface InvestmentResultsProps {
  currentLang: string;
}

const InvestmentResults: React.FC<InvestmentResultsProps> = ({ currentLang }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-bold mb-4">
        {currentLang === "vi" ? "Tình hình thu hút đầu tư" : "Investment Attraction"}
      </h3>
      <p className="text-sm mb-6">
        {currentLang === "vi" 
          ? "Khu công nghệ cao, Khu CNTT tập trung, các khu công nghiệp" 
          : "Hi-Tech Park, IT Park, and Industrial Zones"}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FDI */}
        <div>
          <h4 className="font-bold mb-3 flex items-center">
            {currentLang === "vi" ? "(1) Thu Hút Đầu Tư Trực Tiếp Nước Ngoài (FDI)" : "(1) Foreign Direct Investment (FDI)"}
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
              <span>
                {currentLang === "vi"
                  ? "3 tháng đầu năm 2025, đã thu hút 02 dự án FDI, tổng vốn đầu tư 18,5 triệu USD"
                  : "First 3 months of 2025, attracted 02 FDI projects, total investment of 18.5 million USD"}
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
              <span>
                {currentLang === "vi"
                  ? "Lũy kế đến hết tháng 3/2025 thu hút 128 dự án FDI, với tổng vốn đầu tư đăng ký 2.169,1 triệu USD."
                  : "Accumulated to the end of March 2025, attracted 128 FDI projects, with total registered investment of 2,169.1 million USD."}
              </span>
            </li>
          </ul>
        </div>
        
        {/* DDI */}
        <div>
          <h4 className="font-bold mb-3 flex items-center">
            {currentLang === "vi" ? "(2) Thu Hút Đầu Tư Trong Nước (DDI)" : "(2) Domestic Direct Investment (DDI)"}
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
              <span>
                {currentLang === "vi"
                  ? "3 tháng đầu năm 2025, đã thu hút 02 dự án, tổng vốn đầu tư 6.293,7 tỷ đồng"
                  : "First 3 months of 2025, attracted 02 projects, total investment of 6,293.7 billion VND"}
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
              <span>
                {currentLang === "vi"
                  ? "Lũy kế đến hết tháng 3/2025, thu hút 399 dự án trong nước với tổng vốn đầu tư đăng ký 42.040,7 tỷ đồng."
                  : "Accumulated to the end of March 2025, attracted 399 domestic projects with total registered investment of 42,040.7 billion VND."}
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-bold mb-4 text-center">
          {currentLang === "vi" ? "Biểu Đồ Thống Kê" : "Statistical Charts"}
        </h4>
        <div className="flex justify-center">
          <div className="bg-gray-100 w-full h-48 rounded flex items-center justify-center">
            <span className="text-gray-500">
              {currentLang === "vi" ? "Dữ liệu biểu đồ" : "Chart data"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentResults;
