import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Phone, Clock } from 'lucide-react';
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
    description: 'نظافة دقيقة للفل والقصور في الرياض',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 2,
    title: 'جلي وتلميع الرخام بالآلماس',
    image: img2,
    description: 'جلي وتلميع أرضيات الرخام في الرياض',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 3,
    title: 'نظافة وتطهير المجالس والكنب بالبخار',
    image: img3,
    description: 'تنظيف مجالس بالبخار في الرياض',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 4,
    title: 'نظافة المكيفات المركزية وفتحات التهوية',
    image: img4,
    description: 'تنظيف التكييف المركزي وفتحات التهوية في الرياض',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 5,
    title: 'نظافة وتعقيم الخزانات',
    image: img5,
    description: 'تنظيف وتعقيم خزانات المياه',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 6,
    title: 'غسيل وتنظيف الموكيت والسجاد بالبخار',
    image: img6,
    description: 'تنظيف السجاد والموكيت في الرياض',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 7,
    title: 'نظافة الواجهات الزجاجية',
    image: img7,
    description: 'تنظيف الواجهات الزجاجية للمباني',
    icon: <Star className="w-5 h-5" />
  },
  {
    id: 8,
    title: 'نظافة وتلميع النجف والثريات',
    image: img8,
    description: 'تنظيف النجف الفاخر في الرياض',
    icon: <Star className="w-5 h-5" />
  },
];

// استخدام الصور المستوردة في مصفوفة الهيرو
const heroImages = [b1, b2, b3, b4];

function Home() {
  // إضافة مرجع للقسم الخدمات
  const servicesRef = useRef<HTMLDivElement>(null);

  // وظيفة للتمرير إلى قسم الخدمات
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // إضافة فحص للتأكد من أن servicesRef.current ليس null
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="rtl bg-gray-50">
      {/* قسم الـ Hero محسن مع السلايدر */}
      <div className="w-full h-[600px] relative overflow-hidden">
        <ImageSlider images={heroImages} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-6xl font-bold mb-6 text-center">مواسم للخدمات</h1>
          <p className="text-2xl max-w-2xl text-center mb-8">
            نقدم خدمات تنظيف وصيانة احترافية للفلل والقصور في الرياض
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              تواصل معنا
            </Link>
            {/* تغيير وظيفة زر "استعرض خدماتنا" للتمرير بدلاً من الانتقال */}
            <a 
  href="#services" 
  onClick={scrollToServices} 
  className="bg-white text-green-600 py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2"
>
  استعرض خدماتنا
</a>
          </div>
        </div>
      </div>

      {/* قسم المميزات */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <Star className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">خدمة عالية الجودة</h3>
              <p className="text-gray-600">نقدم أعلى معايير الجودة في جميع خدماتنا</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">سرعة في التنفيذ</h3>
              <p className="text-gray-600">نلتزم بالمواعيد ونقدم خدماتنا بسرعة وكفاءة</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">دعم على مدار الساعة</h3>
              <p className="text-gray-600">فريقنا جاهز للرد على استفساراتكم في أي وقت</p>
            </div>
          </div>
        </div>
      </div>


      {/* قسم "خدماتنا" محسن مع إضافة المرجع */}
      <div id="services" ref={servicesRef} className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-800 inline-block relative">
            خدماتنا
            <span className="block h-1 w-24 bg-green-600 mx-auto mt-4"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة متنوعة من خدمات التنظيف والصيانة عالية الجودة للمنازل والمباني في الرياض
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <span className="bg-green-600 text-white py-1 px-3 rounded-full text-sm">استعرض التفاصيل</span>
                  </div>
                </div>
              </div>
              <div className="p-6 text-right">
                <div className="flex justify-between items-center mb-3">
                  <ArrowLeft className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {/* تم إزالة قسم "استعرض جميع الخدمات" كما طلبت */}
      </div>
      
      {/* قسم "لماذا تختارنا" */}
      <div className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">لماذا تختارنا؟</h2>
            <p className="text-xl max-w-2xl mx-auto">
              نحن نوفر لكم أفضل خدمات التنظيف والصيانة بأعلى المعايير وبأسعار منافسة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">فريق محترف</h3>
              <p>لدينا فريق من المحترفين ذوي الخبرة والكفاءة العالية في مجال التنظيف والصيانة</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">معدات متطورة</h3>
              <p>نستخدم أحدث المعدات والتقنيات في عمليات التنظيف والصيانة لضمان أفضل النتائج</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">أسعار تنافسية</h3>
              <p>نقدم أسعاراً تنافسية مع الحفاظ على أعلى مستويات الجودة في الخدمة</p>
            </div>
          </div>
        </div>
      </div>
      
      <ContactFooter />
    </div>
  );
}

export default Home;