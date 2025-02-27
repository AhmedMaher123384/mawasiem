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
import img8 from '../assets/n.png';

// استيراد صور الهيرو بشكل مباشر
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

// استخدام الصور المستوردة في مصفوفة الهيرو
const heroImages = [b1, b2, b3, b4];

// بيانات المميزات
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

// بيانات لماذا تختارنا
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
  // إضافة مرجع للقسم الخدمات
  const servicesRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // وظيفة للتمرير إلى قسم الخدمات
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // إضافة فحص للتأكد من أن servicesRef.current ليس null
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // تأثير لتنشيط التأثيرات البصرية عند التمرير
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);
  
  return (
    <div className="rtl bg-gray-50">
      {/* قسم الـ Hero محسن مع السلايدر */}
      <div className="w-full h-[600px] relative overflow-hidden">
        <ImageSlider images={heroImages} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-6xl font-bold mb-6 text-center animate-fade-in">مواسم للخدمات</h1>
          <p className="text-2xl max-w-2xl text-center mb-8 animate-fade-in-up">
            نقدم خدمات تنظيف وصيانة احترافية للفلل والقصور في الرياض بأعلى معايير الجودة
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              تواصل معنا
            </Link>
            <a 
              href="#services" 
              onClick={scrollToServices} 
              className="bg-white text-green-600 py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              استعرض خدماتنا
            </a>
          </div>
        </div>
      </div>

      {/* قسم المميزات */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-100">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* قسم "خدماتنا" محسن مع إضافة المرجع وتأثيرات الظهور */}
      <div id="services" ref={servicesRef} className="container mx-auto px-6 py-24">
        <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl font-bold mb-4 text-gray-800 inline-block relative">
            خدماتنا
            <span className="block h-1 w-24 bg-green-600 mx-auto mt-4"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            نقدم مجموعة متكاملة من خدمات التنظيف والصيانة عالية الجودة للمنازل والمباني في الرياض
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <span className="bg-green-600 text-white py-1.5 px-4 rounded-full text-sm font-medium">استعرض التفاصيل</span>
                  </div>
                </div>
              </div>
              <div className="p-6 text-right">
                <div className="flex justify-between items-center mb-3">
                  <ArrowLeft className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-2" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* قسم "لماذا تختارنا" */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">لماذا تختارنا؟</h2>
            <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
            <p className="text-xl max-w-2xl mx-auto">
              نسعى دائماً لتقديم أفضل خدمات التنظيف والصيانة بأعلى المعايير العالمية وبأسعار تنافسية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 hover:bg-white/20 flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p>{item.description}</p>
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