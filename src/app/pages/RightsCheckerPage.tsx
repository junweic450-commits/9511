import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { ProgressIndicator } from "../components/ProgressIndicator";
import { RadioGroup } from "../components/ui/radio-group";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function RightsCheckerPage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      id: 1,
      question: "Is the product faulty or not working as it should?",
      options: [
        { value: "yes", label: "Yes, it's faulty or broken" },
        { value: "no", label: "No, it works fine" },
        { value: "unsure", label: "I'm not sure" },
      ],
    },
    {
      id: 2,
      question: "Did the problem happen recently after purchase?",
      options: [
        { value: "within-30-days", label: "Yes, within 30 days" },
        { value: "within-6-months", label: "Yes, within 6 months" },
        { value: "over-6-months", label: "No, more than 6 months ago" },
      ],
    },
    {
      id: 3,
      question: "Did the product match the description when you bought it?",
      options: [
        { value: "no-match", label: "No, it was different from what was described" },
        { value: "partial-match", label: "Partly, but some things were different" },
        { value: "full-match", label: "Yes, it matched the description" },
      ],
    },
    {
      id: 4,
      question: "Do you still have proof of purchase (receipt, email, bank statement)?",
      options: [
        { value: "yes-receipt", label: "Yes, I have the receipt or proof" },
        { value: "no-receipt", label: "No, I don't have proof" },
        { value: "partial-proof", label: "I have some proof (like a bank statement)" },
      ],
    },
  ];

  const totalQuestions = questions.length;
  const currentQuestionData = questions[currentQuestion - 1];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Navigate to results page
      navigate("/results");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const canProceed = answers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ProgressIndicator
          currentStep={2}
          totalSteps={4}
          steps={["Select Issue", "Answer Questions", "View Rights", "Take Action"]}
        />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="text-lg font-medium text-blue-600 mb-2">
              Question {currentQuestion} of {totalQuestions}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Answer a few simple questions
            </h1>
            <p className="text-xl text-gray-600">
              This helps us understand your situation and provide accurate information
            </p>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-xl p-10 shadow-lg border-2 border-gray-200 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              {currentQuestionData.question}
            </h2>

            <div className="space-y-4">
              {currentQuestionData.options.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-start p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    answers[currentQuestion] === option.value
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={option.value}
                    checked={answers[currentQuestion] === option.value}
                    onChange={() => handleAnswer(option.value)}
                    className="mt-1 w-6 h-6 text-blue-600 flex-shrink-0"
                  />
                  <span className="ml-4 text-lg text-gray-900 font-medium">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 1}
              className={`flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors ${
                currentQuestion === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed}
              className={`flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors ${
                canProceed
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {currentQuestion < totalQuestions ? "Next" : "See my rights"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{Math.round((Object.keys(answers).length / totalQuestions) * 100)}% complete</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${(Object.keys(answers).length / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
