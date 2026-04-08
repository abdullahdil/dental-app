import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Cosmetic Dentistry",
      desc: "If achieving a bright, beautiful smile is on your dental care priority list then ADC is definitely the right choice for you. ADC is also brimming with articles providing dentistry information on tooth whitening, dental implants, dental veneers and other cosmetic dentistry procedures.",
      img: "/images/beautiful_smile.png"
    },
    {
      title: "Crowns & Bridges (Prosthodontics)",
      desc: "Traditional methods to replace a missing tooth or teeth include the fabrication of a bridge. At least one tooth on either side of the space must be prepared for a crown. Then a false tooth is joined to the crowns, and cemented. The patient cannot remove the bridge, and special aids are available to keep it clean.",
      img: "/images/clinic_tech.png"
    },
    {
      title: "Dental Implants",
      desc: "Dental implants are considered the ultimate dental care solution for tooth replacement, especially when a single tooth needs to be replaced. Highly trained staff has successfully made many patients lives more comfortable through the gift of implant.",
      img: "/images/clinic_hero.png"
    },
    {
      title: "Extractions & Oral Surgery",
      desc: "Foreign qualified staff along with state of art technology available provides the single best combination of a trustworthy team. All surgical procedures including jaw fractures, facial lacerations, skin grafts, tumor surgeries, biopsies and other accidental surgeries involving head and neck are regularly treated.",
      img: "/images/clinic_tech.png"
    },
    {
      title: "Orthodontics (Braces)",
      desc: "Dental surgeon deals with all sorts of problems concerning with improving your smile through fixed and removable appliances such braces, retainers, orthodontic ligatures. We offer different payment plans to suit your needs. The follow up of every patient guarantees our motto of best quality.",
      img: "/images/beautiful_smile.png"
    },
    {
      title: "Pediatric Dentistry",
      desc: "ADC is also specialized in the care of our special little children. We provide all services to children through 'painless dentistry' without needles and other potentially alarming procedures. We provide all services from replanting the teeth to filling to crowning. Special care is also provided for children with disabilities.",
      img: "/images/clinic_hero.png"
    },
    {
      title: "State of Art Sterilization",
      desc: "We provide all instruments sterilized to the OSHA standards for your safety and ours. Since ADC caters a lot of national and international organizations, so it has been inspected and visited by the authorities of such organizations like UN, PINSTECH and many embassies etc.",
      img: "/images/clinic_tech.png"
    },
    {
      title: "Simple and Complex Extractions",
      desc: "ADC provides swift services for all sorts of extraction procedures. Our diligent staff works with most up to date technology available not only has to make experience pleasant but also provided follow up care to every single patient.",
      img: "/images/clinic_tech.png"
    },
    {
      title: "Tooth Whitening",
      desc: "White teeth not only look sensational, they build the kind of inner confidence that really gives a smile its electricity. New gels and solutions are accelerated by light; laser technology is new and a very effective dental care solution. Tooth whitening systems can whiten teeth fast at ADC.",
      img: "/images/beautiful_smile.png"
    },
    {
      title: "Wisdom Teeth",
      desc: "Wisdom teeth generally erupt during late adolescence and early adulthood. When the jaw is not large enough to accommodate these teeth, they can cause dental care problems, such as infection, requiring wisdom tooth removal.",
      img: "/images/clinic_hero.png"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-16 bg-blue-600 text-white relative">
        <div className="absolute inset-0 bg-blue-700/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Dental Specialties</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive, high-quality, and compassionate dental care treatments using state-of-the-art technology.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-1">
                    {service.desc}
                  </p>
                  <div className="mt-8">
                    <Link href="/#appointment" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group/link">
                      Book this treatment
                      <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
