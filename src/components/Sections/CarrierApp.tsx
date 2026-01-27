import { motion } from "framer-motion";
import {
  Truck,
  MapPin,
  Clock,
  Calendar,
  Route,
  Leaf,
  Zap,
  Smartphone,
  Globe,
  CheckCircle,
  DollarSign,
  Home,
  Coffee,
  Fuel,
  Settings,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const CarrierApp = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("manager");

  const platformApps = [
    {
      id: "web",
      title: t("carrier.webDashboard"),
      description: t("carrier.webDescription"),
      icon: <Globe className="w-8 h-8" />,
      features: [
        t("carrier.features.web.realTimeTracking"),
        t("carrier.features.web.backhaulOptimization"),
        t("carrier.features.web.customizableRoutes"),
        t("carrier.features.web.dynamicETA"),
        t("carrier.features.web.loadManagement"),
        t("carrier.features.web.carbonTracking"),
        t("carrier.features.web.laneSuggestions"),
        t("carrier.features.web.restStopRecommendations"),
      ],
      color: "from-primary-600 to-primary-800",
    },
    {
      id: "manager",
      title: t("carrier.managerApp"),
      description: t("carrier.managerDescription"),
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        t("carrier.features.manager.realTimeMonitoring"),
        t("carrier.features.manager.instantCommunication"),
        t("carrier.features.manager.quickDispatch"),
        t("carrier.features.manager.documentManagement"),
        t("carrier.features.manager.performanceAnalytics"),
        t("carrier.features.manager.emergencyAlerts"),
      ],
      color: "from-secondary-500 to-secondary-700",
    },
    {
      id: "driver",
      title: t("carrier.driverApp"),
      description: t("carrier.driverDescription"),
      icon: <Truck className="w-8 h-8" />,
      features: [
        t("carrier.features.driver.truckNavigation"),
        t("carrier.features.driver.loadAcceptance"),
        t("carrier.features.driver.digitalPaperwork"),
        t("carrier.features.driver.routeUpdates"),
        t("carrier.features.driver.loadViews"),
        t("carrier.features.driver.restStopFinder"),
        t("carrier.features.driver.fuelStationLocator"),
        t("carrier.features.driver.vehicleInspection"),
      ],
      color: "from-emerald-500 to-emerald-700",
    },
  ];

  const keyFeatures = [
    {
      icon: <Route className="w-8 h-8" />,
      title: t("carrier.keyFeatures.backhaulOptimization"),
      description: t("carrier.keyFeatures.backhaulDescription"),
      impact: t("carrier.keyFeatures.backhaulImpact"),
      color: "text-primary-600",
      bgColor: "bg-primary-50",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: t("carrier.keyFeatures.ecoFriendlyRouting"),
      description: t("carrier.keyFeatures.ecoFriendlyDescription"),
      impact: t("carrier.keyFeatures.ecoFriendlyImpact"),
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: t("carrier.keyFeatures.realTimeTracking"),
      description: t("carrier.keyFeatures.realTimeDescription"),
      impact: t("carrier.keyFeatures.realTimeImpact"),
      color: "text-secondary-600",
      bgColor: "bg-secondary-50",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: t("carrier.keyFeatures.smartCalendar"),
      description: t("carrier.keyFeatures.smartCalendarDescription"),
      impact: t("carrier.keyFeatures.smartCalendarImpact"),
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t("carrier.keyFeatures.customizableRoutes"),
      description: t("carrier.keyFeatures.customizableRoutesDescription"),
      impact: t("carrier.keyFeatures.customizableRoutesImpact"),
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t("carrier.keyFeatures.dynamicETA"),
      description: t("carrier.keyFeatures.dynamicETADescription"),
      impact: t("carrier.keyFeatures.dynamicETAImpact"),
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
  ];

  const stats = [
    {
      value: "60%",
      label: t("carrier.stats.emptyMilesReduction"),
      icon: <Route className="w-6 h-6" />,
    },
    {
      value: "30%",
      label: t("carrier.stats.revenueIncrease"),
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      value: "45%",
      label: t("carrier.stats.fuelSavings"),
      icon: <Fuel className="w-6 h-6" />,
    },
    {
      value: "99.8%",
      label: t("carrier.stats.onTimeDelivery"),
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      value: "25%",
      label: t("carrier.stats.carbonReduction"),
      icon: <Leaf className="w-6 h-6" />,
    },
    {
      value: "15h",
      label: t("carrier.stats.timeSaved"),
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="carrier"
      className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -right-48 -top-48 w-96 h-96 bg-gradient-to-br from-primary-100/30 to-secondary-100/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -left-48 -bottom-48 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-emerald-100/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full mb-6 border border-primary-100">
            <Truck className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">
              {t("carrier.subtitle")}
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Weload{" "}
            <span className="text-primary-600">{t("carrier.title")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {t("carrier.description")}
          </p>
        </motion.div>

        {/* Platform Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {platformApps.map((app) => (
              <motion.button
                key={app.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(app.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                  activeTab === app.id
                    ? `bg-gradient-to-r ${app.color} text-white shadow-lg`
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                } cursor-pointer`}
              >
                <div
                  className={`p-2 rounded-lg ${activeTab === app.id ? "bg-white/20" : "bg-gray-100"}`}
                >
                  {app.icon}
                </div>
                <div className="text-left">
                  <div className="font-bold">{app.title}</div>
                  <div className="text-sm opacity-80">{app.description}</div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active App Details */}
          <AnimatePresence mode="wait">
            {platformApps.map(
              (app) =>
                app.id === activeTab && (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
                  >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center space-x-4 mb-8">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${app.color} rounded-2xl flex items-center justify-center shadow-lg`}
                          >
                            <div className="text-white">{app.icon}</div>
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                              {app.title}
                            </h3>
                            <p className="text-gray-600">{app.description}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {app.features.map((feature, index) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start space-x-4"
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center mt-1">
                                <CheckCircle className="w-5 h-5 text-primary-600" />
                              </div>
                              <div>
                                <p className="text-gray-800">{feature}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`mt-8 px-8 py-3 bg-gradient-to-r ${app.color} text-white font-semibold rounded-xl hover:shadow-xl transition-all cursor-pointer`}
                        >
                          {t("common.learnMore")} {app.title}
                        </motion.button>
                      </div>

                      <div className="relative">
                        {/* App Mockup */}
                        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-1 shadow-2xl">
                          <div className="bg-white rounded-2xl p-6">
                            <div className="space-y-6">
                              {/* Header */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div
                                    className={`w-10 h-10 bg-gradient-to-br ${app.color} rounded-lg`}
                                  />
                                  <div>
                                    <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-2 w-16 bg-gray-100 rounded mt-1 animate-pulse" />
                                  </div>
                                </div>
                                <div className="h-8 w-20 bg-primary-100 rounded-full animate-pulse" />
                              </div>

                              {/* Map Visualization for Web/Driver */}
                              {(app.id === "web" || app.id === "driver") && (
                                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-4">
                                  <div className="h-48 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg relative overflow-hidden">
                                    {/* Animated route line */}
                                    <motion.div
                                      className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent"
                                      animate={{ x: ["0%", "100%"] }}
                                      transition={{
                                        repeat: Infinity,
                                        duration: 3,
                                        ease: "linear",
                                      }}
                                    />
                                    {/* Points of interest */}
                                    <div className="absolute top-1/4 left-1/4">
                                      <div className="w-3 h-3 bg-primary-500 rounded-full animate-ping" />
                                      <div className="w-3 h-3 bg-primary-500 rounded-full absolute top-0 left-0" />
                                    </div>
                                    <div className="absolute bottom-1/4 right-1/4">
                                      <div className="w-3 h-3 bg-secondary-500 rounded-full" />
                                    </div>
                                    {/* Rest stops */}
                                    <div className="absolute top-3/4 left-1/3">
                                      <Home className="w-4 h-4 text-amber-500" />
                                    </div>
                                    <div className="absolute bottom-1/3 right-1/3">
                                      <Coffee className="w-4 h-4 text-amber-500" />
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Stats for Manager */}
                              {app.id === "manager" && (
                                <div className="grid grid-cols-2 gap-4">
                                  {[
                                    t("carrier.features.mockStats.activeLoads"),
                                    t("carrier.features.mockStats.onTime"),
                                    t("carrier.features.mockStats.revenue"),
                                    t("carrier.features.mockStats.efficiency"),
                                  ].map((stat) => (
                                    <div
                                      key={stat}
                                      className="bg-gray-50 rounded-xl p-4"
                                    >
                                      <div className="h-2 w-12 bg-gray-200 rounded mb-2 animate-pulse" />
                                      <div className="h-4 w-16 bg-gray-300 rounded animate-pulse" />
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Load List for All */}
                              <div className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                  <div
                                    key={i}
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                  >
                                    <div className="flex items-center space-x-3">
                                      <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />
                                      <div>
                                        <div className="h-2 w-20 bg-gray-300 rounded mb-1 animate-pulse" />
                                        <div className="h-2 w-16 bg-gray-200 rounded animate-pulse" />
                                      </div>
                                    </div>
                                    <div className="h-8 w-20 bg-primary-100 rounded-full animate-pulse" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                          animate={{ y: [0, -15, 0] }}
                          transition={{ repeat: Infinity, duration: 3 }}
                          className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border"
                        >
                          <Truck className="w-8 h-8 text-primary-600" />
                        </motion.div>

                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2.5,
                            delay: 0.5,
                          }}
                          className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border"
                        >
                          <Zap className="w-8 h-8 text-secondary-600" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>

        {/* Key Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {t("carrier.featuresTitle")}{" "}
            <span className="text-primary-600">
              {t("carrier.modernCarriers")}
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`${feature.bgColor} rounded-2xl p-8 border border-transparent hover:border-primary-200 transition-all duration-300 hover:shadow-xl group cursor-pointer`}
              >
                <div
                  className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 border border-white group-hover:scale-110 transition-transform`}
                >
                  <div className={feature.color}>{feature.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary-600">
                    {feature.impact}
                  </span>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-transparent group-hover:w-12 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 rounded-3xl p-12 text-white mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              {t("carrier.provenResults")}
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {t("carrier.provenResultsDescription")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            {t("carrier.ctaTitle")}
          </h3>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            {t("carrier.ctaDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all cursor-pointer"
            >
              {t("carrier.startTrial")}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all cursor-pointer"
            >
              {t("carrier.scheduleDemo")}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarrierApp;
