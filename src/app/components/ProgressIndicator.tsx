import { Check } from "lucide-react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export function ProgressIndicator({ currentStep, totalSteps, steps }: ProgressIndicatorProps) {
  return (
    <div className="w-full py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            
            return (
              <div key={stepNumber} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-colors ${
                      isCompleted
                        ? "bg-green-600 text-white"
                        : isCurrent
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {isCompleted ? <Check className="w-6 h-6" /> : stepNumber}
                  </div>
                  <div
                    className={`mt-3 text-base font-medium ${
                      isCurrent ? "text-blue-700" : "text-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                </div>
                {index < totalSteps - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 mt-[-24px] transition-colors ${
                      isCompleted ? "bg-green-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
