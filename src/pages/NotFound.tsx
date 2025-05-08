
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">404</h1>
          <h2 className="text-2xl font-semibold text-[#024b96] mb-4">Không tìm thấy trang</h2>
          <p className="text-gray-600 mb-8">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-[#024b96] text-white font-medium rounded-md shadow-sm hover:bg-[#023e7d] transition-colors"
          >
            <Home className="mr-2 h-5 w-5" />
            Trở về trang chủ
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
