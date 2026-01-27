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
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "annual",
  );
  const [activeTier, setActiveTier] = useState<"carrier" | "shipper">(
    "carrier",
  );
  const [isInView, setIsInView] = useState(false);
  const [pricingCardsInView, setPricingCardsInView] = useState(
    Array(3).fill(false),
  );
  const [savingsInView, setSavingsInView] = useState(false);
  const [featuresInView, setFeaturesInView] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const savingsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

  // Intersection Observer for pricing cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && pricingRef.current) {
            const timeouts = tiers.map((_, index) => {
              return setTimeout(() => {
                setPricingCardsInView((prev) => {
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

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current);
      }
    };
  }, [tiers]);

  // Intersection Observer for savings section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSavingsInView(true);
        }
      },
      { threshold: 0.3 },
    );

    if (savingsRef.current) {
      observer.observe(savingsRef.current);
    }

    return () => {
      if (savingsRef.current) {
        observer.unobserve(savingsRef.current);
      }
    };
  }, []);

  // Intersection Observer for features section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturesInView(true);
        }
      },
      { threshold: 0.2 },
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  // Intersection Observer for CTA section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaInView(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  // Custom CSS for animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes float {
        0%, 100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(180deg);
        }
      }
      .animate-rotate {
        animation: rotate 120s linear infinite;
      }
      .animate-float {
        animation: float 100s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-64 -top-64 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-secondary-100/20 rounded-full blur-3xl animate-rotate" />
        <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-gradient-to-br from-primary-100/10 to-emerald-100/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
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
        </div>

        {/* Toggle between Carrier and Shipper Pricing */}
        <div
          className={`flex justify-center mb-8 md:mb-12 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center bg-gray-100 rounded-xl md:rounded-2xl p-1">
            <button
              onClick={() => setActiveTier("carrier")}
              className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTier === "carrier"
                  ? "bg-white text-gray-900 shadow-md hover:scale-105"
                  : "text-gray-600 hover:text-gray-900 hover:scale-105"
              } cursor-pointer`}
            >
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t("pricing.carrier.title")}</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTier("shipper")}
              className={`px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTier === "shipper"
                  ? "bg-white text-gray-900 shadow-md hover:scale-105"
                  : "text-gray-600 hover:text-gray-900 hover:scale-105"
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
        </div>

        {/* Billing Toggle */}
        <div
          className={`flex justify-center items-center mb-10 md:mb-16 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span
              className={`font-medium text-sm sm:text-base transition-colors duration-300 ${
                billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {t("pricing.common.monthly")}
            </span>
            <button
              onClick={toggleBillingCycle}
              className="relative w-12 h-7 sm:w-14 sm:h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full cursor-pointer"
            >
              <div
                className="absolute top-0.5 sm:top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300"
                style={{
                  left:
                    billingCycle === "monthly" ? "4px" : "calc(100% - 28px)",
                }}
              />
            </button>
            <div className="flex items-center space-x-2">
              <span
                className={`font-medium text-sm sm:text-base transition-colors duration-300 ${
                  billingCycle === "annual" ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {t("pricing.common.annual")}
              </span>
              <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-100 text-green-700 text-xs sm:text-sm font-semibold rounded-full">
                {t("pricing.common.save20")}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          ref={pricingRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20 items-stretch"
        >
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl md:rounded-3xl border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                tier.popular
                  ? "border-primary-500 shadow-xl md:shadow-2xl"
                  : "border-gray-200 shadow-lg hover:border-primary-200"
              } bg-white overflow-hidden flex flex-col h-full ${
                pricingCardsInView[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-1 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-full shadow-lg text-sm sm:text-base whitespace-nowrap animate-pulse">
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
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${tier.color} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110`}
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
                    <div
                      key={featureIndex}
                      className="flex items-start transition-all duration-300 hover:translate-x-2"
                    >
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
                <button
                  className={`w-full py-3 sm:py-4 font-semibold rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base hover:scale-105 active:scale-95 ${
                    tier.popular
                      ? "bg-gradient-to-r from-primary-600 to-secondary-500 text-white hover:shadow-lg sm:hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Savings Calculator */}
        <div
          ref={savingsRef}
          className={`mb-12 md:mb-20 transition-all duration-700 ${
            savingsInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
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
                    <div
                      key={saving.description}
                      className={`bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 border border-white/20 transition-all duration-500 delay-${index * 100} ${
                        savingsInView
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                    >
                      <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                        {saving.amount}
                      </div>
                      <div className="text-white/80 text-xs sm:text-sm">
                        {saving.description}
                      </div>
                    </div>
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
                    <select className="w-full px-4 py-2.5 md:py-3 bg-white/20 border border-white/30 rounded-lg md:rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base transition-all duration-300 hover:bg-white/30">
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
                    <select className="w-full px-4 py-2.5 md:py-3 bg-white/20 border border-white/30 rounded-lg md:rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base transition-all duration-300 hover:bg-white/30">
                      {mileageOptions.map((option, index) => (
                        <option key={index} className="bg-gray-700">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className="w-full py-3 md:py-4 bg-white text-primary-600 font-semibold rounded-lg md:rounded-xl hover:shadow-lg md:hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-sm sm:text-base">
                    {t("pricing.calculator.calculateSavings")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Plans Include Section */}
        <div
          ref={featuresRef}
          className={`mb-12 md:mb-20 transition-all duration-700 ${
            featuresInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            {t("pricing.allPlansInclude.title")}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {allPlansFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`text-center transition-all duration-700 delay-${index * 100} ${
                  featuresInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-50 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110">
                  <div className="text-primary-600">{feature.icon}</div>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div
          ref={ctaRef}
          className={`text-center transition-all duration-700 ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl md:rounded-3xl p-6 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              {t("pricing.finalCta.finalCtaTitle")}
            </h3>
            <p className="text-gray-600 mb-6 md:mb-10 max-w-2xl mx-auto text-sm md:text-base">
              {t("pricing.finalCta.finalCtaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-lg md:rounded-xl hover:shadow-lg md:hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-sm md:text-base">
                {t("pricing.common.startTrial")}
              </button>
              <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 font-semibold rounded-lg md:rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-sm md:text-base">
                {t("pricing.common.scheduleDemo")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
