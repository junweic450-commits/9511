import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { 
  HelpCircle, 
  Phone, 
  Mail, 
  ExternalLink,
  ChevronDown,
  MessageCircle,
  FileText,
  Scale,
  Building
} from "lucide-react";
import { useState } from "react";

export function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
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

  const supportOptions = [
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Still unsure?</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions or get in touch for support
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get professional support</h2>
            <div className="grid gap-6">
              {supportOptions.map((option) => {
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

          {/* Quick Links */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">Quick links</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/issue-selection"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-6 transition-all backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-2">Check your rights</h3>
                <p className="text-blue-100">Start the guided process to understand your situation</p>
              </Link>
              <Link
                to="/complaint-template"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-6 transition-all backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-2">Complaint template</h3>
                <p className="text-blue-100">Use our ready-made letter template</p>
              </Link>
              <Link
                to="/guidance"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-6 transition-all backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-2">Step-by-step guide</h3>
                <p className="text-blue-100">See what to do in the right order</p>
              </Link>
              <Link
                to="/"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-6 transition-all backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-2">Back to home</h3>
                <p className="text-blue-100">Return to the main page</p>
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
            <div className="flex items-start gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
