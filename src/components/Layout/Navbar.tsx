import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
import {
  Menu,
  X,
  ChevronDown,
  Truck,
  Package,
  MessageCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../UI/LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const products = [
    {
      icon: <Truck className="w-4 h-4" />,
      label: t("nav.products.dropdown.carrier.label"),
      href: t("nav.products.dropdown.carrier.href"),
      description: t("nav.products.dropdown.carrier.description"),
    },
    {
      icon: <Package className="w-4 h-4" />,
      label: t("nav.products.dropdown.shipper.label"),
      href: t("nav.products.dropdown.shipper.href"),
      description: t("nav.products.dropdown.shipper.description"),
    },
  ];

  const navItems = [
    { label: t("nav.menu.features"), href: "#features", mainBtn: false },
    {
      label: t("nav.menu.testimonials"),
      href: "#testimonials",
      mainBtn: false,
    },
    { label: t("nav.menu.pricing"), href: "#pricing", mainBtn: false },
    { label: t("nav.menu.faq"), href: "#faq", mainBtn: false },
    { label: t("nav.buttons.contact"), href: "#contact", mainBtn: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full glass z-50 border-b border-white/20 shadow-lg"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="Weload Logo"
                className="h-7 w-auto transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium transition-colors group cursor-pointer"
              >
                <span>{t("nav.products.title")}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-500 transition-all duration-300 group-hover:w-full"></div>
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50"
                  >
                    {products.map((product) => (
                      <a
                        key={product.label}
                        href={product.href}
                        className="flex items-start space-x-3 px-4 py-3 hover:bg-primary-50 transition-colors group cursor-pointer"
                        onClick={() => setProductsOpen(false)}
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-100 transition-all">
                          <div className="text-primary-600">{product.icon}</div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {product.label}
                          </div>
                          <div className="text-sm text-gray-500">
                            {product.description}
                          </div>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.map((item) =>
              item.mainBtn ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all shadow-md cursor-pointer flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{item.label}</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-500 transition-all duration-300 group-hover:w-full"></div>
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group cursor-pointer"
                >
                  {item.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-500 transition-all duration-300 group-hover:w-full"></div>
                </a>
              ),
            )}

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 border-t border-gray-100 pt-4"
            >
              <div className="space-y-1">
                <div className="px-3 py-2 font-medium text-gray-500">
                  {t("nav.products.title")}
                </div>
                {products.map((product) => (
                  <a
                    key={product.label}
                    href={product.href}
                    className="flex items-center space-x-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg flex items-center justify-center">
                      <div className="text-primary-600">{product.icon}</div>
                    </div>
                    <span className="font-medium">{product.label}</span>
                  </a>
                ))}

                {navItems.map((item) =>
                  item.mainBtn ? (
                    <motion.button
                      key={item.label}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{item.label}</span>
                    </motion.button>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-3 py-3 rounded-lg hover:bg-gray-50 font-medium transition-colors cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ),
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
