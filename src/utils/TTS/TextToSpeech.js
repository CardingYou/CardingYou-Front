import { useState, useEffect, useRef } from "react";

// text to speech 정의 함수
const useTextToSpeech = (text) => {
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    
    utteranceRef.current = utterance;

    return () => {
      synth.cancel();
    };
  }, [text]);

  const play = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      synth.speak(utteranceRef.current);
    }

    setIsPaused(false);
  };

  const pause = () => {
    const synth = window.speechSynthesis;
    synth.pause();
    setIsPaused(true);
  };

  const stop = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsPaused(false);
  };

  return {
    play,
    pause,
    stop,
    isPaused,
  };
};

export default useTextToSpeech;
