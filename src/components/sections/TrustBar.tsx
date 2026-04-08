export default function TrustBar() {
  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Happy Patients", value: "5,000+" },
    { label: "Expert Doctors", value: "8" },
    { label: "Awards Won", value: "12" },
  ];

  return (
    <section className="py-12 bg-blue-600 relative z-20 shadow-xl border-y border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-blue-500/50 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center px-4">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-blue-100 font-medium text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
