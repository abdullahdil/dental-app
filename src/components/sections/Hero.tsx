import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-blue-50/50"></div>
      
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
              <Star size={14} className="fill-blue-700" />
              <span>Premium Dental Care in the City</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              Welcome to <br/>
              <span className="text-blue-600">American Dental Clinic</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed font-medium">
              Now you can have a smile you can be proud of!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#appointment" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 group">
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all text-center group flex justify-center items-center">
                View Services
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm border-l border-slate-200 pl-4 py-1">
                <span className="font-bold text-slate-900 block">5,000+</span> 
                <span className="text-slate-500">Happy Patients</span>
              </p>
            </div>
          </div>

          <div className="relative relative lg:h-[600px] flex items-center justify-center">
            {/* Main image placeholder for dentist / clinic */}
            <div className="w-full max-w-md bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="/images/clinic_hero.png" 
                alt="Professional Dentist" 
                className="w-full object-cover scale-105"
              />
              {/* Trust Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0">
                  <Star className="fill-white" size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Top Rated Clinic</p>
                  <p className="text-sm text-slate-600">Certified Specialists</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
