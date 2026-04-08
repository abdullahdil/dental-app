export default function Appointment() {
  return (
    <section id="appointment" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 shadow-lg border border-slate-100 flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Book Now</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Request An Appointment</h3>
            <p className="text-lg text-slate-600 mb-8">
              Take the first step towards your perfect smile. Fill out the form, and our team will get back to you to confirm your schedule.
            </p>
            <div className="flex items-center gap-4 text-slate-800">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="font-bold cursor-default">📞</span>
              </div>
              <div>
                <p className="text-sm text-slate-500">Book Directly</p>
                <p className="font-bold text-lg">+92 300 5119776</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full bg-white p-8 rounded-3xl shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 transition-all" placeholder="+92 300 5119776" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 transition-all" defaultValue="General Checkup">
                    <option>General Checkup</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Dental Implants</option>
                    <option>Orthodontics</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50 transition-all" />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-md mt-4">
                Confirm Appointment
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
