import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { ProgressIndicator } from "../components/ProgressIndicator";
import { Package, RefreshCw, AlertCircle, FileText, ShoppingBag, CreditCard, Wifi, Home } from "lucide-react";

export function IssueSelectionPage() {
  const issueCategories = [
    {
      icon: Package,
      title: "Faulty Product",
      description: "The product you bought is broken, damaged, or doesn't work as it should",
      examples: "Examples: Broken appliance, damaged clothing, defective electronics",
      path: "/rights-checker?issue=faulty",
    },
    {
      icon: RefreshCw,
      title: "Refund Issue",
      description: "You're having trouble getting your money back for a purchase or service",
      examples: "Examples: Refused refund, delayed refund, partial refund only",
      path: "/rights-checker?issue=refund",
    },
    {
      icon: AlertCircle,
      title: "Misleading Service",
      description: "A service was not provided as described or didn't match what was promised",
      examples: "Examples: False advertising, hidden fees, service quality issues",
      path: "/rights-checker?issue=misleading",
    },
    {
      icon: FileText,
      title: "Contract Problem",
      description: "Issues with the terms, conditions, or agreements in a contract",
      examples: "Examples: Unfair terms, unclear conditions, contract disputes",
      path: "/rights-checker?issue=contract",
    },
    {
      icon: ShoppingBag,
      title: "Online Purchase Issue",
      description: "Problems with items bought online, delivery issues, or online seller disputes",
      examples: "Examples: Item not received, wrong item delivered, online scam",
      path: "/rights-checker?issue=online",
    },
    {
      icon: CreditCard,
      title: "Payment Dispute",
      description: "Unauthorized charges, incorrect billing, or payment processing problems",
      examples: "Examples: Double charged, incorrect amount, unauthorized transaction",
      path: "/rights-checker?issue=payment",
    },
    {
      icon: Wifi,
      title: "Telecommunications",
      description: "Issues with phone, internet, or other communication service providers",
      examples: "Examples: Poor service, billing errors, contract lock-in",
      path: "/rights-checker?issue=telecom",
    },
    {
      icon: Home,
      title: "Home Services",
      description: "Problems with tradespeople, repairs, renovations, or home maintenance",
      examples: "Examples: Poor workmanship, incomplete work, overcharging",
      path: "/rights-checker?issue=home-service",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ProgressIndicator
          currentStep={1}
          totalSteps={4}
          steps={["Select Issue", "Answer Questions", "View Rights", "Take Action"]}
        />
        
        <div className="mt-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What is your issue?</h1>
          <p className="text-xl text-gray-600 mb-12">
            Select the category that best describes your situation
          </p>

          <div className="grid grid-cols-2 gap-6">
            {issueCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.title}
                  to={category.path}
                  className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-base text-gray-700 mb-3 leading-relaxed">
                        {category.description}
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        {category.examples}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 flex justify-between items-center">
            <Link
              to="/"
              className="text-lg text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Back to home
            </Link>
            <Link
              to="/help"
              className="text-lg text-blue-600 hover:text-blue-700 font-medium"
            >
              Not sure? Get help →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
