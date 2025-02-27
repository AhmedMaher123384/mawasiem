import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

function ContactFooter() {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/place/24%C2%B045\'04.5%22N+46%C2%B043\'12.1%22E/@24.7512609,46.7200274,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.7512609!4d46.7200274?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D', '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 py-16 mt-12">
      <div className="container mx-auto px-4">
        {/* تعديل الصف ليكون أكثر تنظيماً وأفضل شكلاً */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Location Section */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div 
              className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-green-100 transition-colors"
              onClick={openGoogleMaps}
            >
              <MapPin className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-green-700">الموقع الحالي</h3>
            <p className="text-gray-700 cursor-pointer hover:text-green-600 transition-colors" onClick={openGoogleMaps}>
              طريق الملك سلمان، المملكة العربية السعودية
            </p>
          </div>
          
          {/* Email Section */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-green-700">البريد الإلكتروني</h3>
            <div className="text-gray-700">
              <a 
                href="mailto:info@mawasims.com.sa" 
                className="block mb-1 hover:text-green-600 transition-colors"
              >
                info@mawasims.com.sa
              </a>
              <a 
                href="mailto:HR@mawasims.com.sa" 
                className="block mb-1 hover:text-green-600 transition-colors"
              >
                HR@mawasims.com.sa
              </a>
              <a 
                href="mailto:MB@mawasims.com.sa" 
                className="block hover:text-green-600 transition-colors"
              >
                MB@mawasims.com.sa
              </a>
            </div>
          </div>
          
          {/* Phone Section */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-green-700">رقم الجوال</h3>
            <div className="text-gray-700">
              <a 
                href="tel:+966507017988" 
                className="block mb-1 hover:text-green-600 transition-colors"
              >
                مكتب المبيعات: 0507017988
              </a>
              <a 
                href="tel:+966505087077" 
                className="block mb-1 hover:text-green-600 transition-colors"
              >
                خدمة العملاء: 0505087077
              </a>
              <a 
                href="tel:+966554263333" 
                className="block mb-1 hover:text-green-600 transition-colors"
              >
                قسم خدمات الدعم: 0554263333
              </a>
              <a 
                href="tel:+966505711688" 
                className="block hover:text-green-600 transition-colors"
              >
                مدير مشاريع: 0505711688
              </a>
            </div>
          </div>
        </div>
        
        {/* Logo Section */}
        <div className="mt-16 flex justify-center">
          <img 
            src={logo}
            alt="Mawasim Logo" 
            className="h-32 transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} مواسم للخدمات. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </div>
  );
}

export default ContactFooter;