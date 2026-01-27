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
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  const [isInView, setIsInView] = useState(false);
  const [featuresInView, setFeaturesInView] = useState(Array(6).fill(false));
  const [statsInView, setStatsInView] = useState(false);
  const [platformFeaturesInView, setPlatformFeaturesInView] = useState(
    Array(4).fill(false),
  );
  const [integrationsInView, setIntegrationsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const integrationsRef = useRef<HTMLDivElement>(null);

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

  // Intersection Observer for features grid
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && featuresRef.current) {
            const timeouts = features.map((_, index) => {
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
  }, [features]);

  // Intersection Observer for stats section
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

  // Intersection Observer for platform features
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && platformRef.current) {
            const timeouts = platformFeatures.map((_, index) => {
              return setTimeout(() => {
                setPlatformFeaturesInView((prev) => {
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

    if (platformRef.current) {
      observer.observe(platformRef.current);
    }

    return () => {
      if (platformRef.current) {
        observer.unobserve(platformRef.current);
      }
    };
  }, [platformFeatures]);

  // Intersection Observer for integrations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntegrationsInView(true);
        }
      },
      { threshold: 0.2 },
    );

    if (integrationsRef.current) {
      observer.observe(integrationsRef.current);
    }

    return () => {
      if (integrationsRef.current) {
        observer.unobserve(integrationsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
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
        </div>

        <div
          ref={featuresRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:scale-105 active:scale-95 ${
                featuresInView[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 text-white transition-transform duration-300 hover:scale-110`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-primary-600">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div className="h-1 w-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Platform Stats */}
        <div
          ref={statsRef}
          className={`bg-gradient-to-r from-primary-600 to-secondary-500 rounded-3xl p-12 text-white transition-all duration-700 ${
            statsInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              {t("features.platformPerformance")}
            </h3>
            <p className="text-xl opacity-90">
              {t("features.platformPerformanceDesc")}
            </p>
          </div>

          <div
            ref={platformRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {platformFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`text-center transition-all duration-500 ${
                  platformFeaturesInView[index]
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                  <div className="text-2xl transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 transition-transform duration-300 hover:scale-110">
                  {feature.value}
                </div>
                <div className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-primary-200">
                  {feature.title}
                </div>
                <div className="text-white/80">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Section */}
        <div
          ref={integrationsRef}
          className={`mt-20 text-center transition-all duration-700 ${
            integrationsInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-primary-600">
            {t("features.integration")}
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            {t("features.integrationsDesc")}
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {integrations.map((integration, index) => (
              <div
                key={integration}
                className={`px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:border-primary-300 transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95 ${
                  integrationsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
