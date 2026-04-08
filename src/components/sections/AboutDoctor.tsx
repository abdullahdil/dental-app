import { Award, GraduationCap } from "lucide-react";

export default function AboutDoctor() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
          
          <div>
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Expert Care</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Dr. Khurrum Tahir</h3>
            <p className="text-lg font-medium text-slate-800 mb-4">Dental Surgeon - Orthodontist & Implantologist</p>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              American Dental Clinic is committed to provide our patients with comprehensive, quality and compassionate dental care treatments. Our office is specially designed to make you feel special and comfortable during treatment.
            </p>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              From our digital radiography to our advanced procedures, we utilize an effective combination of cutting-edge technology and time-proven methods to keep your smile healthy and beautiful.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Comprehensive Care</h4>
                  <p className="text-slate-600">Highly trained specialist in Orthodontics and Implantology</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Recognized Excellence</h4>
                  <p className="text-slate-600">Committed to cutting-edge tech and best quality treatments</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full max-w-md mx-auto aspect-[4/5] bg-slate-200 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/dr_khurrum.png" 
                alt="Dr. Khurrum Tahir" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
