import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Search, Package, RefreshCw, AlertCircle, FileText, CheckCircle, MessageSquare, ArrowRight } from "lucide-react";

export function HomePage() {
  const quickAccessCategories = [
    {
      icon: Package,
      title: "Faulty Product",
      description: "Product doesn't work or is damaged",
      path: "/issue-selection?category=faulty",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: RefreshCw,
      title: "Refund Issue",
      description: "Problems getting money back",
      path: "/issue-selection?category=refund",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: AlertCircle,
      title: "Misleading Service",
      description: "Service not as described or promised",
      path: "/issue-selection?category=misleading",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: FileText,
      title: "Contract Problem",
      description: "Issues with agreements or terms",
      path: "/issue-selection?category=contract",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const howItWorksSteps = [
    {
      number: 1,
      icon: CheckCircle,
      title: "Choose your issue",
      description: "Select the type of problem you're facing",
    },
    {
      number: 2,
      icon: MessageSquare,
      title: "Answer simple questions",
      description: "We'll ask a few easy questions about your situation",
    },
    {
      number: 3,
      icon: FileText,
      title: "Get your rights and next steps",
      description: "Receive clear guidance on what you can do",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Understand your consumer rights clearly
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Get simple, straightforward information about your rights under Australian Consumer Law
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search your issue, e.g. faulty product or refund"
                  className="w-full pl-16 pr-6 py-5 text-lg rounded-xl border-2 border-transparent focus:border-blue-300 focus:outline-none shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Categories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Common issues</h2>
        <div className="grid grid-cols-4 gap-6">
          {quickAccessCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.title}
                to={category.path}
                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group"
              >
                <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mb-5`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-5 flex items-center text-blue-600 font-medium">
                  Learn more
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How it works</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Three simple steps to understand your rights
          </p>
          
          <div className="grid grid-cols-3 gap-12">
            {howItWorksSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-6">
                    <Icon className="w-10 h-10" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/issue-selection"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get started now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-base text-gray-600">
          <p>This tool provides general information only. For specific legal advice, consult a professional.</p>
        </div>
      </div>
    </div>
  );
}
