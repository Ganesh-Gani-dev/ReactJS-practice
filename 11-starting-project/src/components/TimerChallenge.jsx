import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timer = useRef();
  const dialog = useRef();

  const timerExpired = timeRemaining <= 0;

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeRemaining(0);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    dialog.current.showModal();
    setTimerStarted(false);
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
    setTimerStarted(false);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <button onClick={timeStarted ? handleStop : handleStart}>
          {timeStarted ? "Stop" : "Start"} Challenge
        </button>

        <p className={timeStarted ? "active" : undefined}>
          {timeStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
