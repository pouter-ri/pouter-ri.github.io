import { motion } from "framer-motion";
import {
  Calendar,
  TrendingUp,
  Users,
  Zap,
  AlertCircle,
  Leaf,
  Clock,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ShipperApp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/coming-soon");
  };

  const benefits = [
    {
      icon: <Calendar />,
      title: t("shipper.benefits.intelligentBooking"),
      desc: t("shipper.benefits.intelligentBookingDesc"),
      gradient: "from-primary-500 to-primary-700",
    },
    {
      icon: <TrendingUp />,
      title: t("shipper.benefits.costOptimization"),
      desc: t("shipper.benefits.costOptimizationDesc"),
      gradient: "from-secondary-500 to-secondary-700",
    },
    {
      icon: <Users />,
      title: t("shipper.benefits.vettedNetwork"),
      desc: t("shipper.benefits.vettedNetworkDesc"),
      gradient: "from-primary-400 to-primary-600",
    },
    {
      icon: <Zap />,
      title: t("shipper.benefits.instantVisibility"),
      desc: t("shipper.benefits.instantVisibilityDesc"),
      gradient: "from-secondary-400 to-secondary-600",
    },
    {
      icon: <Leaf />,
      title: t("shipper.benefits.ecoFriendlyShipping"),
      desc: t("shipper.benefits.ecoFriendlyShippingDesc"),
      gradient: "from-emerald-500 to-emerald-700",
    },
    {
      icon: <Shield />,
      title: t("shipper.benefits.riskManagement"),
      desc: t("shipper.benefits.riskManagementDesc"),
      gradient: "from-primary-500 to-secondary-500",
    },
  ];

  const stats = [
    { value: "500+", label: t("shipper.stats.earlyAccess") },
    { value: "45%", label: t("shipper.stats.costReduction") },
    { value: "99.9%", label: t("shipper.stats.uptime") },
    { value: "24/7", label: t("shipper.stats.support") },
  ];

  return (
    <section
      id="shipper"
      className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-primary-100/20 blur-3xl"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse",
            }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-200 rounded-full mb-6"
          >
            <AlertCircle className="w-5 h-5 text-primary-600 mr-2" />
            <span className="font-semibold text-primary-700">
              {t("shipper.comingSoon")}
            </span>
            <Clock className="w-5 h-5 text-primary-600 ml-3 mr-2" />
            <span className="text-sm text-gray-600">
              {t("shipper.launchDate")}
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Weload{" "}
            <span className="text-primary-600">{t("shipper.title")}</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            {t("shipper.description")}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -12,
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-primary-200 relative overflow-hidden cursor-pointer"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 transition-all duration-500" />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <div className="text-white transform group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>

                {/* Animated underline */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transform group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beta Program Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl"
          />

          <div className="relative z-10 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              {t("shipper.betaProgram")}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl mb-10 max-w-2xl mx-auto text-white/90"
            >
              {t("shipper.betaDescription")}
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                {t("shipper.joinBeta")}
              </motion.button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>{t("comingSoon.betaBenefits.specialPricingDesc")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>{t("cta.benefits.onboardingSpecialist")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>{t("comingSoon.betaBenefits.priorityAccessDesc")}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ShipperApp;
