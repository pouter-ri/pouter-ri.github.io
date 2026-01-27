import { motion } from "framer-motion";
import {
  Rocket,
  Clock,
  Mail,
  Bell,
  Calendar,
  Target,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
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
    setTimeRemaining(calculateTimeRemaining());

    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 60000);

    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    const monthsAway = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    setIsApproximate(monthsAway > 6);
  }, [targetDate]);

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-50 flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/20 cursor-pointer group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">{t("comingSoon.backToHome")}</span>
      </motion.button>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full mb-8 border border-primary-500/30">
              <Rocket className="w-5 h-5 mr-2 animate-pulse" />
              <span className="font-semibold">{t("shipper.comingSoon")}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              WeLoad{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                {t("shipper.title")}
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              {t("comingSoon.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            {isApproximate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-3 mb-8"
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
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {Object.entries(timeRemaining).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay:
                      0.1 * (unit === "months" ? 0 : unit === "weeks" ? 1 : 2),
                  }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 mb-4 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                      {value}
                    </div>
                    <div className="text-2xl mt-2 text-gray-400">
                      {value === 1 ? unit.slice(0, -1) : unit}
                    </div>
                  </div>
                  <div className="text-gray-400 font-medium uppercase tracking-wider text-sm">
                    {t(`comingSoon.timeRemaining.${unit}`)}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 max-w-2xl mx-auto"
            >
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>{t("comingSoon.timeline.today")}</span>
                <span>{t("comingSoon.timeline.target")}</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${Math.min(100, timeRemaining.months > 24 ? 0 : ((24 - timeRemaining.months) / 24) * 100)}%`,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>

              <div className="flex justify-between mt-4 text-xs text-gray-500">
                {quarters.map((quarter) => (
                  <div key={quarter} className="text-center">
                    <div className="w-2 h-2 bg-gray-700 rounded-full mx-auto mb-1" />
                    {quarter}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("comingSoon.revolutionaryFeatures")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-primary-500/50 transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-primary-400 group-hover:text-primary-300 transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-8">
                <Mail className="w-12 h-12 text-primary-400 mr-4" />
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
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">
                    {t("comingSoon.thankYou")}
                  </h4>
                  <p className="text-gray-300">{getContactTiming()}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">
                        {t("comingSoon.firstName")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all hover:border-gray-600"
                        placeholder={t("comingSoon.placeholderFirstName")}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">
                        {t("comingSoon.lastName")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all hover:border-gray-600"
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
                      className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all hover:border-gray-600"
                      placeholder={t("comingSoon.placeholderEmail")}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      {t("comingSoon.companyLabel")}
                    </label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all hover:border-gray-600"
                      placeholder={t("comingSoon.placeholderCompany")}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      {t("comingSoon.excitedAbout")}
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none resize-none transition-all hover:border-gray-600"
                      placeholder={t("comingSoon.placeholderExcitement")}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all cursor-pointer"
                  >
                    {t("comingSoon.requestAccess")}
                  </motion.button>
                </form>
              )}

              <div className="text-center mt-8 text-gray-400 text-sm">
                <p>{t("comingSoon.agreeUpdates")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full mb-6">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-semibold">
                {t("comingSoon.betaProgram")}
              </span>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t("comingSoon.betaDescription")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-3xl mx-auto">
              {betaBenefits.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="font-semibold mb-2">{item.title}</div>
                  <div className="text-gray-400 text-sm">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Check = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default ComingSoon;
