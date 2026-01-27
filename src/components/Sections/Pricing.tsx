import { motion } from "framer-motion";
import {
  Check,
  X,
  Star,
  Zap,
  Users,
  Globe,
  Shield,
  Truck,
  Leaf,
  BarChart,
  Cloud,
  Clock,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "annual",
  );
  const [activeTier, setActiveTier] = useState<"carrier" | "shipper">(
    "carrier",
  );

  const toggleBillingCycle = () => {
    setBillingCycle((prev) => (prev === "monthly" ? "annual" : "monthly"));
  };

  const carrierTiers = [
    {
      name: t("pricing.carrier.tiers.starter"),
      description: t("pricing.carrier.tiers.starterDesc"),
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        {
          text: t("pricing.carrier.features.vehicles", { count: 5 }),
          included: true,
        },
        { text: t("pricing.carrier.features.loadMatching"), included: true },
        {
          text: t("pricing.carrier.features.realTimeTracking"),
          included: true,
        },
        {
          text: t("pricing.carrier.features.digitalPaperwork"),
          included: true,
        },
        {
          text: t("pricing.carrier.features.backhaulOptimization"),
          included: true,
        },
        {
          text: t("pricing.carrier.features.routeOptimization"),
          included: true,
        },
        { text: t("pricing.carrier.features.carbonTracking"), included: false },
        {
          text: t("pricing.carrier.features.advancedAnalytics"),
          included: false,
        },
        { text: t("pricing.carrier.features.apiAccess"), included: false },
        {
          text: t("pricing.carrier.features.prioritySupport"),
          included: false,
        },
      ],
      cta: t("pricing.common.startTrial"),
      color: "from-primary-500 to-primary-700",
      popular: false,
      icon: <Truck className="w-6 h-6" />,
      bestFor: t("pricing.carrier.bestFor.smallCarriers"),
    },
    {
      name: t("pricing.carrier.tiers.professional"),
      description: t("pricing.carrier.tiers.professionalDesc"),
      monthlyPrice: 129,
      annualPrice: 99,
      features: [
        {
          text: t("pricing.carrier.features.vehicles", { count: 25 }),
          included: true,
        },
        { text: t("pricing.carrier.features.aiLoadMatching"), included: true },
        {
          text: t("pricing.carrier.features.realTimeTracking"),
          included: true,
        },
        {
          text: t("pricing.carrier.features.digitalPaperwork"),
          included: true,
        },
        {
          text: t("pricing.carrier.features.backhaulOptimization"),
          included: true,
        },
        {
          text: t("pricing.carrier.features.advancedRouteOptimization"),
          included: true,
        },
        {
          text: t("pricing.carrier.features.carbonTrackingOffset"),
          included: true,
        },
        {
          text: t("pricing.carrier.features.advancedAnalytics"),
          included: true,
        },
        { text: t("pricing.carrier.features.basicApiAccess"), included: true },
        {
          text: t("pricing.carrier.features.prioritySupport"),
          included: false,
        },
      ],
      cta: t("pricing.common.getStarted"),
      color: "from-primary-600 to-secondary-500",
      popular: true,
      icon: <BarChart className="w-6 h-6" />,
      bestFor: t("pricing.carrier.bestFor.growingFleets"),
    },
    {
      name: t("pricing.carrier.tiers.enterprise"),
      description: t("pricing.carrier.tiers.enterpriseDesc"),
      monthlyPrice: 299,
      annualPrice: 249,
      features: [
        {
          text: t("pricing.carrier.features.unlimitedVehicles"),
          included: true,
        },
        { text: t("pricing.carrier.features.aiLoadMatching"), included: true },
        {
          text: t("pricing.carrier.features.enterpriseTracking"),
          included: true,
        },
        { text: t("pricing.carrier.features.fullDigital"), included: true },
        {
          text: t("pricing.carrier.features.backhaulOptimization"),
          included: true,
        },
        { text: t("pricing.carrier.features.customRoute"), included: true },
        {
          text: t("pricing.carrier.features.carbonTrackingOffset"),
          included: true,
        },
        {
          text: t("pricing.carrier.features.enterpriseAnalytics"),
          included: true,
        },
        { text: t("pricing.carrier.features.fullApi"), included: true },
        {
          text: t("pricing.carrier.features.dedicatedSupport"),
          included: true,
        },
        {
          text: t("pricing.carrier.features.customIntegrations"),
          included: true,
        },
        { text: t("pricing.carrier.features.accountManager"), included: true },
      ],
      cta: t("pricing.common.contactSales"),
      color: "from-gray-800 to-gray-900",
      popular: false,
      icon: <Globe className="w-6 h-6" />,
      bestFor: t("pricing.carrier.bestFor.largeFleets"),
    },
  ];

  const shipperTiers = [
    {
      name: t("pricing.shipper.tiers.basic"),
      description: t("pricing.shipper.tiers.basicDesc"),
      monthlyPrice: 79,
      annualPrice: 59,
      features: [
        {
          text: t("pricing.shipper.features.shipments", { count: 50 }),
          included: true,
        },
        { text: t("pricing.shipper.features.carrierMatching"), included: true },
        {
          text: t("pricing.shipper.features.realTimeTracking"),
          included: true,
        },
        { text: t("pricing.shipper.features.basicAnalytics"), included: true },
        {
          text: t("pricing.shipper.features.documentManagement"),
          included: true,
        },
        { text: t("pricing.shipper.features.emailSupport"), included: true },
        {
          text: t("pricing.shipper.features.advancedRouting"),
          included: false,
        },
        { text: t("pricing.shipper.features.carbonOffset"), included: false },
        { text: t("pricing.shipper.features.apiAccess"), included: false },
        {
          text: t("pricing.shipper.features.prioritySupport"),
          included: false,
        },
      ],
      cta: t("pricing.shipper.joinWaitlist"),
      color: "from-secondary-500 to-secondary-700",
      popular: false,
      icon: <Cloud className="w-6 h-6" />,
      bestFor: t("pricing.shipper.bestFor.smallBusinesses"),
    },
    {
      name: t("pricing.shipper.tiers.growth"),
      description: t("pricing.shipper.tiers.growthDesc"),
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        {
          text: t("pricing.shipper.features.shipments", { count: 500 }),
          included: true,
        },
        {
          text: t("pricing.shipper.features.aiCarrierMatching"),
          included: true,
        },
        {
          text: t("pricing.shipper.features.realTimeTracking"),
          included: true,
        },
        {
          text: t("pricing.shipper.features.advancedAnalytics"),
          included: true,
        },
        {
          text: t("pricing.shipper.features.documentManagement"),
          included: true,
        },
        { text: t("pricing.shipper.features.prioritySupport"), included: true },
        { text: t("pricing.shipper.features.advancedRouting"), included: true },
        { text: t("pricing.shipper.features.carbonOffset"), included: true },
        { text: t("pricing.shipper.features.basicApiAccess"), included: true },
        {
          text: t("pricing.shipper.features.customReporting"),
          included: false,
        },
      ],
      cta: t("pricing.shipper.joinWaitlist"),
      color: "from-secondary-600 to-primary-500",
      popular: true,
      icon: <Zap className="w-6 h-6" />,
      bestFor: t("pricing.shipper.bestFor.growingBusinesses"),
    },
    {
      name: t("pricing.shipper.tiers.enterprise"),
      description: t("pricing.shipper.tiers.enterpriseDesc"),
      monthlyPrice: 499,
      annualPrice: 399,
      features: [
        {
          text: t("pricing.shipper.features.unlimitedShipments"),
          included: true,
        },
        {
          text: t("pricing.shipper.features.aiCarrierMatching"),
          included: true,
        },
        {
          text: t("pricing.shipper.features.enterpriseTracking"),
          included: true,
        },
        { text: t("pricing.shipper.features.customAnalytics"), included: true },
        {
          text: t("pricing.shipper.features.documentAutomation"),
          included: true,
        },
        {
          text: t("pricing.shipper.features.dedicatedSupport"),
          included: true,
        },
        { text: t("pricing.shipper.features.advancedRouting"), included: true },
        { text: t("pricing.shipper.features.offsetPrograms"), included: true },
        { text: t("pricing.shipper.features.fullApi"), included: true },
        { text: t("pricing.shipper.features.customReporting"), included: true },
        { text: t("pricing.shipper.features.accountManager"), included: true },
        {
          text: t("pricing.shipper.features.customIntegrations"),
          included: true,
        },
      ],
      cta: t("pricing.common.contactSales"),
      color: "from-gray-800 to-gray-900",
      popular: false,
      icon: <Shield className="w-6 h-6" />,
      bestFor: t("pricing.shipper.bestFor.enterprises"),
    },
  ];

  const tiers = activeTier === "carrier" ? carrierTiers : shipperTiers;

  const savings = [
    { amount: "45%", description: t("pricing.calculator.emptyMilesReduction") },
    { amount: "30%", description: t("pricing.calculator.operationalSavings") },
    { amount: "25%", description: t("pricing.calculator.fuelSavings") },
    { amount: "99.8%", description: t("pricing.calculator.onTimeRate") },
  ];

  const vehicleOptions = [
    t("pricing.calculator.vehicleOptions.1_5"),
    t("pricing.calculator.vehicleOptions.6_25"),
    t("pricing.calculator.vehicleOptions.26_100"),
    t("pricing.calculator.vehicleOptions.100_plus"),
  ];

  const mileageOptions = [
    t("pricing.calculator.mileageOptions.under_50k"),
    t("pricing.calculator.mileageOptions.50k_200k"),
    t("pricing.calculator.mileageOptions.200k_500k"),
    t("pricing.calculator.mileageOptions.500k_plus"),
  ];

  const allPlansFeatures = [
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t("pricing.allPlansInclude.enterpriseSecurity"),
      description: t("pricing.allPlansInclude.securityDesc"),
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t("pricing.allPlansInclude.uptime"),
      description: t("pricing.allPlansInclude.uptimeDesc"),
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t("pricing.allPlansInclude.support24_7"),
      description: t("pricing.allPlansInclude.supportDesc"),
    },
    {
      icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t("pricing.allPlansInclude.carbonTrackingFeature"),
      description: t("pricing.allPlansInclude.carbonDesc"),
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -right-64 -top-64 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-secondary-100/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -left-64 -bottom-64 w-96 h-96 bg-gradient-to-br from-primary-100/10 to-emerald-100/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full mb-4 md:mb-6 border border-primary-100">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">
              {t("pricing.common.transparentPricing")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            {t("pricing.common.title")}{" "}
            <span className="text-primary-600">
              {t("pricing.common.highlightedWord")}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t("pricing.common.subtitle")}
          </p>
        </motion.div>

        {/* Toggle between Carrier and Shipper Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center bg-gray-100 rounded-xl md:rounded-2xl p-1">
            <button
              onClick={() => setActiveTier("carrier")}
              className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all text-sm sm:text-base ${
                activeTier === "carrier"
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              } cursor-pointer`}
            >
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t("pricing.carrier.title")}</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTier("shipper")}
              className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all text-sm sm:text-base ${
                activeTier === "shipper"
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              } cursor-pointer`}
            >
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t("pricing.shipper.title")}</span>
                <span className="px-1.5 sm:px-2 py-0.5 text-xs bg-primary-100 text-primary-700 rounded-full">
                  {t("shipper.comingSoon")}
                </span>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mb-10 md:mb-16"
        >
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span
              className={`font-medium text-sm sm:text-base ${billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"}`}
            >
              {t("pricing.common.monthly")}
            </span>
            <button
              onClick={toggleBillingCycle}
              className="relative w-12 h-7 sm:w-14 sm:h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full cursor-pointer"
            >
              <motion.div
                className="absolute top-0.5 sm:top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{
                  left:
                    billingCycle === "monthly" ? "4px" : "calc(100% - 28px)",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center space-x-2">
              <span
                className={`font-medium text-sm sm:text-base ${billingCycle === "annual" ? "text-gray-900" : "text-gray-500"}`}
              >
                {t("pricing.common.annual")}
              </span>
              <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 text-green-700 text-xs sm:text-sm font-semibold rounded-full">
                {t("pricing.common.save20")}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl md:rounded-3xl border-2 ${
                tier.popular
                  ? "border-primary-500 shadow-xl md:shadow-2xl"
                  : "border-gray-200 shadow-lg hover:border-primary-200"
              } bg-white overflow-hidden transition-all duration-300 flex flex-col h-full`}
            >
              {tier.popular && (
                <div className="absolute top-1 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-full shadow-lg text-sm sm:text-base whitespace-nowrap">
                    {t("pricing.common.mostPopular")}
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 flex-grow mt-6">
                {/* Tier Header */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${tier.color} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <div className="text-white w-5 h-5 sm:w-6 sm:h-6">
                          {tier.icon}
                        </div>
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
                          {tier.name}
                        </h3>
                        <div className="text-xs sm:text-sm text-gray-500 truncate">
                          {tier.bestFor}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
                      {tier.description}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline mb-1 sm:mb-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                      $
                      {billingCycle === "monthly"
                        ? tier.monthlyPrice
                        : tier.annualPrice}
                    </span>
                    <span className="text-gray-500 ml-2 text-sm sm:text-base">
                      {t("pricing.common.perMonth")}
                    </span>
                  </div>
                  {billingCycle === "annual" && (
                    <div className="text-gray-600 text-sm">
                      <span className="line-through">
                        ${tier.monthlyPrice}
                        {t("pricing.common.perMonth")}
                      </span>
                      <span className="ml-2 text-green-600 font-semibold">
                        {t("pricing.common.saveAmount", {
                          amount: (tier.monthlyPrice - tier.annualPrice) * 12,
                        })}
                      </span>
                    </div>
                  )}
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    {billingCycle === "annual"
                      ? t("pricing.common.billedAnnually", {
                          amount: tier.annualPrice * 12,
                        })
                      : t("pricing.common.billedMonthly")}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 sm:space-y-4 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm sm:text-base ${feature.included ? "text-gray-800" : "text-gray-400"}`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="p-6 sm:p-8 pt-0 mt-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 sm:py-4 font-semibold rounded-lg sm:rounded-xl transition-all text-sm sm:text-base ${
                    tier.popular
                      ? "bg-gradient-to-r from-primary-600 to-secondary-500 text-white hover:shadow-lg sm:hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {tier.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Savings Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
                  {t("pricing.calculator.savingsCalculator")}{" "}
                  <span className="text-white">
                    {t("pricing.calculator.savingsHighlight")}
                  </span>
                </h3>
                <p className="text-white/90 mb-6 md:mb-8 text-sm sm:text-base">
                  {t("pricing.calculator.savingsDescription")}
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {savings.map((saving, index) => (
                    <motion.div
                      key={saving.description}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 border border-white/20"
                    >
                      <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                        {saving.amount}
                      </div>
                      <div className="text-white/80 text-xs sm:text-sm">
                        {saving.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20">
                <h4 className="text-lg sm:text-xl font-bold mb-4 md:mb-6">
                  {t("pricing.calculator.quickEstimate")}
                </h4>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block text-white/80 mb-1 md:mb-2 text-sm sm:text-base">
                      {t("pricing.calculator.numVehicles")}
                    </label>
                    <select className="w-full px-4 py-2.5 md:py-3 bg-white/20 border border-white/30 rounded-lg md:rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base">
                      {vehicleOptions.map((option, index) => (
                        <option key={index} className="bg-gray-700">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/80 mb-1 md:mb-2 text-sm sm:text-base">
                      {t("pricing.calculator.monthlyMiles")}
                    </label>
                    <select className="w-full px-4 py-2.5 md:py-3 bg-white/20 border border-white/30 rounded-lg md:rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base">
                      {mileageOptions.map((option, index) => (
                        <option key={index} className="bg-gray-700">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 md:py-4 bg-white text-primary-600 font-semibold rounded-lg md:rounded-xl hover:shadow-lg md:hover:shadow-xl transition-all cursor-pointer text-sm sm:text-base"
                  >
                    {t("pricing.calculator.calculateSavings")}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Plans Include Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            {t("pricing.allPlansInclude.title")}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {allPlansFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-50 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <div className="text-primary-600">{feature.icon}</div>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl md:rounded-3xl p-6 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              {t("pricing.finalCta.finalCtaTitle")}
            </h3>
            <p className="text-gray-600 mb-6 md:mb-10 max-w-2xl mx-auto text-sm md:text-base">
              {t("pricing.finalCta.finalCtaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-lg md:rounded-xl hover:shadow-lg md:hover:shadow-xl transition-all cursor-pointer text-sm md:text-base"
              >
                {t("pricing.common.startTrial")}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 font-semibold rounded-lg md:rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all cursor-pointer text-sm md:text-base"
              >
                {t("pricing.common.scheduleDemo")}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
