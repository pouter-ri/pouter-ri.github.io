import { useState, useEffect, useRef } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuHeight, setMobileMenuHeight] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Handle slide-in animation on mount
  useEffect(() => {
    setIsScrolled(true);
    return () => setIsScrolled(false);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Handle mobile menu animation
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Calculate mobile menu height
      if (mobileMenuRef.current) {
        const height = mobileMenuRef.current.scrollHeight;
        setMobileMenuHeight(height);
      }
    } else {
      document.body.style.overflow = "unset";
      setMobileMenuHeight(0);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full glass z-50 border-b border-white/20 shadow-lg transition-all duration-300 transform ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      }`}
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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium transition-colors group cursor-pointer relative"
              >
                <span>{t("nav.products.title")}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-500 transition-all duration-300 group-hover:w-full"></div>
              </button>

              <div
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50 transition-all duration-200 origin-top ${
                  productsOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
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
              </div>
            </div>

            {navItems.map((item) =>
              item.mainBtn ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-secondary-500
                    text-white font-semibold rounded-xl shadow-md cursor-pointer
                    flex items-center space-x-2 relative group
                    transition-all duration-300 transform
                    hover:scale-105 hover:shadow-xl
                    active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{item.label}</span>
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
        <div
          ref={mobileMenuRef}
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen
              ? "mt-4 border-t border-gray-100 opacity-100"
              : "mt-0 border-t-0 pt-0 opacity-0"
          }`}
          style={{
            maxHeight: isOpen ? `${mobileMenuHeight}px` : "0px",
          }}
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
                <button
                  key={item.label}
                  className="w-42 mt-4 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2 active:scale-95"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
