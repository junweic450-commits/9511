import { cloneElement, isValidElement } from "react";
import { useSpeechSynthesis } from "../hooks/useSpeechSynthesis";
import { VoiceToolbar, type SpeechControls } from "./VoiceToolbar";

type TextFieldWithVoiceProps = {
  id: string;
  label: React.ReactNode;
  speechText: string;
  speech?: SpeechControls;
  hint?: React.ReactNode;
  voiceHintId?: string;
  /** Icon inside the field (e.g. search icon) */
  startAdornment?: React.ReactNode;
  /** `dark`: white label on blue hero; `light`: dark label on gray/white */
  labelTone?: "dark" | "light";
  children: React.ReactElement<
    React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>
  >;
  toolbarVariant?: "light" | "dark";
};

function mergeDescribedBy(
  existing: string | undefined,
  ...ids: (string | undefined)[]
): string | undefined {
  const merged = [existing, ...ids].filter(Boolean).join(" ").trim();
  return merged || undefined;
}

export function TextFieldWithVoice({
  id,
  label,
  speechText,
  speech,
  hint,
  voiceHintId,
  startAdornment,
  labelTone = "dark",
  children,
  toolbarVariant,
}: TextFieldWithVoiceProps) {
  const internal = useSpeechSynthesis();
  const { speak, stop, isSpeaking } = speech ?? internal;
  const hintId = voiceHintId ?? `${id}-voice-hint`;

  const resolvedToolbar =
    toolbarVariant ?? (labelTone === "dark" ? "light" : "dark");

  const inputWithA11y = isValidElement(children)
    ? cloneElement(children, {
        id,
        "aria-describedby": mergeDescribedBy(
          children.props["aria-describedby"] as string | undefined,
          hintId,
        ),
      })
    : children;

  const labelClasses =
    labelTone === "dark"
      ? "block text-center sm:text-left text-xl sm:text-2xl font-bold text-white drop-shadow-sm shrink"
      : "block text-center sm:text-left text-xl sm:text-2xl font-bold text-gray-900 shrink";

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-3">
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
        <VoiceToolbar
          speak={speak}
          stop={stop}
          isSpeaking={isSpeaking}
          speechText={speechText}
          listenLabel="Listen to this field"
          variant={resolvedToolbar === "light" ? "light" : "dark"}
        />
      </div>
      {hint}
      {startAdornment ? (
        <div className="relative" role="search">
          {startAdornment}
          {inputWithA11y}
        </div>
      ) : (
        inputWithA11y
      )}
      <p id={hintId} className="sr-only">
        Voice help: use Listen to this field to hear instructions for this box read aloud.
      </p>
    </div>
  );
}
