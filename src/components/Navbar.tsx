import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronLeft, Home, Users, Briefcase, PhoneCall } from 'lucide-react';
import logo from '../assets/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // التحقق من التمرير لتغيير مظهر القائمة عند التمرير لأسفل
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // تعريف عناصر القائمة مع أيقونات
  const navItems = [
    { path: '/', label: 'الرئيسية', icon: Home },
    { path: '/about', label: 'من نحن', icon: Users },
    { path: '/partners', label: 'شركاء النجاح', icon: Briefcase },
    { path: '/contact', label: 'وسائل التواصل', icon: PhoneCall },
  ];

  const isActive = (path: string) => location.pathname === path;

  // تعريف الرسوم المتحركة مع تحسينات جديدة
  const animationStyles = `
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    @keyframes shimmerSlow {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
    
    @keyframes spinSlow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    @keyframes pulse {
      0% { opacity: 0.6; }
      50% { opacity: 1; }
      100% { opacity: 0.6; }
    }
    
    @keyframes subtleGlow {
      0% { box-shadow: 0 0 3px rgba(255, 255, 255, 0.2), 0 0 5px rgba(255, 255, 255, 0); }
      50% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.3), 0 0 10px rgba(255, 255, 255, 0.2); }
      100% { box-shadow: 0 0 3px rgba(255, 255, 255, 0.2), 0 0 5px rgba(255, 255, 255, 0); }
    }
  `;

  return (
    <nav dir="rtl" className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gradient-to-l from-green-900 to-green-800 shadow-md' : 'bg-gradient-to-l from-green-800 to-green-700 shadow-sm'
    }`}>
      {/* إضافة الأنماط باستخدام عنصر style عادي */}
      <style>{animationStyles}</style>
      
      {/* زخرفة علوية بسيطة ومتناسقة */}
      <div className="relative h-1 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-green-600 via-green-400 to-green-600 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-teal-300 to-transparent opacity-40" style={{ animation: 'shimmer 3s infinite' }}></div>
        <div className="absolute inset-0" style={{ animation: 'subtleGlow 3s infinite' }}></div>
      </div>
      
      {/* القائمة الرئيسية */}
      <div className="flex items-center justify-between h-24 px-6 relative">
        {/* زر الهامبرغر (موضوع على اليمين) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-teal-200 focus:outline-none p-2 relative overflow-hidden rounded-full"
          aria-label="فتح القائمة"
        >
          <span className="absolute inset-0 bg-green-700 opacity-0 hover:opacity-100 rounded-full transition-opacity duration-300"></span>
          {isMenuOpen ? <X size={28} className="relative z-10" /> : <Menu size={28} className="relative z-10" />}
        </button>
        
        {/* عناصر زخرفية مبسطة */}
        <div className="absolute right-0 top-0 h-full w-16 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute h-32 w-32 rounded-full bg-gradient-to-br from-green-300 to-transparent blur-xl opacity-20 transform -translate-y-16 translate-x-8"></div>
        </div>
        
        <div className="absolute left-0 top-0 h-full w-16 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute h-32 w-32 rounded-full bg-gradient-to-bl from-green-300 to-transparent blur-xl opacity-20 transform -translate-y-16 -translate-x-8"></div>
        </div>
        
        {/* الشعار مع تأثيرات متناسقة */}
        <Link to="/" className="flex-shrink-0 transform -translate-y-1 relative group">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-full blur-xl transition-all duration-500 scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500 opacity-0 group-hover:opacity-5 rounded-full blur-xl transition-all duration-500 scale-125"></div>
          <img
  src={logo}
  alt="Mawasim Logo"
  className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
/>
          {/* تأثير خفيف خلف الشعار */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20" style={{ animation: 'spinSlow 15s linear infinite' }}>
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="absolute top-1/2 left-1/2 w-1 h-10 bg-gradient-to-t from-green-400 to-transparent"
                style={{ transform: `rotate(${i * 45}deg) translateY(-28px)`, transformOrigin: 'bottom center' }}
              ></div>
            ))}
          </div>
        </Link>
      </div>
      
      {/* زخرفة سفلية بسيطة ومتناسقة */}
      <div className="relative h-1 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-green-600 via-green-400 to-green-600 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-teal-300 to-transparent opacity-40" style={{ animation: 'shimmer 3s infinite' }}></div>
        <div className="absolute inset-0" style={{ animation: 'subtleGlow 3s infinite' }}></div>
      </div>

      {/* القائمة الجانبية المنبثقة - مناسبة للاتجاه RTL */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-gradient-to-bl from-green-900 via-green-800 to-green-700 shadow-xl transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 60 }}
      >
        {/* شريط زخرفي علوي متناسق */}
        <div className="relative h-1 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-green-600 via-green-400 to-green-600 opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-teal-300 to-transparent opacity-40" style={{ animation: 'shimmer 3s infinite' }}></div>
          <div className="absolute inset-0" style={{ animation: 'subtleGlow 3s infinite' }}></div>
        </div>
        
        {/* زر الإغلاق (موضوع في اليسار للاتجاه RTL) */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 left-4 text-white hover:text-teal-200 focus:outline-none p-2 rounded-full bg-green-800 bg-opacity-50 hover:bg-opacity-80 transition-all duration-300"
          aria-label="إغلاق القائمة"
        >
          <X size={20} />
        </button>
        
        {/* شعار أكبر داخل القائمة مع تأثيرات متناسقة */}
        <div className="flex items-center justify-between h-20 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-transparent opacity-5 blur-xl rounded-full"></div>
          <img
            src={logo}
            alt="Mawasim Logo"
            className="h-32 w-auto object-contain"
          />
        </div>
        
        {/* زخرفة فاصلة متناسقة */}
        <div className="flex items-center justify-center px-8 py-2">
          <div className="relative h-px bg-gradient-to-l from-transparent via-green-400 to-transparent w-full">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white to-transparent opacity-20" style={{ animation: 'shimmerSlow 4s infinite' }}></div>
          </div>
        </div>
        
        {/* عناصر القائمة المحسنة مع أيقونات وتأثيرات - تم تغيير اتجاه السهم إلى اليسار */}
        <div className="p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xl font-medium block transition-all duration-300 py-4 px-6 rounded-lg my-2 relative overflow-hidden group ${
                  isActive(item.path)
                    ? 'bg-green-700 text-white shadow-md'
                    : 'text-white hover:bg-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon size={18} className="ml-2 opacity-80" />
                    <span>{item.label}</span>
                  </div>
                  {isActive(item.path) && <ChevronLeft size={16} className="mr-2" />}
                </span>
                
                {/* تأثير التموج المحسن عند التحويم بألوان متناسقة */}
                <span className="absolute right-0 w-2 h-full bg-green-500 opacity-0 group-hover:opacity-50 transition-all duration-500 transform -skew-x-12 translate-x-20 group-hover:translate-x-0"></span>
                
                {/* تأثير توهج خلفي متناسق */}
                <span className="absolute inset-0 bg-gradient-to-l from-green-600 to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500"></span>
              </Link>
            );
          })}
        </div>
        
        {/* زخرفة إضافية داخل القائمة متناسقة */}
        <div className="absolute bottom-24 w-full px-8">
          <div className="relative h-px bg-gradient-to-l from-transparent via-green-400 to-transparent w-full">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white to-transparent opacity-20" style={{ animation: 'shimmerSlow 4s infinite' }}></div>
          </div>
        </div>
        
        {/* معلومات إضافية في أسفل القائمة */}
        <div className="absolute bottom-8 w-full px-8 text-center">
          <p className="text-green-200 text-sm opacity-70">مواسم للخدمات © 2025</p>
        </div>
        
        {/* زخرفة أسفل القائمة متناسقة */}
        <div className="absolute bottom-0 w-full">
          <div className="h-16 w-full bg-gradient-to-t from-green-900 to-transparent opacity-50"></div>
          <div className="relative h-1 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-green-600 via-green-400 to-green-600 opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-teal-300 to-transparent opacity-40" style={{ animation: 'shimmer 3s infinite' }}></div>
            <div className="absolute inset-0" style={{ animation: 'subtleGlow 3s infinite' }}></div>
          </div>
        </div>
        
        {/* زخارف هندسية بسيطة بالخلفية */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute top-20 right-10 w-40 h-40 border border-green-400 rounded-full"></div>
          <div className="absolute bottom-40 left-0 w-32 h-32 border border-green-400 rounded-full transform -translate-x-16"></div>
          <div className="absolute bottom-60 right-20 w-16 h-16 bg-green-500 rounded-lg opacity-5 transform rotate-45"></div>
        </div>
      </div>

      {/* خلفية شفافة للغلق بتأثير متناسق */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 40
          }}
        />
      )}
    </nav>
  );
}

export default Navbar;