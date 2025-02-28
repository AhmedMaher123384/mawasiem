import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactFooter from '../components/ContactFooter';

// استيراد الصور الأساسية
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';

// استيراد صور التفاصيل الخاصة بكل خدمة
import img1_1 from '../assets/1.1.png';
import img1_2 from '../assets/1.2.png';
import img1_3 from '../assets/1.3.png';
import img1_4 from '../assets/1.4.png';
import img1_5 from '../assets/1.5.png';
import img1_6 from '../assets/1.6.png';
import img1_7 from '../assets/1.7.png';
import img1_8 from '../assets/1.8.png';
import img1_9 from '../assets/1.9.png';
import img1_10 from '../assets/1.10.png';
import img1_11 from '../assets/1.11.png';
import img1_12 from '../assets/1.12.png';
import img1_13 from '../assets/1.13.png';

import img2_1 from '../assets/2.1.png';
import img2_2 from '../assets/2.2.png';
import img2_3 from '../assets/2.3.png';
import img2_4 from '../assets/2.4.png';
import img2_5 from '../assets/2.5.png';

import img3_1 from '../assets/3.1.png';
import img3_2 from '../assets/3.2.png';
import img3_3 from '../assets/3.3.png';

import img4_1 from '../assets/4.1.png';

import img6_1 from '../assets/6.1.png';
import img6_2 from '../assets/6.2.png';

import img8_1 from '../assets/8.1.png';
import img8_2 from '../assets/8.2.png';

