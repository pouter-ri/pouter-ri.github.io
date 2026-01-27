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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
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

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">Weload</div>
                <div className="text-gray-400">Solutions</div>
              </div>
            </div>

            <p className="text-gray-400 mb-8 max-w-md">{t("footer.tagline")}</p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">
                {t("footer.newsletter.title")}
              </h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.newsletter.emailPlaceholder")}
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-900 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  {t("footer.newsletter.subscribe")}
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {t("footer.social.title")}
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {(section.links as string[]).map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {t("footer.bottomLinks.cookieSettings")}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {t("footer.bottomLinks.doNotSellMyInfo")}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {t("footer.bottomLinks.sitemap")}
            </a>
          </div>
        </div>

        {/* App Badges */}
        <div className="flex justify-center gap-6 mt-12">
          <div className="bg-gray-800 rounded-xl px-6 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-900 rounded" />
            </div>
            <div>
              <div className="text-xs text-gray-400">
                {t("footer.appStores.appStore.downloadOn")}
              </div>
              <div className="font-bold">
                {t("footer.appStores.appStore.appStore")}
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl px-6 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-900 rounded" />
            </div>
            <div>
              <div className="text-xs text-gray-400">
                {t("footer.appStores.googlePlay.getItOn")}
              </div>
              <div className="font-bold">
                {t("footer.appStores.googlePlay.googlePlay")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
