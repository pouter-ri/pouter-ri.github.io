import {
  Rocket,
  Clock,
  Mail,
  Bell,
  Calendar,
  Target,
  ArrowLeft,
  AlertCircle,
  Check,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ComingSoon = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState({
    months: 0,
    weeks: 0,
    days: 0,
  });
  const [isApproximate, setIsApproximate] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [dots, setDots] = useState(Array(20).fill({ x: 0, y: 0 }));
  const [progressWidth, setProgressWidth] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const calculateTargetDate = () => {
    const targetDate = new Date(2026, 9, 1);
    const randomDays = Math.floor(Math.random() * 92);
    targetDate.setDate(targetDate.getDate() + randomDays);
    return targetDate;
  };

  const [targetDate] = useState(calculateTargetDate());

  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { months: 0, weeks: 0, days: 0 };
    }

    const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    const months = Math.floor(totalDays / 30);
    const remainingDays = totalDays % 30;
    const weeks = Math.floor(remainingDays / 7);
    const days = remainingDays % 7;

    return { months, weeks, days };
  };

  useEffect(() => {
    const result = calculateTimeRemaining();
    setTimeRemaining(result);

    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    const monthsAway = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    setIsApproximate(monthsAway > 6);

    const width = Math.min(
      100,
      monthsAway > 24 ? 0 : ((24 - monthsAway) / 24) * 100,
    );
    setProgressWidth(width);

    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 60000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Intersection Observer
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

  // Animated dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) =>
        prev.map(() => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: 0,
        })),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Early access requested:", email);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t("comingSoon.features.predictiveAnalytics"),
      description: t("comingSoon.features.predictiveAnalyticsDesc"),
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: t("comingSoon.features.smartScheduling"),
      description: t("comingSoon.features.smartSchedulingDesc"),
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: t("comingSoon.features.realTimeAlerts"),
      description: t("comingSoon.features.realTimeAlertsDesc"),
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t("comingSoon.features.continuousVisibility"),
      description: t("comingSoon.features.continuousVisibilityDesc"),
    },
  ];

  const formatTargetDate = () => {
    return targetDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const betaBenefits = [
    {
      icon: "🎯",
      title: t("comingSoon.betaBenefits.priorityAccess"),
      desc: t("comingSoon.betaBenefits.priorityAccessDesc"),
    },
    {
      icon: "💬",
      title: t("comingSoon.betaBenefits.directFeedback"),
      desc: t("comingSoon.betaBenefits.directFeedbackDesc"),
    },
    {
      icon: "💰",
      title: t("comingSoon.betaBenefits.specialPricing"),
      desc: t("comingSoon.betaBenefits.specialPricingDesc"),
    },
  ];

  const quarters = [
    t("comingSoon.quarters.q1_2025"),
    t("comingSoon.quarters.q3_2025"),
    t("comingSoon.quarters.q1_2026"),
    t("comingSoon.quarters.q3_2026"),
  ];

  const getContactTiming = () => {
    if (timeRemaining.months > 6) {
      return t("comingSoon.thankYouMessage", {
        contactTiming: t("comingSoon.contactTiming.long"),
      });
    }
    return t("comingSoon.thankYouMessage", {
      contactTiming: t("comingSoon.contactTiming.soon"),
    });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated dots background */}
      <div className="fixed inset-0 overflow-hidden">
        {dots.map((pos, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/20 rounded-full"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              animation: `float-dot ${5 + i * 0.5}s linear infinite ${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className={`fixed top-6 left-6 z-50 flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-pointer group ${
          isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="font-medium">{t("comingSoon.backToHome")}</span>
      </button>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-12"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full mb-8 border border-primary-500/30 animate-pulse">
              <Rocket className="w-5 h-5 mr-2" />
              <span className="font-semibold">{t("shipper.comingSoon")}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              WeLoad{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradient-x 3s ease infinite",
                }}
              >
                {t("shipper.title")}
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              {t("comingSoon.description")}
            </p>
          </div>

          {/* Countdown section */}
          <div
            className={`mb-16 transition-all duration-1000 ${
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {isApproximate && (
              <div
                className={`flex items-center justify-center gap-3 mb-8 transition-all duration-1000 delay-200 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <span className="text-amber-300 text-lg">
                  {t("comingSoon.estimatedLaunch", {
                    date: formatTargetDate(),
                  })}
                </span>
                <div className="px-3 py-1 bg-amber-400/20 rounded-full text-sm">
                  {t("comingSoon.approximation")}
                </div>
              </div>
            )}

            {/* Countdown cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {Object.entries(timeRemaining).map(([unit, value], index) => (
                <div
                  key={unit}
                  className={`text-center transition-all duration-1000 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 mb-4 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110">
                      {value}
                    </div>
                    <div className="text-2xl mt-2 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                      {value === 1 ? unit.slice(0, -1) : unit}
                    </div>
                  </div>
                  <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                    {t(`comingSoon.timeRemaining.${unit}`)}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div
              className={`mt-10 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                isInView ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>{t("comingSoon.timeline.today")}</span>
                <span>{t("comingSoon.timeline.target")}</span>
              </div>
              <div
                className="h-2 bg-gray-800 rounded-full overflow-hidden"
                ref={progressBarRef}
              >
                <div
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-1000"
                  style={{ width: `${progressWidth}%` }}
                />
              </div>

              <div className="flex justify-between mt-4 text-xs text-gray-500">
                {quarters.map((quarter, index) => (
                  <div
                    key={quarter}
                    className="text-center transition-all duration-1000"
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <div
                      className={`w-2 h-2 bg-gray-700 rounded-full mx-auto mb-1 transition-all duration-300 ${
                        isInView ? "opacity-100 scale-100" : "opacity-0 scale-0"
                      }`}
                    />
                    <div className={isInView ? "opacity-100" : "opacity-0"}>
                      {quarter}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time remaining description */}
            <div
              className={`mt-12 text-center transition-all duration-1000 delay-600 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-gray-400">
                {timeRemaining.months > 0 ? (
                  <>
                    {t("comingSoon.timeRemainingDescription.part1")}{" "}
                    <span className="text-primary-400 font-semibold">
                      {timeRemaining.months}{" "}
                      {t("comingSoon.timeRemainingDescription.months")}
                    </span>{" "}
                    {t("comingSoon.timeRemainingDescription.part2")}
                    {timeRemaining.weeks > 0 && (
                      <>
                        {" "}
                        {t("comingSoon.timeRemainingDescription.and")}{" "}
                        <span className="text-secondary-400 font-semibold">
                          {timeRemaining.weeks}{" "}
                          {t("comingSoon.timeRemainingDescription.weeks")}
                        </span>
                      </>
                    )}
                    {timeRemaining.days > 0 && (
                      <>
                        {" "}
                        {t("comingSoon.timeRemainingDescription.plus")}{" "}
                        <span className="text-amber-400 font-semibold">
                          {timeRemaining.days}{" "}
                          {t("comingSoon.timeRemainingDescription.days")}
                        </span>
                      </>
                    )}
                  </>
                ) : (
                  <span className="text-green-400 font-semibold">
                    {t("comingSoon.launchingSoon")}
                  </span>
                )}
              </p>
              {isApproximate && (
                <p className="text-sm text-gray-500 mt-2">
                  {t("comingSoon.dateApproximate")}
                </p>
              )}
            </div>
          </div>

          {/* Features grid */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("comingSoon.revolutionaryFeatures")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-primary-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105 active:scale-95 cursor-pointer group ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                    <div className="text-primary-400 transition-all duration-300 group-hover:text-primary-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Early access form */}
          <div
            className={`max-w-2xl mx-auto transition-all duration-1000 delay-800 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-8">
                <Mail className="w-12 h-12 text-primary-400 mr-4 transition-transform duration-300 hover:scale-110" />
                <div>
                  <h3 className="text-2xl font-bold">
                    {t("comingSoon.earlyAccess")}
                  </h3>
                  <p className="text-gray-400">
                    {t("comingSoon.earlyAccessDesc")}
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-8 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110">
                    <Check className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">
                    {t("comingSoon.thankYou")}
                  </h4>
                  <p className="text-gray-300">{getContactTiming()}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">
                        {t("comingSoon.firstName")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 hover:border-gray-600"
                        placeholder={t("comingSoon.placeholderFirstName")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">
                        {t("comingSoon.lastName")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 hover:border-gray-600"
                        placeholder={t("comingSoon.placeholderLastName")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      {t("comingSoon.workEmail")}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 hover:border-gray-600"
                      placeholder={t("comingSoon.placeholderEmail")}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      {t("comingSoon.companyLabel")}
                    </label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 hover:border-gray-600"
                      placeholder={t("comingSoon.placeholderCompany")}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      {t("comingSoon.excitedAbout")}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none resize-none transition-all duration-300 hover:border-gray-600"
                      placeholder={t("comingSoon.placeholderExcitement")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    {t("comingSoon.requestAccess")}
                  </button>
                </form>
              )}

              <div className="text-center mt-8 text-gray-400 text-sm">
                <p>{t("comingSoon.agreeUpdates")}</p>
              </div>
            </div>
          </div>

          {/* Beta program */}
          <div
            className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full mb-6">
              <Clock className="w-5 h-5 mr-2 transition-transform duration-300 hover:scale-110" />
              <span className="font-semibold">
                {t("comingSoon.betaProgram")}
              </span>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t("comingSoon.betaDescription")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-3xl mx-auto">
              {betaBenefits.map((item, index) => (
                <div
                  key={item.title}
                  className={`bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 transition-all duration-500 hover:scale-105 active:scale-95 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${1100 + index * 100}ms` }}
                >
                  <div className="text-2xl mb-3 transition-transform duration-300 hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="font-semibold mb-2 transition-colors duration-300 hover:text-primary-300">
                    {item.title}
                  </div>
                  <div className="text-gray-400 text-sm transition-colors duration-300 hover:text-gray-300">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add animation definitions */}
      <style>{`
        @keyframes float-dot {
          0%, 100% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px);
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
      `}</style>
    </div>
  );
};

export default ComingSoon;
