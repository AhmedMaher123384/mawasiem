import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Phone, Clock, Shield, Award, ThumbsUp } from 'lucide-react';
import ContactFooter from '../components/ContactFooter';
import ImageSlider from '../components/ImageSlider';

// استيراد صور الخدمات
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';

// استيراد صور الهيرو
import b1 from '../assets/b2.png';
import b2 from '../assets/b1.png';
import b3 from '../assets/b3.png';
import b4 from '../assets/b4.png';

const services = [
  {
    id: 1,
    title: 'نظافة الفلل والقصور',
    image: img1,
    description: 'خدمة نظافة شاملة للفلل والقصور بأعلى معايير الجودة والاحترافية',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 2,
    title: 'جلي وتلميع الرخام بالآلماس',
    image: img2,
    description: 'تقنية متطورة لجلي وتلميع الرخام تعيد الألق والبريق لأرضيات منزلك',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 3,
    title: 'نظافة وتطهير المجالس والكنب بالبخار',
    image: img3,
    description: 'تنظيف عميق وتطهير للمجالس والكنب بتقنية البخار الاحترافية',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 4,
    title: 'نظافة المكيفات المركزية وفتحات التهوية',
    image: img4,
    description: 'صيانة وتنظيف شامل للمكيفات المركزية وأنظمة التهوية لضمان جودة الهواء',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 5,
    title: 'نظافة وتعقيم الخزانات',
    image: img5,
    description: 'تعقيم وتطهير خزانات المياه بمواد آمنة وفعالة مع شهادة ضمان',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 6,
    title: 'غسيل وتنظيف الموكيت والسجاد بالبخار',
    image: img6,
    description: 'تنظيف عميق للسجاد والموكيت باستخدام أحدث تقنيات البخار',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 7,
    title: 'نظافة الواجهات الزجاجية',
    image: img7,
    description: 'تنظيف احترافي للواجهات الزجاجية بتقنيات متطورة تضمن النظافة واللمعان',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 8,
    title: 'نظافة وتلميع النجف والثريات',
    image: img8,
    description: 'خدمة متخصصة لتنظيف وتلميع النجف والثريات الفاخرة مع ضمان السلامة',
    icon: <Star className="w-5 h-5" />
  },
];

const heroImages = [b1, b2, b3, b4];

const features = [
  {
    icon: <Star className="text-green-600 w-8 h-8" />,
    title: 'خدمة عالية الجودة',
    description: 'نقدم أعلى معايير الجودة العالمية في جميع خدماتنا بدون أي تنازل'
  },
  {
    icon: <Clock className="text-green-600 w-8 h-8" />,
    title: 'سرعة في التنفيذ',
    description: 'نلتزم بالمواعيد المحددة ونقدم خدماتنا بسرعة وكفاءة عالية'
  },
  {
    icon: <Phone className="text-green-600 w-8 h-8" />,
    title: 'دعم على مدار الساعة',
    description: 'فريق خدمة العملاء جاهز للرد على استفساراتكم في أي وقت طوال اليوم'
  }
];

const whyChooseUs = [
  {
    icon: <Award className="w-12 h-12 mb-4 text-white" />,
    title: 'فريق محترف',
    description: 'يضم فريقنا نخبة من المتخصصين ذوي الخبرة والكفاءة العالية في مجالات التنظيف والصيانة المختلفة'
  },
  {
    icon: <Shield className="w-12 h-12 mb-4 text-white" />,
    title: 'معدات متطورة',
    description: 'نستثمر في أحدث المعدات والتقنيات العالمية في عمليات التنظيف والصيانة لضمان نتائج مبهرة'
  },
  {
    icon: <ThumbsUp className="w-12 h-12 mb-4 text-white" />,
    title: 'أسعار تنافسية',
    description: 'نقدم أسعاراً تنافسية مدروسة مع ضمان أعلى مستويات الجودة والاحترافية في تقديم الخدمة'
  }
];

