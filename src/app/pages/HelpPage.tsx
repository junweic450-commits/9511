import { useMemo, useState } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { VoiceToolbar } from "../components/VoiceToolbar";
import { useSpeechSynthesis } from "../hooks/useSpeechSynthesis";
import {
  HelpCircle,
  Phone,
  Mail,
  ExternalLink,
  ChevronDown,
  MessageCircle,
  FileText,
  Scale,
  Building,
  ArrowRight,
} from "lucide-react";

const HELP_FAQS = [
    {
      question: "What if I don't have a receipt?",
      answer: "You may still have rights even without a receipt. Other proof of purchase can include bank or credit card statements, email confirmations, warranty cards, or witness testimony. Australian Consumer Law doesn't require a receipt for your rights to apply.",
    },
    {
      question: "How long do I have to make a complaint?",
      answer: "There's no specific time limit, but you should act as soon as you notice the problem. For major faults, you have a 'reasonable time' which depends on the product type. Expensive items may have longer timeframes than cheaper ones.",
    },
    {
      question: "Can I get a refund if I changed my mind?",
      answer: "Generally, no. Businesses don't have to give refunds just because you changed your mind, unless they have a voluntary returns policy. However, if the product is faulty, doesn't match the description, or isn't fit for purpose, you have rights to a remedy.",
    },
    {
      question: "What is a 'major' versus 'minor' problem?",
      answer: "A major problem is when a product has a significant fault, is substantially different from the description, is unsafe, or would not have been bought if the fault was known. For major problems, you can choose a refund or replacement. Minor problems may only entitle you to a repair.",
    },
    {
      question: "Do warranties affect my consumer rights?",
      answer: "No. Your rights under Australian Consumer Law exist regardless of any warranty. Warranties are in addition to, not instead of, your consumer guarantees. Even if a warranty has expired, you may still have rights under consumer law.",
    },
    {
      question: "What if the business refuses my request?",
      answer: "If the business refuses, you can escalate your complaint to your state or territory consumer protection agency, file a complaint with the ACCC, or take the matter to your local small claims tribunal. Free legal advice services are also available.",
    },
    {
      question: "Can I return sale or discounted items?",
      answer: "Yes, if they're faulty. Your consumer rights apply equally to sale items and discounted products. A business can't avoid its obligations by claiming an item was on sale or reduced in price.",
    },
    {
      question: "Who do I contact - the retailer or manufacturer?",
      answer: "Your consumer rights are against the retailer (where you bought the product), not the manufacturer. You should always contact the retailer first. The retailer then deals with the manufacturer if needed.",
    },
  ];

const HELP_SUPPORT_OPTIONS = [
    {
      title: "Consumer Affairs Victoria",
      icon: Building,
      description: "Free consumer advice and complaint handling",
      contact: "1300 558 181",
      website: "consumer.vic.gov.au",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Australian Competition & Consumer Commission (ACCC)",
      icon: Scale,
      description: "National consumer protection authority",
      contact: "1300 302 502",
      website: "accc.gov.au",
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Community Legal Centres",
      icon: FileText,
      description: "Free legal advice for consumer issues",
      contact: "Find your local centre",
      website: "fclc.org.au",
      color: "bg-purple-50 text-purple-600",
    },
  ];

