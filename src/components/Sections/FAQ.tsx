import { HelpCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const [isInView, setIsInView] = useState(false);
  const [faqsInView, setFaqsInView] = useState(Array(6).fill(false));
  const [ctaInView, setCtaInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: t("faq.questions.freeTrial"),
      answer: t("faq.questions.freeTrialAnswer"),
    },
    {
      question: t("faq.questions.switchPlans"),
      answer: t("faq.questions.switchPlansAnswer"),
    },
    {
      question: t("faq.questions.paymentMethods"),
      answer: t("faq.questions.paymentMethodsAnswer"),
    },
    {
      question: t("faq.questions.setupFee"),
      answer: t("faq.questions.setupFeeAnswer"),
    },
    {
      question: t("faq.questions.nonProfitDiscounts"),
      answer: t("faq.questions.nonProfitDiscountsAnswer"),
    },
    {
      question: t("faq.questions.cancellationPolicy"),
      answer: t("faq.questions.cancellationPolicyAnswer"),
    },
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

  // Intersection Observer for FAQs
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && faqsRef.current) {
            const timeouts = faqs.map((_, index) => {
              return setTimeout(() => {
                setFaqsInView((prev) => {
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

    if (faqsRef.current) {
      observer.observe(faqsRef.current);
    }

    return () => {
      if (faqsRef.current) {
        observer.unobserve(faqsRef.current);
      }
    };
  }, [faqs]);

  // Intersection Observer for CTA
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaInView(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-64 -top-64 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-secondary-100/20 rounded-full blur-3xl"
          style={{
            animation: "rotate 120s linear infinite",
          }}
        />
        <div
          className="absolute -right-64 -bottom-64 w-96 h-96 bg-gradient-to-br from-secondary-100/10 to-emerald-100/10 rounded-full blur-3xl"
          style={{
            animation: "float 100s ease-in-out infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full mb-4 md:mb-6 border border-primary-100">
            <HelpCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">{t("faq.faqHint")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            {t("faq.title")}{" "}
            <span className="text-primary-600">{t("faq.highlightedWord")}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* FAQ Items */}
        <div ref={faqsRef} className="max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 cursor-pointer group hover:scale-105 active:scale-95 ${
                  faqsInView[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                  <HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-gray-400 flex-shrink-0 transition-all duration-300 group-hover:text-primary-500 group-hover:scale-110" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support CTA */}
        <div
          ref={ctaRef}
          className={`text-center mt-12 md:mt-20 transition-all duration-700 ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl md:rounded-3xl p-6 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              {t("faq.stillHaveQuestions")}
            </h3>
            <p className="text-gray-600 mb-6 md:mb-10 max-w-2xl mx-auto text-sm md:text-base">
              {t("faq.stillHaveQuestionsDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold rounded-lg md:rounded-xl hover:shadow-lg md:hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-sm md:text-base"
              >
                {t("faq.contactSupport")}
              </a>
              <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 font-semibold rounded-lg md:rounded-xl border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-sm md:text-base">
                {t("faq.visitHelpCenter")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
