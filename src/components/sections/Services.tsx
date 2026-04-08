import { Smile, Shield, Sparkles, Activity, Stethoscope, Heart } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    { 
      title: "Cosmetic Dentistry", 
      desc: "Transform your smile with veneers, bonding, and total smile makeovers for ultimate confidence.",
      icon: <Sparkles className="text-blue-600" size={28} />
    },
    { 
      title: "Dental Implants", 
      desc: "Permanent, natural-looking replacements for missing teeth that look and feel like your own.",
      icon: <Shield className="text-blue-600" size={28} />
    },
    { 
      title: "Orthodontics & Braces", 
      desc: "Straighten your teeth with modern braces and clear aligners without disrupting your lifestyle.",
      icon: <Smile className="text-blue-600" size={28} />
    },
    { 
      title: "Root Canal Therapy", 
      desc: "Pain-free treatments to save infected teeth, using advanced endodontic technology.",
      icon: <Activity className="text-blue-600" size={28} />
    },
    { 
      title: "Teeth Whitening", 
      desc: "Professional whitening treatments that safely brighten your smile up to 8 shades in one visit.",
      icon: <Heart className="text-blue-600" size={28} />
    },
    { 
      title: "Pediatric Dentistry", 
      desc: "Gentle, reassuring care tailored specifically for children to build healthy habits early.",
      icon: <Stethoscope className="text-blue-600" size={28} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Treatments</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Premium Dental Services</h3>
          <p className="text-lg text-slate-600">
            We offer comprehensive care using the latest technology, ensuring a comfortable experience and exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <Link href="/services" className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
