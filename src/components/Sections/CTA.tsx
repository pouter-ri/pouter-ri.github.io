import { ArrowRight, Calendar, Phone, Mail, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [isInView, setIsInView] = useState(false);
  const [formInView, setFormInView] = useState(false);
  const [benefitsInView, setBenefitsInView] = useState(Array(5).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    t("cta.benefits.freeTrial"),
    t("cta.benefits.noCreditCard"),
    t("cta.benefits.onboardingSpecialist"),
    t("cta.benefits.prioritySupport"),
    t("cta.benefits.integrationAssistance"),
  ];

  const stats = [
    { value: "24h", label: t("cta.stats.responseTime") },
    { value: "95%", label: t("cta.stats.satisfaction") },
    { value: "100+", label: t("cta.stats.expertsReady") },
  ];

  // Intersection Observer for main section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Intersection Observer for form
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFormInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  // Intersection Observer for benefits
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && benefitsRef.current) {
            const timeouts = benefits.map((_, index) => {
              return setTimeout(() => {
                setBenefitsInView((prev) => {
                  const newStates = [...prev];
                  newStates[index] = true;
                  return newStates;
                });
              }, index * 100);
            });
            return () => timeouts.forEach((t) => clearTimeout(t));
          }
        });
      },
      { threshold: 0.1 },
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => {
      if (benefitsRef.current) {
        observer.unobserve(benefitsRef.current);
      }
    };
  }, [benefits]);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            {t("cta.titlePart1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
              {t("cta.highlightedTitle")}
            </span>{" "}
            {t("cta.titlePart2")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("cta.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            ref={formRef}
            className={`bg-white rounded-3xl shadow-2xl p-8 lg:p-12 transition-all duration-700 ${
              formInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              {t("cta.scheduleDemo")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    {t("cta.contactForm.fullName")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 hover:border-primary-400"
                    placeholder={t("cta.contactForm.placeholderName")}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    {t("cta.contactForm.workEmail")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 hover:border-primary-400"
                    placeholder={t("cta.contactForm.placeholderEmail")}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    {t("cta.contactForm.yourCompany")}
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 hover:border-primary-400"
                    placeholder={t("cta.contactForm.placeholderCompany")}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    {t("cta.contactForm.yourRole")}
                  </label>
                  <select
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 hover:border-primary-400"
                  >
                    <option value="">
                      {t("cta.contactForm.placeholderRole")}
                    </option>
                    <option value="carrier">
                      {t("cta.contactForm.roles.carrier")}
                    </option>
                    <option value="shipper">
                      {t("cta.contactForm.roles.shipper")}
                    </option>
                    <option value="broker">
                      {t("cta.contactForm.roles.broker")}
                    </option>
                    <option value="executive">
                      {t("cta.contactForm.roles.executive")}
                    </option>
                    <option value="other">
                      {t("cta.contactForm.roles.other")}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  {t("cta.contactForm.howCanWeHelp")}
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 hover:border-primary-400 resize-none"
                  placeholder={t("cta.contactForm.placeholderMessage")}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
              >
                {t("cta.contactForm.requestDemo")}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </button>

              <p className="text-sm text-gray-500 text-center">
                {t("cta.contactForm.agreeTerms")}
              </p>
            </form>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Benefits */}
            <div
              ref={benefitsRef}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                {t("cta.whatYouGet")}
              </h4>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={benefit}
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      benefitsInView[index]
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Methods */}
            <div
              className={`bg-white rounded-3xl shadow-lg p-8 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                {t("cta.otherWays")}
              </h4>

              <div className="space-y-6">
                <a
                  href="mailto:sales@weload.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-all duration-300 group cursor-pointer hover:scale-105 active:scale-95"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300 group-hover:scale-110">
                    <Mail className="w-6 h-6 text-primary-600 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-grow">
                    <div className="font-medium text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                      {t("cta.contactMethods.emailUs")}
                    </div>
                    <div className="text-gray-600 group-hover:text-primary-600 transition-colors duration-300">
                      sales@weload.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+18005551234"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-all duration-300 group cursor-pointer hover:scale-105 active:scale-95"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300 group-hover:scale-110">
                    <Phone className="w-6 h-6 text-primary-600 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-grow">
                    <div className="font-medium text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                      {t("cta.contactMethods.callUs")}
                    </div>
                    <div className="text-gray-600 group-hover:text-primary-600 transition-colors duration-300">
                      +1 (800) 555-1234
                    </div>
                  </div>
                </a>

                <button className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-all duration-300 group cursor-pointer hover:scale-105 active:scale-95">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300 group-hover:scale-110">
                    <Calendar className="w-6 h-6 text-primary-600 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="text-left flex-grow">
                    <div className="font-medium text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                      {t("cta.contactMethods.scheduleCall")}
                    </div>
                    <div className="text-gray-600 group-hover:text-primary-600 transition-colors duration-300">
                      {t("cta.contactMethods.consultation")}
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-4 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-white rounded-2xl p-6 text-center shadow border transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