export function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { speak, stop, isSpeaking } = useSpeechSynthesis();

  const introSpeech = useMemo(
    () =>
      "Help page. Still unsure? Find answers to common questions or get in touch for support. " +
      "Below you will find frequently asked questions, professional contacts, quick links, and a short note about free phone help.",
    [],
  );

  const faqSpeech = useMemo(
    () =>
      "Frequently asked questions. " +
      HELP_FAQS.map((f) => `Question: ${f.question} Answer: ${f.answer}`).join(" "),
    [],
  );

  const supportSpeech = useMemo(
    () =>
      "Get professional support. " +
      HELP_SUPPORT_OPTIONS.map(
        (o) =>
          `${o.title}. ${o.description}. Phone or contact: ${o.contact}. Website: ${o.website}.`,
      ).join(" "),
    [],
  );

  const quickLinksSpeech = useMemo(
    () =>
      "Quick links. Large buttons below. Check your rights: start the guided process to understand your situation. " +
      "Complaint template: use our ready-made letter. Step-by-step guide: see what to do in the right order. " +
      "Back to home: return to the main page. Tap a card to open that page.",
    [],
  );

  const calloutSpeech = useMemo(
    () =>
      "Need to speak with someone? The contact numbers above connect you with trained advisors who can help with your specific situation. " +
      "These services are free and confidential.",
    [],
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6 mb-4">
              <div className="text-center sm:text-left flex-1">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Still unsure?
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Find answers to common questions or get in touch for support
                </p>
              </div>
              <VoiceToolbar
                speak={speak}
                stop={stop}
                isSpeaking={isSpeaking}
                speechText={introSpeech}
                listenLabel="Listen to intro"
                variant="dark"
                className="shrink-0 justify-center sm:justify-end"
              />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-8">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-blue-600 shrink-0" />
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently asked questions</h2>
              </div>
              <VoiceToolbar
                speak={speak}
                stop={stop}
                isSpeaking={isSpeaking}
                speechText={faqSpeech}
                listenLabel="Listen to FAQs"
                variant="dark"
                className="shrink-0"
              />
            </div>

            <div className="space-y-4">
              {HELP_FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xl font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Support Options */}
          <div className="mb-16">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get professional support</h2>
              <VoiceToolbar
                speak={speak}
                stop={stop}
                isSpeaking={isSpeaking}
                speechText={supportSpeech}
                listenLabel="Listen to contacts"
                variant="dark"
                className="shrink-0"
              />
            </div>
            <div className="grid gap-6">
              {HELP_SUPPORT_OPTIONS.map((option) => {
                const Icon = option.icon;
                return (
                  <div
                    key={option.title}
                    className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-lg ${option.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {option.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-4">
                          {option.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-base">
                            <Phone className="w-5 h-5 text-gray-500" />
                            <span className="font-semibold text-gray-900">{option.contact}</span>
                          </div>
                          <a
                            href={`https://${option.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                          >
                            <ExternalLink className="w-5 h-5" />
                            {option.website}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links — high contrast cards for readability */}
          <section
            className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 sm:p-10 border-4 border-blue-800/40 shadow-xl"
            aria-labelledby="help-quick-links-heading"
          >
            <h2
              id="help-quick-links-heading"
              className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight"
            >
              Quick links
            </h2>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between mb-8">
              <p className="text-lg sm:text-xl text-blue-100 font-medium max-w-3xl leading-relaxed flex-1">
                Large buttons below — tap to open each page.
              </p>
              <VoiceToolbar
                speak={speak}
                stop={stop}
                isSpeaking={isSpeaking}
                speechText={quickLinksSpeech}
                listenLabel="Listen to quick links"
                variant="light"
                className="shrink-0"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <Link
                to="/issue-selection"
                className="group flex flex-col justify-between min-h-[140px] rounded-xl bg-white p-7 sm:p-8 border-4 border-white shadow-lg hover:shadow-xl hover:border-amber-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 focus-visible:ring-offset-4 focus-visible:ring-offset-blue-800 transition-all"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    Check your rights
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                    Start the guided process to understand your situation
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-xl font-bold text-blue-700 group-hover:text-blue-900">
                  Open page
                  <ArrowRight className="w-7 h-7 shrink-0" aria-hidden />
                </span>
              </Link>
              <Link
                to="/complaint-template"
                className="group flex flex-col justify-between min-h-[140px] rounded-xl bg-white p-7 sm:p-8 border-4 border-white shadow-lg hover:shadow-xl hover:border-amber-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 focus-visible:ring-offset-4 focus-visible:ring-offset-blue-800 transition-all"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    Complaint template
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                    Use our ready-made letter template
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-xl font-bold text-blue-700 group-hover:text-blue-900">
                  Open page
                  <ArrowRight className="w-7 h-7 shrink-0" aria-hidden />
                </span>
              </Link>
              <Link
                to="/guidance"
                className="group flex flex-col justify-between min-h-[140px] rounded-xl bg-white p-7 sm:p-8 border-4 border-white shadow-lg hover:shadow-xl hover:border-amber-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 focus-visible:ring-offset-4 focus-visible:ring-offset-blue-800 transition-all"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    Step-by-step guide
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                    See what to do in the right order
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-xl font-bold text-blue-700 group-hover:text-blue-900">
                  Open page
                  <ArrowRight className="w-7 h-7 shrink-0" aria-hidden />
                </span>
              </Link>
              <Link
                to="/"
                className="group flex flex-col justify-between min-h-[140px] rounded-xl bg-white p-7 sm:p-8 border-4 border-white shadow-lg hover:shadow-xl hover:border-amber-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 focus-visible:ring-offset-4 focus-visible:ring-offset-blue-800 transition-all"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                    Back to home
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                    Return to the main page
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-xl font-bold text-blue-700 group-hover:text-blue-900">
                  Open page
                  <ArrowRight className="w-7 h-7 shrink-0" aria-hidden />
                </span>
              </Link>
            </div>
          </section>

          {/* Additional Info */}
          <div className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-4 flex-1">
                <MessageCircle className="w-6 h-6 text-yellow-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Need to speak with someone?
                  </h3>
                  <p className="text-base text-gray-700">
                    The contact numbers above connect you with trained advisors who can help with your specific situation. 
                    These services are free and confidential. Don't hesitate to reach out if you need assistance.
                  </p>
                </div>
              </div>
              <VoiceToolbar
                speak={speak}
                stop={stop}
                isSpeaking={isSpeaking}
                speechText={calloutSpeech}
                listenLabel="Listen to this note"
                variant="dark"
                className="shrink-0 self-start"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
