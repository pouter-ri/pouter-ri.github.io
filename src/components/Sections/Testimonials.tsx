import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // You could also move these to translations if they need to be multilingual
  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: t("testimonials.mock.roles.ceo"),
      content: t("testimonials.mock.michael.content"),
      rating: 5,
      company: "TransGlobal",
      avatarColor: "bg-blue-500",
    },
    {
      name: "Sarah Chen",
      role: t("testimonials.mock.roles.logisticsDirector"),
      content: t("testimonials.mock.sarah.content"),
      rating: 5,
      company: "TechCorp",
      avatarColor: "bg-purple-500",
    },
    {
      name: "David Wilson",
      role: t("testimonials.mock.roles.fleetManager"),
      content: t("testimonials.mock.david.content"),
      rating: 5,
      company: "Prime Haulers",
      avatarColor: "bg-green-500",
    },
    {
      name: "Jessica Miller",
      role: t("testimonials.mock.roles.vpOperations"),
      content: t("testimonials.mock.jessica.content"),
      rating: 5,
      company: "MegaShippers",
      avatarColor: "bg-orange-500",
    },
    {
      name: "Robert Kim",
      role: t("testimonials.mock.roles.cto"),
      content: t("testimonials.mock.robert.content"),
      rating: 5,
      company: "FastTrack",
      avatarColor: "bg-red-500",
    },
    {
      name: "Amanda White",
      role: t("testimonials.mock.roles.directorSupplyChain"),
      content: t("testimonials.mock.amanda.content"),
      rating: 5,
      company: "Global Chain",
      avatarColor: "bg-indigo-500",
    },
  ];

  const trustedCompanies = [
    "FedEx",
    "UPS",
    "DHL",
    t("testimonials.mock.companies.amazon"),
    t("testimonials.mock.companies.walmart"),
    "Maersk",
  ];

  const stats = [
    { value: "4.9/5", label: t("testimonials.stats.rating") },
    { value: "98%", label: t("testimonials.stats.retention") },
    { value: "24/7", label: t("testimonials.stats.support") },
    { value: "10K+", label: t("testimonials.stats.users") },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-4">
            <Quote className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">
              {t("testimonials.trustedBy")}
            </span>
          </div>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="cursor-pointer grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${index === currentIndex ? "ring-2 ring-primary-500" : ""}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="text-yellow-400 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="text-sm text-gray-500">
                  {t("testimonials.verifiedCustomer")}
                </div>
                <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-white border border-gray-200 rounded-full hover:border-primary-300 transition-colors"
            aria-label={t("common.previous")}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-primary-600 w-8" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 bg-white border border-gray-200 rounded-full hover:border-primary-300 transition-colors"
            aria-label={t("common.next")}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trusted Companies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-10">
            {t("testimonials.trustedCompanies")}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {trustedCompanies.map((company) => (
              <div
                key={company}
                className="text-lg md:text-2xl font-bold text-gray-400"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
