import { Volume2, Square } from "lucide-react";

export type SpeechControls = {
  speak: (text: string) => void;
  stop: () => void;
  isSpeaking: boolean;
};

type VoiceToolbarProps = SpeechControls & {
  speechText: string;
  /** Button label, e.g. "Listen to this field" */
  listenLabel?: string;
  className?: string;
  variant?: "light" | "dark";
};

export function VoiceToolbar({
  speak,
  stop,
  isSpeaking,
  speechText,
  listenLabel = "Listen",
  className = "",
  variant = "dark",
}: VoiceToolbarProps) {
  const listenBtn =
    variant === "light"
      ? "inline-flex items-center justify-center gap-2 min-h-[48px] px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 border-2 border-white/40 text-white text-base font-semibold shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 transition-colors"
      : "inline-flex items-center justify-center gap-2 min-h-[48px] px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold shadow-md border-2 border-blue-700/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 transition-colors";

  const stopBtn =
    variant === "light"
      ? "inline-flex items-center justify-center gap-2 min-h-[48px] px-4 py-2 rounded-xl bg-red-600/90 hover:bg-red-600 border-2 border-red-400/80 text-white text-base font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 transition-colors"
      : "inline-flex items-center justify-center gap-2 min-h-[48px] px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-900 text-white text-base font-semibold border-2 border-gray-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400 transition-colors";

  return (
    <div
      className={`flex flex-wrap gap-2 items-center justify-center sm:justify-end ${className}`}
      role="group"
      aria-label="Listen to text read aloud"
    >
      <button type="button" onClick={() => speak(speechText)} className={listenBtn}>
        <Volume2 className="w-5 h-5 shrink-0" aria-hidden />
        {listenLabel}
      </button>
      {isSpeaking && (
        <button type="button" onClick={stop} className={stopBtn}>
          <Square className="w-4 h-4 shrink-0" aria-hidden />
          Stop audio
        </button>
      )}
    </div>
  );
}
