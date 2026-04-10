import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { ProgressIndicator } from "../components/ProgressIndicator";
import { 
  Phone, 
  FileText, 
  MessageSquare, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight,
  Download,
  Mail
} from "lucide-react";

export function GuidancePage() {
  const steps = [
    {
      number: 1,
      title: "Contact the seller",
      icon: Phone,
      description: "Reach out to the business where you made the purchase. This is usually the quickest way to resolve the issue.",
      details: [
        "Call or visit the store where you bought the product",
        "Explain the problem clearly and calmly",
        "Say what you would like them to do (refund, replacement, or repair)",
        "Be polite but firm about your rights",
      ],
      tip: "Keep notes of who you spoke to and when",
    },
    {
      number: 2,
      title: "Prepare your receipt or evidence",
      icon: FileText,
      description: "Gather all documents and proof related to your purchase. This makes your case stronger.",
      details: [
        "Find your receipt, invoice, or order confirmation",
        "Take clear photos of the faulty product or problem",
        "Save any emails or messages with the seller",
        "Keep bank statements showing the payment",
      ],
      tip: "You may still have rights even without a receipt",
    },
    {
      number: 3,
      title: "Request a refund or replacement",
      icon: MessageSquare,
      description: "Formally ask for your chosen remedy in writing. This creates a record of your request.",
      details: [
        "Write a clear letter or email stating your request",
        "Include purchase details, problem description, and what you want",
        "Give them a reasonable time to respond (usually 7-14 days)",
        "Keep copies of all communication",
      ],
      tip: "Use our complaint template to make this easier",
    },
    {
      number: 4,
      title: "Escalate the complaint if needed",
      icon: AlertTriangle,
      description: "If the business doesn't respond or refuses your request, you have other options available.",
      details: [
        "Contact your state consumer protection agency",
        "File a complaint with the ACCC (Australian Competition & Consumer Commission)",
        "Consider small claims court for larger amounts",
        "Seek free legal advice if needed",
      ],
      tip: "Most issues are resolved before reaching this step",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ProgressIndicator
          currentStep={4}
          totalSteps={4}
          steps={["Select Issue", "Answer Questions", "View Rights", "Take Action"]}
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">What should you do next?</h1>
            <p className="text-xl text-gray-600">
              Follow these steps to resolve your consumer issue
            </p>
          </div>

          {/* Step-by-step Process */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200" />

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === steps.length - 1;
                
                return (
                  <div key={step.number} className="relative">
                    {/* Step number circle */}
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10">
                      {step.number}
                    </div>

                    {/* Step content */}
                    <div className="ml-24 bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-lg text-gray-600">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 space-y-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-base text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-base text-blue-900">
                          <strong>Tip:</strong> {step.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Actions */}
          <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to take action?</h3>
            <p className="text-lg mb-8 text-blue-100">
              Use our complaint template to make your request clear and professional
            </p>
            
            <div className="flex gap-4">
              <Link
                to="/complaint-template"
                className="flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <FileText className="w-5 h-5" />
                Use complaint template
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/help"
                className="flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Get support
              </Link>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Need more help?</h4>
              <p className="text-base text-gray-600 mb-4">
                Contact your state consumer protection office for free assistance
              </p>
              <Link
                to="/help"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                View contact details
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Download this guide</h4>
              <p className="text-base text-gray-600 mb-4">
                Save these steps as a PDF to refer to later
              </p>
              <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                <Download className="mr-2 w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