function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isWhyChooseUsVisible, setIsWhyChooseUsVisible] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroLoaded(true);
    }, 300);

    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const featuresObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFeaturesVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const whyChooseUsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWhyChooseUsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (servicesRef.current) {
      servicesObserver.observe(servicesRef.current);
    }
    if (featuresRef.current) {
      featuresObserver.observe(featuresRef.current);
    }
    if (whyChooseUsRef.current) {
      whyChooseUsObserver.observe(whyChooseUsRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (servicesRef.current) servicesObserver.unobserve(servicesRef.current);
      if (featuresRef.current) featuresObserver.unobserve(featuresRef.current);
      if (whyChooseUsRef.current) whyChooseUsObserver.unobserve(whyChooseUsRef.current);
    };
  }, []);
  
  return (
    <div className="rtl bg-gray-50">
      {/* قسم الـ Hero مع ارتفاع متجاوب للموبايل */}
      <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden">
        <ImageSlider images={heroImages} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/20 flex flex-col items-center justify-center text-white px-4">
          <h1 
            className={`text-6xl font-bold mb-6 text-center transition-all duration-1000 ${
              heroLoaded ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
            }`}
          >
            مواسم الخدمات
          </h1>
          <p 
            className={`text-2xl max-w-2xl text-center mb-8 transition-all duration-1000 delay-300 ${
              heroLoaded ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
            }`}
          >
            نقدم خدمات نظافة احترافية للفلل والقصور في الرياض بأعلى معايير الجودة
          </p>
          <div 
            className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${
              heroLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* تم تعديل زر "استعرض خدماتنا" لتكبير الخط وتغيير اللون لمظهر أكثر احترافية */}
            <a 
              href="#services" 
              onClick={scrollToServices} 
              className="bg-gradient-to-r from-green-600 to-green-800 text-white py-4 px-10 rounded-lg font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">استعرض خدماتنا</span>
              <span className="absolute inset-0 bg-green-700/50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </a>
          </div>
        </div>
      </div>

      {/* قسم المميزات */}
      <div className="bg-white py-16" ref={featuresRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 
              className={`text-4xl font-bold mb-4 text-gray-800 transition-all duration-700 ${
                isFeaturesVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
              }`}
            >
              مميزاتنا
              <span className={`block h-1 w-24 bg-green-600 mx-auto mt-4 transition-all duration-700 delay-300 ${
                isFeaturesVisible ? 'opacity-100 transform-none scale-100' : 'opacity-0 scale-0'
              }`}></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-white border border-gray-100 ${
                  isFeaturesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 transform transition-transform duration-500 hover:rotate-12">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* قسم خدماتنا */}
      <div id="services" ref={servicesRef} className="container mx-auto px-6 py-24">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isServicesVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-6xl font-bold mb-4 text-gray-800 inline-block relative">
            خدماتنا
            <span className={`block h-1 w-24 bg-green-600 mx-auto mt-4 transition-all duration-700 delay-300 ${
              isServicesVisible ? 'w-24' : 'w-0'
            }`}></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            نقدم مجموعة متكاملة من خدمات التنظيف والصيانة عالية الجودة للمنازل والمباني في الرياض
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
           // تعديل كود العرض في الخدمات داخل ملف Home.tsx
// تحديداً في الجزء الخاص بعرض الخدمات (services map)

<Link
  key={service.id}
  to={`/service/${service.id}`}
  className={`bg-white rounded-xl shadow-lg overflow-hidden group relative flex flex-col h-full transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-green-200 ${
    isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
  }`}
  style={{ transitionDelay: `${index * 100}ms` }}
>
  {/* شريط تدرج علوي */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-green-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></div>
  
  {/* حاوية الصورة مع تأثيرات hover */}
  <div className="h-56 overflow-hidden relative">
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
      loading="lazy"
    />
    {/* تأثير تدرج الشفافية عند hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-emerald-700/30 to-teal-900/50 transition-all duration-500 ease-out"></div>
  </div>
  
  {/* محتوى الخدمة */}
  <div className="p-6 flex-grow text-right">
    {/* عنوان الخدمة مع تأثير underline */}
    <div className="relative inline-block mb-3">
      <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors duration-500">
        {service.title}
      </h3>
      <div className="absolute bottom-0 right-0 w-0 group-hover:w-full h-0.5 bg-emerald-500 transition-all duration-700 ease-out"></div>
    </div>
    
    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
  </div>
  
  {/* زر استكشف الخدمة بخلفية خضراء موحدة */}
  <div className="mt-auto">
    <div className="bg-green-600 hover:bg-green-700 transition-all duration-500 relative overflow-hidden">
      <div className="py-4 px-6 flex items-center justify-between relative z-10">
        {/* أيقونة السهم */}
        <div className="relative flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-green-600 shadow-md flex items-center justify-center transform group-hover:translate-x-2 transition-all duration-500 relative overflow-hidden z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white transform transition-all duration-300 group-hover:rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        
        {/* نص الزر */}
        <span className="font-medium text-white transition-all duration-300 text-base tracking-wide px-3 py-1 rounded-md">
          استكشف الخدمة
        </span>
      </div>
    </div>
  </div>
</Link>

          ))}
        </div>
      </div>
      
      {/* قسم لماذا تختارنا */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white py-24 relative overflow-hidden" ref={whyChooseUsRef}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 w-96 h-96 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-white/10 translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 transition-all duration-700 ${
            isWhyChooseUsVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold mb-4">لماذا تختارنا؟</h2>
            <div className={`h-1 w-20 bg-white mx-auto mb-6 transition-all duration-700 delay-300 ${
              isWhyChooseUsVisible ? 'w-20' : 'w-0'
            }`}></div>
            <p className="text-xl max-w-2xl mx-auto">
              نسعى دائماً لتقديم أفضل خدمات التنظيف والصيانة بأعلى المعايير العالمية وبأسعار تنافسية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className={`group bg-white/10 backdrop-blur-sm p-8 rounded-xl transition-all duration-500 hover:bg-white/20 flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-xl ${
                  isWhyChooseUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-2">{item.title}</h3>
                <p className="transform group-hover:translate-y-1 transition-transform duration-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <ContactFooter />
    </div>
  );
}

export default Home;
