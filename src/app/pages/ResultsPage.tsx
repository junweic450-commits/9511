import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { ProgressIndicator } from "../components/ProgressIndicator";
import { CheckCircle, Info, ArrowRight, FileText, HelpCircle } from "lucide-react";

export function ResultsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ProgressIndicator
          currentStep={3}
          totalSteps={4}
          steps={["Select Issue", "Answer Questions", "View Rights", "Take Action"]}
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Your likely rights</h1>

          {/* Main Result Card */}
          <div className="bg-white rounded-xl p-10 shadow-lg border-2 border-green-200 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-9 h-9 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="inline-block px-4 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-4">
                  Consumer Guarantee Applies
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  You may be entitled to a refund or replacement
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Based on your answers, Australian Consumer Law likely protects you in this situation. 
                  The seller has responsibilities to provide goods that are fit for purpose and match the description given.
                </p>
              </div>
            </div>
          </div>

          {/* Why This Applies */}
          <div className="bg-white rounded-xl p-10 shadow-lg border-2 border-gray-200 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Info className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-bold text-gray-900">Why this applies</h3>
            </div>
            
            <div className="pl-11 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                <p className="text-lg text-gray-700">
                  <strong>Recent purchase:</strong> The problem happened within a reasonable time after purchase, 
                  which strengthens your rights to a remedy.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                <p className="text-lg text-gray-700">
                  <strong>Product is faulty:</strong> The product is not working as it should, which means it fails 
                  to meet the consumer guarantee of acceptable quality.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                <p className="text-lg text-gray-700">
                  <strong>You have proof:</strong> Having proof of purchase helps you demonstrate when and where 
                  you bought the product.
                </p>
              </div>
            </div>
          </div>

          {/* What You Can Do Next */}
          <div className="bg-blue-50 rounded-xl p-10 border-2 border-blue-200 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-bold text-gray-900">What you can do next</h3>
            </div>
            
            <div className="pl-11 space-y-5">
              <p className="text-lg text-gray-700">
                You have the right to ask for a repair, replacement, or refund. For a major problem with the product, 
                you can choose which remedy you prefer.
              </p>
              
              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Your options include:</h4>
                <ul className="space-y-2 text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Request a full refund</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Ask for a replacement product</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Request a repair at no cost to you</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link
              to="/guidance"
              className="flex-1 flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-5 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              See step-by-step guidance
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/help"
              className="flex items-center justify-center gap-3 bg-white text-gray-700 px-8 py-5 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-200"
            >
              <HelpCircle className="w-5 h-5" />
              Get more help
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-base text-gray-700">
              <strong>Important:</strong> This information is general guidance only and doesn't constitute legal advice. 
              Your specific situation may vary. For complex cases, consider seeking professional advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