// بيانات الخدمات مع إضافة خاصية المميزات (advantages)
const services = [
  {
    id: 1,
    title: 'نظافة الفلل والقصور',
    image: img1,
    description: 'نظافة دقيقة للفل والقصور في الرياض',
    longDescription:
      'مواسم تقدم خدمات نظافة شاملة للفلل والقصور، تتضمن تنظيف الأرضيات، الجدران، النوافذ، الأسقف الجبسية، الخشب والباركيه، زجاج الشبابيك والواجهات الزجاجية، السجاد والستائر، التكييف المركزي وفتحات التهوية، والأثاث؛ مع التركيز على التفاصيل الدقيقة والأماكن صعبة الوصول إليها.',
    subTitles: [
      { title: 'نظافة دقيقة للفل والقصور في الرياض', image: img1_1 },
      { title: 'تنظيف التحف في الرياض', image: img1_2 },
      { title: 'تنظيف النجف الكريستال في الرياض', image: img1_3 },
      { title: 'تنظيف السجاد بالبخار في الرياض', image: img1_4 },
      { title: 'تنظيف الستائر بالبخار في الرياض', image: img1_5 },
      { title: 'تنظيف مجالس في الرياض', image: img1_6 },
      { title: 'تنظيف وتلميع زجاج في الرياض', image: img1_7 },
      { title: 'تنظيف فلل وقصور في الرياض', image: img1_8 },
      { title: 'تنظيف عميق للأماكن صعبة الوصول إليها', image: img1_9 },
      { title: 'تنظيف مطابخ في الرياض', image: img1_10 },
      { title: 'نظافة منازل في الرياض', image: img1_11 },
      { title: 'تنظيف واجهات المنازل في الرياض', image: img1_12 },
      { title: 'جلي وتلميع الرخام في الرياض', image: img1_13 },
    ],
    detailImages: [
      { url: img1_1, caption: 'نظافة الفلل والقصور' },
      { url: img1_2, caption: 'تنظيف التحف والمقتنيات الثمينة' },
      { url: img1_3, caption: 'تنظيف النجف الكريستال' },
      { url: img1_4, caption: 'تنظيف السجاد بالبخار' },
      { url: img1_5, caption: 'تنظيف الستائر بالبخار' },
      { url: img1_6, caption: 'تنظيف المجالس' },
      { url: img1_7, caption: 'تنظيف وتلميع الزجاج' },
      { url: img1_8, caption: 'تنظيف الفلل والقصور' },
      { url: img1_9, caption: 'تنظيف الأماكن صعبة الوصول' },
      { url: img1_10, caption: 'تنظيف المطابخ' },
      { url: img1_11, caption: 'نظافة المنازل' },
      { url: img1_12, caption: 'تنظيف واجهات المنازل' },
      { url: img1_13, caption: 'جلي وتلميع الرخام' },
    ],
    advantages: [
      'استخدام مواد تنظيف عالية الجودة وآمنة',
      'فريق عمل متخصص ومحترف بأحدث المعدات',
      'سرعة في الإنجاز مع الحفاظ على دقة العمل',
    ],
  },
  {
    id: 2,
    title: 'جلي وتلميع الرخام بالآلماس',
    image: img2,
    description: 'جلي وتلميع أرضيات الرخام في الرياض',
    longDescription:
      'نقدم خدمة جلي وتلميع الرخام باستخدام تقنية الألماس المتطورة لإزالة الخدوش والبقع واستعادة بريق الرخام الطبيعي. بالإضافة إلى ذلك، نتميز بمعالجة الكسور والفراغات باستخدام مادة الجولي الإيطالي عالية الجودة التي تُطابق ألوان الرخام بدقة، مما يضمن الحفاظ على التشطيبات الفاخرة وإبراز جمال الرخام بطريقة احترافية.',
    subTitles: [
      { title: 'جلي الرخام في الرياض', image: img2_1 },
      { title: 'تلميع الرخام في الرياض', image: img2_2 },
      { title: 'جلي وتلميع أرضيات الرخام في الرياض', image: img2_3 },
      { title: 'جلي وتلميع الدرج في الرياض', image: img2_4 },
      { title: 'تلميع رخام الدرج في الرياض', image: img2_5 },
    ],
    detailImages: [
      { url: img2_1, caption: 'جلي الرخام' },
      { url: img2_2, caption: 'تلميع الرخام' },
      { url: img2_3, caption: 'جلي أرضيات الرخام' },
      { url: img2_4, caption: 'تلميع الدرج' },
      { url: img2_5, caption: 'معالجة الكسور بالجولي الإيطالي' },
    ],
    advantages: [
      'استخدام أحدث التقنيات المتطورة',
      'استخدام أحدث المعدات المتخصصة في جلي وتلميع الرخام',
      'معالجة الرخام من الكسور والفراغات باستخدام أحدث الطرق',
      'عمالة محترفة ومتخصصة في عمليات جلي ومعالجة وتلميع الرخام',
    ],
  },
  {
    id: 3,
    title: 'نظافة وتطهير المجالس والكنب بالبخار',
    image: img3,
    description: 'تنظيف مجالس بالبخار في الرياض',
    longDescription:
      'تقدم مواسم خدمات تنظيف وتطهير الكنب والمجالس باستخدام أحدث تقنيات البخار لإزالة البقع العميقة والبكتيريا بفعالية عالية. حرصاً على الحفاظ على جودة الأقمشة الفاخرة، يتم تنفيذ الخدمة بواسطة فريق مختص ومدرب باحترافية عالية وباستخدام أدوات متخصصة تضمن أفضل النتائج.',
    subTitles: [
      { title: 'تنظيف مجالس بالبخار في الرياض', image: img3_1 },
      { title: 'تنظيف كنب بالبخار في الرياض', image: img3_2 },
      { title: 'تنظيف المجالس والكنب في الرياض', image: img3_3 },
    ],
    detailImages: [
      { url: img3_1, caption: 'تنظيف المجالس بالبخار' },
      { url: img3_2, caption: 'تنظيف الكنب بالبخار' },
      { url: img3_3, caption: 'إزالة البقع العميقة' },
    ],
    advantages: [
      'استخدام تقنيات البخار الحديثة للتنظيف العميق',
      'فريق عمل مدرب خصيصاً للحفاظ على جودة الأقمشة',
      'ضمان إزالة البكتيريا والبقع بفعالية',
    ],
  },
  {
    id: 4,
    title: 'نظافة المكيفات المركزية وفتحات التهوية',
    image: img4,
    description: 'تنظيف التكييف المركزي وفتحات التهوية في الرياض',
    longDescription:
      'توفر مواسم خدمات شاملة لتنظيف المكيفات المركزية وفتحات التهوية، لضمان أداء مثالي وجودة هواء نقية داخل الفلل والقصور. تشمل الخدمة إزالة الأتربة والبكتيريا من الفلاتر والمكونات الداخلية، وتنظيف وتعقيم فتحات التهوية باستخدام مواد آمنة ومعتمدة، مع الحفاظ على كفاءة نظام التبريد وحماية التشطيبات والأثاث المحيط أثناء عملية التنظيف.',
    subTitles: [{ title: 'تنظيف التكييف المركزي وفتحات التهوية في الرياض', image: img4_1 }],
    detailImages: [{ url: img4_1, caption: 'تنظيف المكيفات المركزية' }],
    advantages: [
      'إزالة الأتربة والبكتيريا بشكل شامل',
      'تنظيف الفلاتر والمكونات الداخلية بدقة',
      'استخدام مواد آمنة تحافظ على كفاءة التبريد',
    ],
  },
  {
    id: 5,
    title: 'نظافة وتعقيم الخزانات',
    image: img5,
    description: 'تنظيف وتعقيم خزانات المياه',
    longDescription:
      'مواسم تقدم خدمة تنظيف وتعقيم خزانات المياه الأرضية لضمان مياه نقية وصحية. تشمل الخدمة إزالة الرواسب والشوائب باستخدام معدات متطورة ومواد تعقيم آمنة ومعتمدة، كما يحرص فريقنا المتخصص على إزالة أي ملوثات أو بكتيريا قد تؤثر على جودة المياه، مع تنفيذ العملية وفقًا لأعلى معايير الجودة.',
    subTitles: [{ title: 'تنظيف وتعقيم خزانات المياه في الرياض', image: img5 }],
    detailImages: [],
    advantages: [
      'استخدام معدات متطورة ومواد تعقيم معتمدة',
      'ضمان مياه نقية وصحية بعد عملية التنظيف',
      'فريق عمل مختص لضمان جودة الخدمة',
    ],
  },
  {
    id: 6,
    title: 'غسيل وتنظيف الموكيت والسجاد بالبخار',
    image: img6,
    description: 'تنظيف السجاد والموكيت في الرياض',
    longDescription:
      'نقدم خدمة غسيل وتنظيف الموكيت والسجاد بالبخار باستخدام أحدث الأجهزة والتقنيات. يتم تنظيف وغسيل الموكيت والسجاد مع تعطييرهما وإزالة البقع بفعالية؛ إذ يصل البخار إلى أنسجة الأقمشة لتذويب وإزالة البقع المستعصية دون التأثير على جودة الأنسجة.',
    subTitles: [
      { title: 'تنظيف الستائر بالبخار في الرياض', image: img6_1 },
      { title: 'تنظيف السجاد والموكيت في الرياض', image: img6_2 },
    ],
    detailImages: [
      { url: img6_1, caption: 'تنظيف السجاد بالبخار' },
      { url: img6_2, caption: 'غسيل الموكيت' },
    ],
    advantages: [
      'أجهزة حديثة ومطورة لإزالة الأوساخ والبقع',
      'مواد تنظيف عالية الجودة لإزالة البقع',
      'نتائج فعالة دون التأثير على جودة الموكيت والسجاد',
      'تعطير وتعقيم السجاد باستخدام أفضل الأدوات',
    ],
  },
  {
    id: 7,
    title: 'نظافة الواجهات الزجاجية',
    image: img7,
    description: 'تنظيف الواجهات الزجاجية للمباني',
    longDescription:
      'تنظيف الواجهات الزجاجية للمباني والشركات لا يمكن أن يتم دون الاستعانة بمتخصصين؛ نظرًا لوجود العديد من المخاطر والحاجة لعمالة مدربة للعمل في الارتفاعات باستخدام رافعات مخصصة. لذا، نقدم خدمة تنظيف الواجهات الزجاجية بمنتهى الدقة والجودة.',
    subTitles: [{ title: 'تنظيف الواجهات الزجاجية في الرياض', image: img7 }],
    detailImages: [],
    advantages: [
      'استخدام معدات ذات جودة عالية',
      'عمالة مدربة ومحترفة',
      'أدوات ومواد تنظيف فعالة',
      'تنظيف الواجهات الزجاجية لتصبح أكثر لمعاناً',
    ],
  },
  {
    id: 8,
    title: 'نظافة وتلميع النجف والثريات',
    image: img8,
    description: 'تنظيف النجف الفاخر في الرياض',
    longDescription:
      'تقدم مواسم خدمات تنظيف وتلميع النجف والثريات بحرفية فائقة، معتمدة على فريق متخصص ذو خبرة عالية. نستخدم مواد آمنة وتقنيات متطورة لضمان إزالة الأتربة والبقع بدقة دون التسبب في أي ضرر، سواء كان النجف مصنوعًا من الكريستال أو المعادن الفاخرة، ليعود ببريقه الأصلي ويضفي لمسة من الفخامة على المكان.',
    subTitles: [
      { title: 'تنظيف النجف الفاخر في الرياض', image: img8_1 },
      { title: 'تنظيف التحف الثمينة في الرياض', image: img8_2 },
    ],
    detailImages: [
      { url: img8_1, caption: 'تنظيف النجف الكريستال' },
      { url: img8_2, caption: 'تلميع الثريات' },
    ],
    advantages: [
      'فريق عمل متخصص في تنظيف النجف والثريات',
      'استخدام مواد آمنة وتقنيات حديثة للحفاظ على بريق النجف',
      'ضمان إزالة الأتربة والبقع دون التأثير على المواد الثمينة',
    ],
  },
];
function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id || '0'));
  const [selectedImage, setSelectedImage] = React.useState(null);

  // استخدام useEffect للتمرير إلى أعلى الصفحة عند تحميلها
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">الخدمة غير موجودة</h1>
        <Link to="/" className="text-green-600 hover:underline">
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    );
  }

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 rtl">
      {/* Hero Header with Parallax Effect */}
      <div className="w-full h-96 bg-gradient-to-r from-green-800 to-green-600 relative overflow-hidden rounded-b-3xl shadow-xl">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{service.title}</h1>
      <div className="w-32 h-1 bg-white mx-auto rounded-full"></div>
      <p className="text-white text-xl mt-6 max-w-2xl mx-auto font-light">{service.description}</p>
    </div>
  </div>
