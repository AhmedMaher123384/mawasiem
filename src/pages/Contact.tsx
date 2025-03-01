import React from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-16 bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-600">
        <h1 className="text-5xl font-bold text-center mb-6 text-gray-800">
          وسائل التواصل
        </h1>
        
        {/* Business Hours Section */}
        <div className="flex flex-col items-center mb-8 p-6 bg-gray-50 rounded-xl">
          <div className="flex items-center mb-4">
            <Clock className="text-green-600 w-8 h-8 mr-2" />
            <p className="text-green-600 text-2xl font-bold mr-2">
              ساعات الدوام الرسمي
            </p>
          </div>
          <p className="text-center text-3xl font-bold text-gray-800 mb-2">
            15:00 - 7:00
          </p>
          <p className="text-center text-gray-600 text-lg">
            من السابعة صباحاً حتى الثالثة مساءً
          </p>
        </div>
      </div>

      {/* Contact Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
        {/* Location Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="flex justify-center">
            <div className="bg-green-50 p-4 rounded-full mb-6">
              <MapPin className="text-green-600 w-12 h-12" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            الموقع الحالي
          </h3>
          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/24%C2%B045'04.5%22N+46%C2%B043'12.1%22E/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-green-600 text-lg font-medium hover:text-green-700 group"
            >
              <span>طريق الملك عبدالله، الرياض</span>
              <ExternalLink className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="flex justify-center">
            <div className="bg-green-50 p-4 rounded-full mb-6">
              <Mail className="text-green-600 w-12 h-12" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            البريد الإلكتروني
          </h3>
          <div className="space-y-2 flex flex-col items-center">
            <a href="mailto:info@mawasims.com.sa" className="text-gray-700 text-lg hover:text-green-600 transition-colors duration-200">
              info@mawasims.com.sa
            </a>
            <a href="mailto:MBadran@mawasims.com.sa" className="text-gray-700 text-lg hover:text-green-600 transition-colors duration-200">
            MBadran@mawasims.com.sa
            </a>
            <a href="mailto:ZHesham@mawasims.com.sa" className="text-gray-700 text-lg hover:text-green-600 transition-colors duration-200">
            ZHesham@mawasims.com.sa
            </a>
          </div>
        </div>
      </div>

      {/* Phone Numbers Section */}
      <div className="max-w-4xl mx-auto mb-16 bg-white rounded-2xl shadow-lg p-8 border-b-4 border-green-600">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700">
          اتصل بنا الآن
        </h2>
        
        <div className="space-y-8">
          {/* Phone 1 */}
          <div className="flex flex-row-reverse items-center p-4 rounded-xl hover:bg-green-50 transition-colors duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
              <Phone className="text-white w-8 h-8" />
            </div>
            <div className="text-right flex-1 mx-4">
              <a href="tel:0502532888" className="text-green-600 text-2xl font-medium hover:text-green-700 transition-colors">
              خدمة العملاء: 0563995580  
              </a>
            </div>
          </div>

          {/* Phone 2 */}
          <div className="flex flex-row-reverse items-center p-4 rounded-xl hover:bg-green-50 transition-colors duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
              <Phone className="text-white w-8 h-8" />
            </div>
            <div className="text-right flex-1 mx-4">
              <a href="tel:0550820777" className="text-green-600 text-2xl font-medium hover:text-green-700 transition-colors">
              مدير الفرع: 0502532888
              </a>
            </div>
          </div>

          {/* Phone 3 */}
          <div className="flex flex-row-reverse items-center p-4 rounded-xl hover:bg-green-50 transition-colors duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
              <Phone className="text-white w-8 h-8" />
            </div>
            <div className="text-right flex-1 mx-4">
              <a href="tel:0550428333" className="text-green-600 text-2xl font-medium hover:text-green-700 transition-colors">
              مدير إدارة المشاريع: 0505242177
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Final CTA Section */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-10 text-center">
        <h3 className="text-3xl font-bold text-white mb-6">
          نحن في انتظار تواصلكم
        </h3>
        <p className="text-white text-xl mb-2">
          نرحب باتصالاتكم واستفساراتكم على مدار ساعات الدوام الرسمي
        </p>
        <p className="text-white text-xl">
          نحن هنا لخدمتكم وتلبية احتياجاتكم
        </p>
      </div>
    </div>
  );
}

export default Contact;
