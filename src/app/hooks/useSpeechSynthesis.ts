import { useCallback, useEffect, useState } from "react";

const LANG = "en-AU";
const RATE = 0.88;

export function useSpeechSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LANG;
    u.rate = RATE;
    u.pitch = 1;
    setIsSpeaking(true);
    u.onend = () => setIsSpeaking(false);
    u.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(u);
  }, []);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return { speak, stop, isSpeaking };
}