</div>

      {/* Content Container */}
      <div className="container mx-auto px-4 lg:px-8 py-16 -mt-20">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-t-4 border-green-600">
          {/* Description Card */}
          <div className="mb-12 bg-green-50 p-6 rounded-2xl border-r-4 border-green-500 animate-fade-in">
            <h2 className="text-2xl font-bold text-green-700 mb-4 text-right">نبذة عن الخدمة</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-right">
              {service.longDescription}
            </p>
          </div>

          {/* Improved Sub Services Section with full-width images */}
          {service.subTitles && service.subTitles.length > 0 && (
            <div className="mb-14 animate-fade-in-up" style={{ animationDelay: '0.2s' }} dir="rtl">
              <div className="flex items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800">
                  <span className="border-b-3 border-green-500 pb-1">خدماتنا تشمل</span>
                </h3>
                <div className="flex-grow border-b border-gray-200 mr-4"></div>
              </div>
              
              <div className="space-y-8" dir="rtl">
                {service.subTitles.map((subService, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="overflow-hidden relative" onClick={() => openImageModal(subService.image)}>
                      <img
                        src={subService.image}
                        alt={subService.title}
                        className="w-full h-72 md:h-96 object-cover object-center transition-transform duration-500 hover:scale-105 cursor-pointer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-70 py-4 px-6">
                        <h4 className="text-xl font-bold text-white">{subService.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Improved Advantages Section */}
          {service.advantages && service.advantages.length > 0 && (
            <div className="mb-14 animate-fade-in-up" style={{ animationDelay: '0.4s' }} dir="rtl">
              <div className="flex items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800">
                  <span className="border-b-3 border-green-500 pb-1">مميزات الخدمة</span>
                </h3>
                <div className="flex-grow border-b border-gray-200 mr-4"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4 space-x-reverse bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-200">
                    <span className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-gray-700 font-medium text-lg">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Improved CTA Section */}
          <div className="mt-10 text-center">
            <div className="bg-gradient-to-r from-green-50 to-gray-50 p-8 rounded-2xl border border-green-100 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">هل تريد الاستفادة من خدماتنا؟</h3>
              <p className="text-gray-600 mb-6">تواصل معنا اليوم للحصول على أفضل خدمة</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 inline-block shadow-md hover:shadow-lg font-medium w-full sm:w-auto transform hover:-translate-y-1 hover:scale-105"
                >
                  تواصل معنا
                </Link>
                <Link 
                  to="/" 
                  className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-all duration-300 inline-block shadow-sm hover:shadow-md font-medium w-full sm:w-auto"
                >
                  العودة للرئيسية
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
              onClick={closeImageModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="صورة مكبرة" 
              className="w-full object-contain max-h-screen"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
      
      <ContactFooter />
    </div>
  );
}

export default ServiceDetail;