import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    "OSHA & ADA Standards",
    "100% Disposable Instruments",
    "Highly Specialized Surgeons",
    "Purpose Built Clinic in F-10/3"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-[3rem] transform -rotate-3 scale-105 z-0"></div>
            <img 
              src="/images/clinic_tech.png" 
              alt="Dental Tech" 
              className="relative z-10 rounded-[3rem] shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Dental Clinic in Islamabad</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Exceptional Dental Care</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              American Dental Clinic is an exceptional entity in the field of dental care. It provides state of art facility for dental examination, diagnosis and treatment. All activities are being conducted according to the international standards of OSHA and American Dental Association, Chicago. The patients are treated using DISPOSABLE INSTRUMENTS by highly specialized and experienced Dental Surgeon.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              American Dental Clinic is conveniently located in the heart of Islamabad, F-10/3. It is a purpose built clinic accessible to all. Here you will experience the personalized care and comfort provided by the clinic atmosphere and its staff.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={24} />
                  <span className="text-slate-800 font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
