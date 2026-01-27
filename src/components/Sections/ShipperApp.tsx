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
import { useState, useEffect, useRef } from "react";

const ShipperApp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isInView, setIsInView] = useState(false);
  const [cardInView, setCardInView] = useState(Array(6).fill(false));
  const [statsInView, setStatsInView] = useState(false);
  const [betaInView, setBetaInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const betaRef = useRef<HTMLDivElement>(null);

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

  // Intersection Observer for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && cardsRef.current) {
            // Get all card elements and animate them in order
            const cardElements =
              cardsRef.current.querySelectorAll(".benefit-card");
            cardElements.forEach((_, index) => {
              setTimeout(() => {
                setCardInView((prev) => {
                  const newStates = [...prev];
                  newStates[index] = true;
                  return newStates;
                });
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  // Intersection Observer for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
        }
      },
      { threshold: 0.5 },
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

  // Intersection Observer for beta section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBetaInView(true);
        }
      },
      { threshold: 0.3 },
    );

    if (betaRef.current) {
      observer.observe(betaRef.current);
    }

    return () => {
      if (betaRef.current) {
        observer.unobserve(betaRef.current);
      }
    };
  }, []);

  return (
    <section
      id="shipper"
      className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-primary-100/20 blur-3xl"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              animation: `float ${10 + i * 2}s ease-in-out infinite ${i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-200 rounded-full mb-6 animate-pulse">
            <AlertCircle className="w-5 h-5 text-primary-600 mr-2" />
            <span className="font-semibold text-primary-700">
              {t("shipper.comingSoon")}
            </span>
            <Clock className="w-5 h-5 text-primary-600 ml-3 mr-2" />
            <span className="text-sm text-gray-600">
              {t("shipper.launchDate")}
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Weload{" "}
            <span className="text-primary-600">{t("shipper.title")}</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            {t("shipper.description")}
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`benefit-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:border-primary-200 relative overflow-hidden cursor-pointer ${
                cardInView[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 transition-all duration-500" />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <div className="text-white transform transition-transform duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>

                {/* Animated underline */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Beta Program Section */}
        <div
          ref={betaRef}
          className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          </div>

          {/* Floating Elements */}
          <div
            className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
            style={{
              animation: "float-slow 4s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl"
            style={{
              animation: "float-slow 4s ease-in-out infinite 0.5s",
            }}
          />

          <div className="relative z-10 text-center">
            <h3
              className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
                betaInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {t("shipper.betaProgram")}
            </h3>

            <p
              className={`text-xl mb-10 max-w-2xl mx-auto text-white/90 transition-all duration-700 delay-100 ${
                betaInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {t("shipper.betaDescription")}
            </p>

            <form
              onSubmit={handleSubmit}
              className={`flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                betaInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                {t("shipper.joinBeta")}
              </button>
            </form>

            <div
              className={`mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80 transition-all duration-700 delay-300 ${
                betaInView ? "opacity-100" : "opacity-0"
              }`}
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
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-105 active:scale-95 ${
                statsInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Add animation definitions */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default ShipperApp;
