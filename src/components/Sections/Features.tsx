import { motion } from "framer-motion";
import {
  Cpu,
  Lock,
  BarChart3,
  Cloud,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Users,
  Clock,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t("features.aiOptimization"),
      description: t("features.aiOptimizationDesc"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: t("features.enterpriseSecurity"),
      description: t("features.enterpriseSecurityDesc"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t("features.realTimeAnalytics"),
      description: t("features.realTimeAnalyticsDesc"),
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: t("features.cloudNative"),
      description: t("features.cloudNativeDesc"),
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t("features.mobileFirst"),
      description: t("features.mobileFirstDesc"),
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t("features.globalReach"),
      description: t("features.globalReachDesc"),
      gradient: "from-teal-500 to-green-500",
    },
  ];

  const platformFeatures = [
    {
      icon: <Zap />,
      title: t("features.fast"),
      value: "0.2s",
      desc: t("features.fastDesc"),
    },
    {
      icon: <Shield />,
      title: t("features.secure"),
      value: "99.99%",
      desc: t("features.secureDesc"),
    },
    {
      icon: <Users />,
      title: t("features.scalable"),
      value: "10M+",
      desc: t("features.scalableDesc"),
    },
    {
      icon: <Clock />,
      title: t("features.efficient"),
      value: "40%",
      desc: t("features.efficientDesc"),
    },
  ];

  const integrations = [
    t("features.integrations.erp"),
    t("features.integrations.payment"),
    t("features.integrations.mapping"),
    t("features.integrations.telematics"),
    t("features.integrations.crm"),
    t("features.integrations.accounting"),
  ];

  return (
    <section
      id="features"
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
            {t("features.title")}{" "}
            <span className="text-primary-600">
              {t("features.highlightedWord")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("features.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 text-white`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div className="h-1 w-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Platform Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              {t("features.platformPerformance")}
            </h3>
            <p className="text-xl opacity-90">
              {t("features.platformPerformanceDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl">{feature.icon}</div>
                </div>
                <div className="text-4xl font-bold mb-2">{feature.value}</div>
                <div className="text-xl font-semibold mb-2">
                  {feature.title}
                </div>
                <div className="text-white/80">{feature.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900">
            {t("features.integration")}
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            {t("features.integrationsDesc")}
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:border-primary-300 transition-colors"
              >
                {integration}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
