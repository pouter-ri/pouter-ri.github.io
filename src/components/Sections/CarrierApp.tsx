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
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const CarrierApp = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("manager");
  const [isInView, setIsInView] = useState(false);
  const [tabsInView, setTabsInView] = useState(false);
  const [activeAppInView, setActiveAppInView] = useState(false);
  const [featuresInView, setFeaturesInView] = useState(Array(6).fill(false));
  const [statsInView, setStatsInView] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);
  const [appDetailsInView, setAppDetailsInView] = useState(
    Array(6).fill(false),
  );
  const [routePosition, setRoutePosition] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeAppRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

  // Intersection Observer for tabs
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTabsInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (tabsRef.current) {
      observer.observe(tabsRef.current);
    }

    return () => {
      if (tabsRef.current) {
        observer.unobserve(tabsRef.current);
      }
    };
  }, []);

  // Intersection Observer for active app
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && activeAppRef.current) {
            setActiveAppInView(true);
            // Animate app features
            const activeApp = platformApps.find((app) => app.id === activeTab);
            if (activeApp) {
              const timeouts = activeApp.features.map((_, index) => {
                return setTimeout(() => {
                  setAppDetailsInView((prev) => {
                    const newStates = [...prev];
                    newStates[index] = true;
                    return newStates;
                  });
                }, index * 100);
              });
              return () => timeouts.forEach((t) => clearTimeout(t));
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (activeAppRef.current) {
      observer.observe(activeAppRef.current);
    }

    return () => {
      if (activeAppRef.current) {
        observer.unobserve(activeAppRef.current);
      }
    };
  }, [activeTab, platformApps]);

  // Intersection Observer for features
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && featuresRef.current) {
            const timeouts = keyFeatures.map((_, index) => {
              return setTimeout(() => {
                setFeaturesInView((prev) => {
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

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, [keyFeatures]);

  // Intersection Observer for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
        }
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Intersection Observer for CTA
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

  // Route animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRoutePosition((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const activeApp = platformApps.find((app) => app.id === activeTab);

  return (
    <section
      id="carrier"
      className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -right-48 -top-48 w-96 h-96 bg-gradient-to-br from-primary-100/30 to-secondary-100/30 rounded-full blur-3xl"
          style={{
            animation: "rotate 120s linear infinite",
          }}
        />
        <div
          className="absolute -left-48 -bottom-48 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-emerald-100/20 rounded-full blur-3xl"
          style={{
            animation: "float 100s ease-in-out infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full mb-6 border border-primary-100 animate-pulse">
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
        </div>

        {/* Platform Tabs */}
        <div ref={tabsRef} className="mb-16">
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${
              tabsInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {platformApps.map((app) => (
              <button
                key={app.id}
                onClick={() => {
                  setActiveTab(app.id);
                  setAppDetailsInView(Array(app.features.length).fill(false));
                }}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                  activeTab === app.id
                    ? `bg-gradient-to-r ${app.color} text-white shadow-lg hover:shadow-xl`
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-primary-300"
                }`}
              >
                <div
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    activeTab === app.id ? "bg-white/20" : "bg-gray-100"
                  }`}
                >
                  {app.icon}
                </div>
                <div className="text-left">
                  <div className="font-bold">{app.title}</div>
                  <div className="text-sm opacity-80">{app.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active App Details */}
          {activeApp && (
            <div
              ref={activeAppRef}
              className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 transition-all duration-700 ${
                activeAppInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${activeApp.color} rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110`}
                    >
                      <div className="text-white">{activeApp.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {activeApp.title}
                      </h3>
                      <p className="text-gray-600">{activeApp.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {activeApp.features.map((feature, index) => (
                      <div
                        key={feature}
                        className={`flex items-start space-x-4 transition-all duration-500 ${
                          appDetailsInView[index]
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-8"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center mt-1 transition-transform duration-300 hover:scale-110">
                          <CheckCircle className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-gray-800 transition-colors duration-300 hover:text-primary-600">
                            {feature}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`mt-8 px-8 py-3 bg-gradient-to-r ${activeApp.color} text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer`}
                  >
                    {t("common.learnMore")} {activeApp.title}
                  </button>
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
                              className={`w-10 h-10 bg-gradient-to-br ${activeApp.color} rounded-lg`}
                            />
                            <div>
                              <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                              <div className="h-2 w-16 bg-gray-100 rounded mt-1 animate-pulse" />
                            </div>
                          </div>
                          <div className="h-8 w-20 bg-primary-100 rounded-full animate-pulse" />
                        </div>

                        {/* Map Visualization for Web/Driver */}
                        {(activeTab === "web" || activeTab === "driver") && (
                          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-4">
                            <div className="h-48 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg relative overflow-hidden">
                              {/* Animated route line */}
                              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent">
                                <div
                                  className="h-full w-16 bg-gradient-to-r from-primary-500 to-secondary-500"
                                  style={{
                                    transform: `translateX(${routePosition}%)`,
                                  }}
                                />
                              </div>
                              {/* Points of interest */}
                              <div className="absolute top-1/4 left-1/4">
                                <div
                                  className="w-3 h-3 bg-primary-500 rounded-full"
                                  style={{
                                    animation:
                                      "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                                  }}
                                />
                                <div className="w-3 h-3 bg-primary-500 rounded-full" />
                              </div>
                              <div className="absolute bottom-1/4 right-1/4">
                                <div className="w-3 h-3 bg-secondary-500 rounded-full" />
                              </div>
                              {/* Rest stops */}
                              <div className="absolute top-3/4 left-1/3">
                                <Home
                                  className="w-4 h-4 text-amber-500"
                                  style={{ animation: "bounce 1s infinite" }}
                                />
                              </div>
                              <div className="absolute bottom-1/3 right-1/3">
                                <Coffee
                                  className="w-4 h-4 text-amber-500"
                                  style={{
                                    animation: "bounce 1s infinite 0.2s",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Stats for Manager */}
                        {activeTab === "manager" && (
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
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
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
                  <div
                    className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border"
                    style={{
                      animation: "float-vertical 3s ease-in-out infinite",
                    }}
                  >
                    <Truck className="w-8 h-8 text-primary-600" />
                  </div>

                  <div
                    className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border"
                    style={{
                      animation:
                        "float-vertical 2.5s ease-in-out infinite 0.5s",
                    }}
                  >
                    <Zap className="w-8 h-8 text-secondary-600" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Key Features Grid */}
        <div ref={featuresRef} className="mb-20">
          <h3
            className={`text-4xl font-bold text-center text-gray-900 mb-12 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {t("carrier.featuresTitle")}{" "}
            <span className="text-primary-600">
              {t("carrier.modernCarriers")}
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`${feature.bgColor} rounded-2xl p-8 border border-transparent hover:border-primary-200 transition-all duration-500 hover:shadow-xl group cursor-pointer hover:-translate-y-2 hover:scale-105 active:scale-95 ${
                  featuresInView[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 border border-white transition-all duration-300 group-hover:scale-110`}
                >
                  <div
                    className={`${feature.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-primary-600">
                  {feature.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary-600">
                    {feature.impact}
                  </span>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-transparent transition-all duration-300 group-hover:w-12" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div
          ref={statsRef}
          className={`bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 rounded-3xl p-12 text-white mb-16 transition-all duration-700 ${
            statsInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
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
              <div
                key={stat.label}
                className={`text-center transition-all duration-500 ${
                  statsInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  <div className="text-white transition-transform duration-300 hover:scale-110">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2 transition-transform duration-300 hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className={`text-center transition-all duration-700 ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            {t("carrier.ctaTitle")}
          </h3>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            {t("carrier.ctaDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
              {t("carrier.startTrial")}
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
              {t("carrier.scheduleDemo")}
            </button>
          </div>
        </div>
      </div>

      <style>{`
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
        
        @keyframes float-vertical {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  );
};

export default CarrierApp;
