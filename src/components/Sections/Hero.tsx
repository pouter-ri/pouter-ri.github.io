import { motion } from "framer-motion";
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
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, Torus } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#61A40E" intensity={0.8} />
          <pointLight
            position={[-10, -10, 10]}
            color="#0d9488"
            intensity={0.6}
          />

          <Float speed={2} rotationIntensity={1}>
            <Sphere args={[1, 32, 32]} position={[-3, 1, -5]}>
              <meshStandardMaterial
                color="#61A40E"
                opacity={0.15}
                transparent
              />
            </Sphere>
          </Float>

          <Float speed={3} rotationIntensity={2}>
            <Torus args={[1.5, 0.4, 16, 100]} position={[3, -1, -7]}>
              <meshStandardMaterial
                color="#0d9488"
                opacity={0.15}
                transparent
              />
            </Torus>
          </Float>

          <Float speed={1.5} rotationIntensity={1.5}>
            <Sphere args={[0.8, 32, 32]} position={[0, -2, -4]}>
              <meshStandardMaterial color="#f59e0b" opacity={0.1} transparent />
            </Sphere>
          </Float>

          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/20" />

      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Startup Info Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex flex-wrap items-center gap-2 px-2 py-3 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 rounded-xl mb-6 border border-primary-200 group hover:shadow-md transition-all"
            >
              <div className="flex items-center">
                <Rocket className="w-4 h-4 mr-2" />
                <span className="text-sm font-bold">
                  {t("hero.startupTagline")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-1 px-2 py-1 bg-white/50 rounded-lg text-xs font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-primary-600">{feature.icon}</div>
                    <span className="text-[10px]">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {t("hero.title")}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 animate-gradient-bg">
                {t("hero.highlightedTitle")}
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              {t("hero.description")}
            </p>

            {/* Enhanced Stats Preview */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-600" />
                <span className="text-lg font-semibold text-gray-900">
                  {t("hero.marketFocus")}
                </span>
              </div>
              <div className="h-4 w-0.5 bg-gray-300" />
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-secondary-600" />
                <span className="text-lg font-semibold text-gray-900">
                  {t("hero.expansionPlans")}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(97, 164, 14, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCarrierClick}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden"
              >
                <Truck className="w-5 h-5" />
                <span>{t("hero.carrierApp")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(97, 164, 14, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShipperClick}
                className="px-8 py-4 bg-gradient-to-r from-secondary-500 to-primary-500 text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden"
              >
                <Target className="w-5 h-5" />
                <span>{t("hero.shipperApp")}</span>
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDemoClick}
                className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 flex items-center justify-center gap-3 hover:border-primary-300 hover:shadow-lg transition-all group cursor-pointer"
              >
                <Play className="w-5 h-5" />
                <span>{t("hero.watchDemo")}</span>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-200 transition-all" />
              </motion.button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100"
                >
                  <div className="flex items-center justify-center mb-2">
                    <div
                      className={`p-2 rounded-lg ${stat.color.replace("text-", "bg-")}/10`}
                    >
                      <div className={stat.color}>{stat.icon}</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute -inset-24 bg-gradient-to-r from-primary-100/20 via-transparent to-secondary-100/20 animate-gradient-bg" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg shadow-lg flex items-center justify-center">
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
                  <div className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                    {t("hero.mockDashboard.live")}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {mockStats.map((stat, index) => (
                    <motion.div
                      key={stat}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-xl p-4 shadow border border-gray-100 hover:border-primary-200 transition-all cursor-pointer"
                    >
                      <div className="text-xs text-gray-500 mb-2">{stat}</div>
                      <div className="text-lg font-bold text-gray-900">
                        {index === 0 && "$12,450"}
                        {index === 1 && "47"}
                        {index === 2 && "15,230"}
                        {index === 3 && "4.8★"}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-100">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm font-semibold text-gray-900">
                      {t("hero.mockDashboard.activeLoads")}
                    </div>
                    <div className="text-xs text-gray-500">
                      {t("hero.mockDashboard.realTime")}
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
                        <div className="w-3 h-3 bg-primary-600 rounded-full" />
                        <div className="text-xs mt-1 font-medium">Toronto</div>
                      </div>
                      <div className="absolute bottom-1/4 right-1/4">
                        <div className="w-3 h-3 bg-secondary-600 rounded-full" />
                        <div className="text-xs mt-1 font-medium">Montreal</div>
                      </div>

                      {/* Moving trucks */}
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute"
                          animate={{
                            x: [
                              `${Math.random() * 40 + 20}%`,
                              `${Math.random() * 40 + 40}%`,
                            ],
                            y: [
                              `${Math.random() * 40 + 20}%`,
                              `${Math.random() * 40 + 30}%`,
                            ],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: Math.random() * 5 + 8,
                            ease: "linear",
                          }}
                        >
                          <Truck className="w-4 h-4 text-primary-600" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
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
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-10 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-primary-100 hover:shadow-3xl transition-all cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs font-bold text-white">CA</span>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-secondary-100 hover:shadow-3xl transition-all cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs font-bold text-white">TN</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
