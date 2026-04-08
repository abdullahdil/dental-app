"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">American<span className="text-blue-600">Dental</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="#about" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">About Us</Link>
            <Link href="#testimonials" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Testimonials</Link>
            <Link href="#contact" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">Contact</Link>
            <a href="#appointment" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-500/30 flex items-center gap-2">
              <Phone size={16} />
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-slate-200/50 flex flex-col p-4 shadow-lg backdrop-blur-xl bg-white/90">
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 text-slate-700 font-medium border-b border-slate-100">Services</Link>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 text-slate-700 font-medium border-b border-slate-100">About Us</Link>
          <Link href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 text-slate-700 font-medium border-b border-slate-100">Testimonials</Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="py-3 px-4 text-slate-700 font-medium">Contact</Link>
          <a href="#appointment" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 bg-blue-600 text-white py-3 rounded-xl font-medium text-center flex items-center justify-center gap-2">
            <Phone size={18} />
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
}
