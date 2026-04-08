import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sana Gauhar",
      location: "Birmingham, United Kingdom",
      text: "Just a note of thanks for the wonderful job on my new crown! ( sounds like I'm a queen ! ) I really appreciate it & will continue to refer you to anyone who asks for a good dentist!",
      rating: 5
    },
    {
      name: "Ali Khalid",
      location: "Faisalabad, Pakistan",
      text: "Had a lot of work done including root canal which I was dreading. Dr. Khurrum and his dental nurse have been amazing. I am now totally relaxed about coming to the dentist and also know they will do an amazing job. Thank you",
      rating: 5
    },
    {
      name: "Sher Afridi",
      location: "Peshawar, Pakistan",
      text: "I am very happy with my new crown! Thank you.",
      rating: 5
    },
    {
      name: "Aliza Kamal",
      location: "Muzaffarabad, Pakistan",
      text: "I’ve been a faithful customer of ADC for over 15 years and have nothing but high praise and sincere appreciation for the doctors and staff. My oral health has always been excellent and with their guidance, will continue to stay healthy. My thanks to Dr. Khurrum for their attentiveness, professionalism and genuine interest in their patients.",
      rating: 5
    },
    {
      name: "Wali Ullah",
      location: "Islamabad, Pakistan",
      text: "Thank you for giving me fantastic straight teeth. I cannot tell you how much my confidence has grown. I wish you all the best success.",
      rating: 5
    },
    {
      name: "Mian Sami",
      location: "Islamabad, Pakistan",
      text: "Thank you very much for looking after my teeth so well. The bridge is perfect and the colour of the tooth looks very good.",
      rating: 5
    },
    {
      name: "Shabaz Khan",
      location: "Lahore, Pakistan",
      text: "I want to share with you my experience in American Dental Clinic, I've arrived in to their office they treated me with respect and gentleness. They explained what would be the best treatment for me.",
      rating: 5
    },
    {
      name: "Mian Muhammad",
      location: "Lahore, Pakistan",
      text: "I've worked for dentists in Lahore for forty years. I came to Islamabad five years ago, and I found a dentist who is honest and compassionate. I feel fortunate to have met you, Dr. Khurrum!",
      rating: 5
    },
    {
      name: "Ms. Khan",
      location: "Lahore, Pakistan",
      text: "My wholehearted recommendation of you, Dr. Khurrum. You have obviously chosen the right profession. Keep up the good work!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-200 font-semibold tracking-wide uppercase text-sm mb-3">American Dental Clinic</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Testimonials</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl flex flex-col h-full">
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="fill-blue-500 text-blue-500" size={20} />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 text-center leading-relaxed flex-grow">"{review.text}"</p>
              <div className="text-center border-t border-slate-100 pt-6">
                <p className="font-bold text-slate-900">- {review.name}</p>
                <p className="text-sm text-slate-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
