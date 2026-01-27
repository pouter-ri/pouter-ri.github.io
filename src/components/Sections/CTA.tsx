import { motion } from "framer-motion";
import { ArrowRight, Calendar, Phone, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
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

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                  placeholder={t("cta.contactForm.placeholderMessage")}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-2xl transition-all"
              >
                {t("cta.contactForm.requestDemo")}
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                {t("cta.contactForm.agreeTerms")}
              </p>
            </form>
          </motion.div>

          {/* Contact Info & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Benefits */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                {t("cta.whatYouGet")}
              </h4>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Methods */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                {t("cta.otherWays")}
              </h4>

              <div className="space-y-6">
                <a
                  href="mailto:sales@weload.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {t("cta.contactMethods.emailUs")}
                    </div>
                    <div className="text-gray-600">sales@weload.com</div>
                  </div>
                </a>

                <a
                  href="tel:+18005551234"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {t("cta.contactMethods.callUs")}
                    </div>
                    <div className="text-gray-600">+1 (800) 555-1234</div>
                  </div>
                </a>

                <button className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors group">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <Calendar className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">
                      {t("cta.contactMethods.scheduleCall")}
                    </div>
                    <div className="text-gray-600">
                      {t("cta.contactMethods.consultation")}
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 text-center shadow border"
                >
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
