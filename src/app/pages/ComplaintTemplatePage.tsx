import { useState } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Copy, Download, Edit, CheckCircle, FileText, Receipt, Camera, Mail } from "lucide-react";

export function ComplaintTemplatePage() {
  const [copied, setCopied] = useState(false);

  const templateText = `[Your Name]
[Your Address]
[Your Phone Number]
[Your Email]

[Date]

[Business Name]
[Business Address]

Dear Sir/Madam,

Re: Request for Refund/Replacement - [Product/Service Name]

I am writing to request a refund for a faulty product I purchased from your store.

Purchase Details:
- Product: [Product name and model]
- Purchase Date: [Date]
- Amount Paid: $[Amount]
- Receipt/Order Number: [Number]

Problem Description:
The product is faulty and does not work as it should. [Describe the specific problem clearly]. This issue occurred [when - e.g., immediately after purchase, within one week, etc.].

Under Australian Consumer Law, I have rights to a remedy when goods are faulty or do not match their description. As this is a major problem, I am entitled to choose between a refund, replacement, or repair.

I am requesting a full refund of $[Amount] to be provided within 14 days of receiving this letter.

I have attached copies of my receipt and photographs showing the problem.

Please contact me at [your phone number] or [your email] to arrange this refund.

I look forward to your prompt response.

Yours sincerely,

[Your Name]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(templateText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([templateText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "complaint-letter.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Use this complaint template</h1>
            <p className="text-xl text-gray-600">
              Copy this template and fill in your details to create a professional complaint letter
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Template Section */}
            <div className="col-span-2">
              <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 px-8 py-5 border-b-2 border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-blue-600" />
                      <h2 className="text-xl font-semibold text-gray-900">Complaint Letter Template</h2>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        {copied ? (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy Text
                          </>
                        )}
                      </button>
                      <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-5 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>

                {/* Template Text */}
                <div className="p-8">
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <pre className="text-base text-gray-800 font-mono whitespace-pre-wrap leading-relaxed">
                      {templateText}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-6 bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How to use this template</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                    <span className="text-base text-gray-700 pt-0.5">
                      Copy the template above using the "Copy Text" button
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                    <span className="text-base text-gray-700 pt-0.5">
                      Replace all text in [square brackets] with your specific details
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                    <span className="text-base text-gray-700 pt-0.5">
                      Review the letter to make sure all information is accurate
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                    <span className="text-base text-gray-700 pt-0.5">
                      Send it to the business by email or post (keep a copy for yourself)
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-1 space-y-6">
              {/* What to Prepare */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-5">What evidence to prepare</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                      <Receipt className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Receipt</div>
                      <p className="text-sm text-gray-600">
                        Original receipt, invoice, or order confirmation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Photos</div>
                      <p className="text-sm text-gray-600">
                        Clear pictures showing the fault or damage
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Emails</div>
                      <p className="text-sm text-gray-600">
                        Any correspondence with the seller
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Documents</div>
                      <p className="text-sm text-gray-600">
                        Warranty, bank statements, product description
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Important tips</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Keep a copy of everything you send</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Send by registered post or email with read receipt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Be polite but firm in your tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>State clearly what you want (refund/replacement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Give them a reasonable deadline (7-14 days)</span>
                  </li>
                </ul>
              </div>

              {/* Next Steps */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">What happens next?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  After sending your complaint letter, the business should respond within the timeframe you specified.
                </p>
                <Link
                  to="/guidance"
                  className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  View full guidance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
