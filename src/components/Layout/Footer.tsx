import {
  Truck,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Subscribed:", email);
      setEmail("");
      setIsSubmitting(false);
      setSubscribeSuccess(true);
      setShowSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setTimeout(() => {
          setSubscribeSuccess(false);
        }, 300);
      }, 3000);
    }, 500);
  };

  // Get footer sections with new structure
  const sections = [
    {
      title: t("footer.sections.product.title"),
      links: t("footer.sections.product.links", { returnObjects: true }),
    },
    {
      title: t("footer.sections.company.title"),
      links: t("footer.sections.company.links", { returnObjects: true }),
    },
    {
      title: t("footer.sections.resources.title"),
      links: t("footer.sections.resources.links", { returnObjects: true }),
    },
    {
      title: t("footer.sections.legal.title"),
      links: t("footer.sections.legal.links", { returnObjects: true }),
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      label: t("footer.social.platforms.facebook"),
      href: "#",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: t("footer.social.platforms.twitter"),
      href: "#",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: t("footer.social.platforms.linkedin"),
      href: "#",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: t("footer.social.platforms.instagram"),
      href: "#",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      label: t("footer.social.platforms.youtube"),
      href: "#",
    },
  ];

  const appStores = [
    {
      store: "appStore",
      icon: (
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
          <div className="w-6 h-6 bg-gray-900 rounded" />
        </div>
      ),
      downloadText: t("footer.appStores.appStore.downloadOn"),
      storeName: t("footer.appStores.appStore.appStore"),
    },
    {
      store: "googlePlay",
      icon: (
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
          <div className="w-6 h-6 bg-gray-900 rounded" />
        </div>
      ),
      downloadText: t("footer.appStores.googlePlay.getItOn"),
      storeName: t("footer.appStores.googlePlay.googlePlay"),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div>
            <div className="flex items-center space-x-3 mb-8 transform transition-all duration-300 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-lg">
                <Truck className="w-7 h-7 text-white transform transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="transform transition-all duration-300 hover:translate-x-1">
                <div className="text-2xl font-bold tracking-tight">Weload</div>
                <div className="text-gray-400 font-medium">Solutions</div>
              </div>
            </div>

            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              {t("footer.tagline")}
            </p>

            {/* Newsletter Section */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">
                {t("footer.newsletter.title")}
              </h4>

              <div
                className={`mb-4 transition-all duration-300 overflow-hidden ${
                  showSuccess ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className={`p-3 bg-green-900/30 border border-green-700 rounded-lg text-green-300 text-sm transform transition-all duration-300 ${
                    subscribeSuccess
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  }`}
                >
                  {t("footer.newsletter.successMessage")}
                </div>
              </div>

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-2"
              >
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("footer.newsletter.emailPlaceholder")}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-900 outline-none transition-all duration-300"
                    required
                    disabled={isSubmitting}
                  />
                  {isSubmitting && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-w-[120px] ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:opacity-90 hover:shadow-lg hover:scale-[1.02] active:scale-95"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {t("footer.newsletter.subscribing")}
                    </>
                  ) : (
                    t("footer.newsletter.subscribe")
                  )}
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {t("footer.social.title")}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-300 transform group relative"
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sections.map((section) => (
              <div
                key={section.title}
                className="transform transition-all duration-300 hover:translate-y-[-2px]"
              >
                <h4 className="text-lg font-semibold mb-6 relative inline-block group">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></div>
                </h4>
                <ul className="space-y-3">
                  {(section.links as string[]).map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                      >
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          →
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm transform transition-all duration-300 hover:text-gray-300">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            {["cookieSettings", "doNotSellMyInfo", "sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:scale-105 transform"
              >
                {t(`footer.bottomLinks.${link}`)}
              </a>
            ))}
          </div>
        </div>

        {/* App Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
          {appStores.map((app) => (
            <div
              key={app.store}
              className="bg-gray-800 rounded-xl px-6 py-3 flex items-center gap-3 transform transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg cursor-pointer group"
            >
              {app.icon}
              <div className="transform transition-all duration-300 group-hover:translate-x-1">
                <div className="text-xs text-gray-400">{app.downloadText}</div>
                <div className="font-bold tracking-wide">{app.storeName}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
          >
            <span className="transform transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
            <span>{t("footer.backToTop")}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
