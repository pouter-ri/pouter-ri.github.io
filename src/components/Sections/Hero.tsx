import {
  ArrowRight,
  Play,
  Shield,
  Zap,
  Truck,
  Leaf,
  Target,
  ExternalLink,
  Globe,
  MapPin,
  Rocket,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isInView, setIsInView] = useState(false);
  const [floatingElements, setFloatingElements] = useState(
    Array(20).fill({ x: 0, y: 0 }),
  );
  const [truckPositions, setTruckPositions] = useState([
    { x: 30, y: 25 },
    { x: 50, y: 40 },
    { x: 70, y: 30 },
  ]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const carrierAppUrl = import.meta.env.VITE_CARRIER_APP_URL;
  const shipperAppUrl = import.meta.env.VITE_SHIPPER_APP_URL;

  const handleCarrierClick = () => {
    if (!carrierAppUrl) {
      console.error("VITE_CARRIER_APP_URL is not defined");
      return;
    }

    if (carrierAppUrl.startsWith("http")) {
      window.open(carrierAppUrl, "_blank", "noopener,noreferrer");
    } else if (carrierAppUrl.startsWith("/")) {
      window.location.href = carrierAppUrl;
    } else {
      const element = document.querySelector(carrierAppUrl);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = carrierAppUrl;
      }
    }
  };

  const handleShipperClick = () => {
    if (!shipperAppUrl) {
      console.error("VITE_SHIPPER_APP_URL is not defined");
      return;
    }

    if (shipperAppUrl.startsWith("/")) {
      navigate(shipperAppUrl);
    } else if (shipperAppUrl.startsWith("http")) {
      window.open(shipperAppUrl, "_blank", "noopener,noreferrer");
    } else {
      const element = document.querySelector(shipperAppUrl);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleDemoClick = () => {
    const videoUrl = "https://www.youtube.com/watch?v=demo";
    window.open(videoUrl, "_blank", "noopener,noreferrer");
  };

  const stats = [
    {
      value: "15K+",
      label: t("hero.stats.activeCarriers"),
      icon: <Truck className="w-5 h-5" />,
      color: "text-primary-600",
    },
    {
      value: "45%",
      label: t("hero.stats.costReduction"),
      icon: <Zap className="w-5 h-5" />,
      color: "text-secondary-600",
    },
    {
      value: "25%",
      label: t("hero.stats.carbonOffset"),
      icon: <Leaf className="w-5 h-5" />,
      color: "text-emerald-600",
    },
    {
      value: "99%",
      label: t("hero.stats.onTimeRate"),
      icon: <Shield className="w-5 h-5" />,
      color: "text-blue-600",
    },
  ];

  const mockStats = [
    t("hero.mockStats.revenue"),
    t("hero.mockStats.loads"),
    t("hero.mockStats.miles"),
    t("hero.mockStats.rating"),
  ];

  const features = [
    {
      icon: <Globe className="w-4 h-4" />,
      text: t("hero.features.canadianStartup"),
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: t("hero.features.techInTunisia"),
    },
    {
      icon: <Rocket className="w-4 h-4" />,
      text: t("hero.features.northAmericaExpansion"),
    },
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingElements((prev) =>
        prev.map(() => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
        })),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Truck animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTruckPositions((prev) =>
        prev.map((pos) => ({
          x: ((pos.x + 0.5) % 80) + 10, // Keep between 10% and 90%
          y: ((pos.y + 0.3) % 60) + 20, // Keep between 20% and 80%
        })),
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-28"
      ref={sectionRef}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/20" />

      {/* Animated background dots */}
      <div className="absolute inset-0 -z-10">
        {floatingElements.map((pos, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/20 rounded-full animate-float-dot"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Startup Info Badge */}
            <div
              className={`inline-flex flex-wrap items-center gap-2 px-2 py-3 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 rounded-xl mb-6 border border-primary-200 group hover:shadow-md transition-all duration-300 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="flex items-center">
                <Rocket className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">
                  {t("hero.startupTagline")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-1 px-2 py-1 bg-white/50 rounded-lg text-xs font-medium transition-all duration-500 hover:scale-105 ${
                      isInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="text-primary-600">{feature.icon}</div>
                    <span className="text-[10px]">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {t("hero.title")}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 animate-gradient-x">
                {t("hero.highlightedTitle")}
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              {t("hero.description")}
            </p>

            {/* Enhanced Stats Preview */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-600 transition-transform duration-300 hover:scale-110" />
                <span className="text-lg font-semibold text-gray-900">
                  {t("hero.marketFocus")}
                </span>
              </div>
              <div className="h-4 w-0.5 bg-gray-300" />
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-secondary-600 transition-transform duration-300 hover:scale-110" />
                <span className="text-lg font-semibold text-gray-900">
                  {t("hero.expansionPlans")}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCarrierClick}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group relative overflow-hidden"
              >
                <Truck className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                <span>{t("hero.carrierApp")}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>

              <button
                onClick={handleShipperClick}
                className="px-8 py-4 bg-gradient-to-r from-secondary-500 to-primary-500 text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group relative overflow-hidden"
              >
                <Target className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>{t("hero.shipperApp")}</span>
                <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                onClick={handleDemoClick}
                className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 flex items-center justify-center gap-3 hover:border-primary-300 hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group relative"
              >
                <Play className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>{t("hero.watchDemo")}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-gray-100 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <div
                      className={`p-2 rounded-lg ${stat.color.replace("text-", "bg-")}/10 transition-transform duration-300 hover:scale-110`}
                    >
                      <div
                        className={`${stat.color} transition-transform duration-300 hover:scale-110`}
                      >
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-primary-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isInView
                ? "opacity-100 scale-100 rotate-y-0"
                : "opacity-0 scale-90 rotate-y-10"
            }`}
          >
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute -inset-24 bg-gradient-to-r from-primary-100/20 via-transparent to-secondary-100/20 animate-gradient-x" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <span className="text-white font-bold text-sm">WL</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">
                        {t("hero.mockDashboard.title")}
                      </div>
                      <div className="text-xs text-gray-500">
                        {t("hero.mockDashboard.subtitle")}
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold animate-pulse">
                    {t("hero.mockDashboard.live")}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {mockStats.map((stat, index) => (
                    <div
                      key={stat}
                      className={`bg-white rounded-xl p-4 shadow border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                        isInView
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-90"
                      }`}
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
                      <div className="text-xs text-gray-500 mb-2">{stat}</div>
                      <div className="text-lg font-bold text-gray-900 transition-colors duration-300 hover:text-primary-600">
                        {index === 0 && "$12,450"}
                        {index === 1 && "47"}
                        {index === 2 && "15,230"}
                        {index === 3 && "4.8★"}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-100">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm font-semibold text-gray-900">
                      {t("hero.mockDashboard.activeLoads")}
                    </div>
                  </div>
                  <div className="h-48 bg-gradient-to-br from-primary-50 to-emerald-50 rounded-lg relative overflow-hidden border border-primary-100">
                    {/* Map visualization */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
                      {/* Map lines */}
                      <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gray-300 rotate-45" />
                      <div className="absolute top-1/2 left-1/4 w-32 h-0.5 bg-gray-300" />
                      <div className="absolute bottom-1/4 left-1/3 w-24 h-0.5 bg-gray-300 rotate-30" />

                      {/* Cities */}
                      <div className="absolute top-1/4 left-1/4">
                        <div className="w-3 h-3 bg-primary-600 rounded-full animate-pulse" />
                        <div className="text-xs mt-1 font-medium">Toronto</div>
                      </div>
                      <div className="absolute bottom-1/4 right-1/4">
                        <div className="w-3 h-3 bg-secondary-600 rounded-full animate-pulse" />
                        <div className="text-xs mt-1 font-medium">Montreal</div>
                      </div>

                      {/* Moving trucks */}
                      {truckPositions.map((pos, i) => (
                        <div
                          key={i}
                          className="absolute transition-all duration-100"
                          style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                        >
                          <Truck className="w-4 h-4 text-primary-600 animate-bounce" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 ${
                        isInView
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-8"
                      }`}
                      style={{ transitionDelay: `${500 + i * 100}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                          <Truck className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            Load #{100 + i} • Montreal → Toronto
                          </div>
                          <div className="text-xs text-gray-500">
                            {i === 1 && "In Transit • 150km remaining"}
                            {i === 2 && "Scheduled • 8:00 AM pickup"}
                            {i === 3 && "Delivered • Awaiting paperwork"}
                          </div>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                        {i === 1 && "Active"}
                        {i === 2 && "Scheduled"}
                        {i === 3 && "Completed"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-10 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-primary-100 hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer animate-float-badge">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs font-bold text-white">CA</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-secondary-100 hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer animate-float-badge-slow">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs font-bold text-white">TN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float-dot {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(25px);
          }
        }
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes float-badge {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-badge-slow {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }
        .animate-float-dot {
          animation: float-dot linear infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-float-badge {
          animation: float-badge 3s ease-in-out infinite;
        }
        .animate-float-badge-slow {
          animation: float-badge-slow 2.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .rotate-y-10 {
          transform: perspective(1000px) rotateY(10deg);
        }
        .rotate-y-0 {
          transform: perspective(1000px) rotateY(0deg);
        }
      `}</style>
    </section>
  );
};

export default Hero;
