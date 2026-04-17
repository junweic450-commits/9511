import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import {
  Search,
  Package,
  RefreshCw,
  AlertCircle,
  FileText,
  CheckCircle,
  MessageSquare,
  ArrowRight,
  Volume2,
  Square,
} from "lucide-react";

const PAGE_INTRO_SPEECH =
  "Welcome. This page helps you understand your consumer rights under Australian Consumer Law. " +
  "Use the large search box to type what happened, for example faulty product or refund. " +
  "You can also scroll down and tap a common issue to get started.";

const SEARCH_HELP_SPEECH =
  "This is the search box. Tap inside, then type a few words about your problem. " +
  "For example: broken phone, refund not received, or misleading advertising.";

export function HomePage() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const stopSpeech = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-AU";
    utterance.rate = 0.88;
    utterance.pitch = 1;
    setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);
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

  const commonIssuesSpeech =
    "Common issues. Here you can choose the type of problem that matches your situation. " +
    quickAccessCategories
      .map((c) => `${c.title}. ${c.description}.`)
      .join(" ") +
    " Tap any card to learn more. You can also use the search box at the top of the page.";

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

  const howItWorksSpeech =
    "How it works. There are three simple steps to understand your rights. " +
    howItWorksSteps
      .map((s) => `Step ${s.number}. ${s.title}. ${s.description}.`)
      .join(" ") +
    " When you are ready, tap the Get started now button to begin.";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Understand your consumer rights clearly
            </h1>
            <p className="text-xl sm:text-2xl text-blue-50 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
              Get simple, straightforward information about your rights under Australian Consumer Law
            </p>

            {/* Audio help — clearer for users who prefer listening */}
            <div
              className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
              role="region"
              aria-label="Listen to page audio"
            >
              <button
                type="button"
                onClick={() => speak(PAGE_INTRO_SPEECH)}
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 border-2 border-white/40 text-white text-lg font-semibold shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 transition-colors"
              >
                <Volume2 className="w-6 h-6 shrink-0" aria-hidden />
                Listen to this page
              </button>
              <button
                type="button"
                onClick={() => speak(SEARCH_HELP_SPEECH)}
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 border-2 border-white/40 text-white text-lg font-semibold shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 transition-colors"
              >
                <Volume2 className="w-6 h-6 shrink-0" aria-hidden />
                Listen to search help
              </button>
              {isSpeaking && (
                <button
                  type="button"
                  onClick={stopSpeech}
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-3 rounded-xl bg-red-600/90 hover:bg-red-600 border-2 border-red-400/80 text-white text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 transition-colors"
                >
                  <Square className="w-5 h-5 shrink-0" aria-hidden />
                  Stop audio
                </button>
              )}
            </div>
            <p className="sr-only" aria-live="polite">
              {isSpeaking ? "Audio is playing. Use Stop audio to silence." : ""}
            </p>

            {/* Search Bar — larger type & contrast for readability */}
            <div className="max-w-3xl mx-auto text-left">
              <label
                htmlFor="home-issue-search"
                className="block text-center text-xl sm:text-2xl font-bold text-white mb-3 drop-shadow-sm"
              >
                Search for your issue
              </label>
              <p className="text-center text-lg sm:text-xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
                Type a few words in the box below, or pick a topic further down the page.
              </p>
              <div className="relative" role="search">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-600 pointer-events-none"
                  aria-hidden
                />
                <input
                  id="home-issue-search"
                  type="search"
                  name="issue-search"
                  placeholder="Example: faulty product, refund, misleading ad"
                  autoComplete="off"
                  aria-describedby="home-search-hint"
                  className="w-full min-h-[64px] pl-16 pr-5 py-4 text-xl sm:text-2xl font-semibold text-gray-900 placeholder:text-gray-600 placeholder:font-medium bg-white rounded-xl border-4 border-white shadow-2xl focus:border-amber-200 focus:ring-4 focus:ring-amber-100/90 focus:outline-none"
                />
              </div>
              <p
                id="home-search-hint"
                className="mt-3 text-center text-lg sm:text-xl text-blue-50 font-medium leading-snug"
              >
                Tip: bigger text is easier to read — you can zoom the page with Ctrl + or Command + on your keyboard.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Categories */}
      <section
        className="max-w-7xl mx-auto px-6 py-16"
        aria-labelledby="common-issues-heading"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-8">
          <div>
            <h2
              id="common-issues-heading"
              className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
            >
              Common issues
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Pick the topic that best matches your problem. Each card opens the next step.
            </p>
          </div>
          <div
            className="flex flex-col sm:flex-row flex-wrap gap-3 shrink-0"
            role="group"
            aria-label="Audio for common issues"
          >
            <button
              type="button"
              onClick={() => speak(commonIssuesSpeech)}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold shadow-md border-2 border-blue-700/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 transition-colors"
            >
              <Volume2 className="w-6 h-6 shrink-0" aria-hidden />
              Listen to this section
            </button>
            {isSpeaking && (
              <button
                type="button"
                onClick={stopSpeech}
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-5 py-3 rounded-xl bg-gray-800 hover:bg-gray-900 text-white text-lg font-semibold border-2 border-gray-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400 transition-colors"
              >
                <Square className="w-5 h-5 shrink-0" aria-hidden />
                Stop audio
              </button>
            )}
          </div>
        </div>
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
      </section>

      {/* How It Works */}
      <section className="bg-white py-16" aria-labelledby="how-it-works-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-12">
            <div>
              <h2
                id="how-it-works-heading"
                className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight text-center sm:text-left"
              >
                How it works
              </h2>
              <p className="mt-2 text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed text-center sm:text-left mx-auto sm:mx-0">
                Three simple steps to understand your rights
              </p>
            </div>
            <div
              className="flex flex-col sm:flex-row flex-wrap gap-3 shrink-0 justify-center sm:justify-end"
              role="group"
              aria-label="Audio for how it works"
            >
              <button
                type="button"
                onClick={() => speak(howItWorksSpeech)}
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold shadow-md border-2 border-blue-700/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 transition-colors"
              >
                <Volume2 className="w-6 h-6 shrink-0" aria-hidden />
                Listen to this section
              </button>
              {isSpeaking && (
                <button
                  type="button"
                  onClick={stopSpeech}
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] px-5 py-3 rounded-xl bg-gray-800 hover:bg-gray-900 text-white text-lg font-semibold border-2 border-gray-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400 transition-colors"
                >
                  <Square className="w-5 h-5 shrink-0" aria-hidden />
                  Stop audio
                </button>
              )}
            </div>
          </div>

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
      </section>

      {/* Footer */}
      <div className="bg-gray-100 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-base text-gray-600">
          <p>This tool provides general information only. For specific legal advice, consult a professional.</p>
        </div>
      </div>
    </div>
  );
}
