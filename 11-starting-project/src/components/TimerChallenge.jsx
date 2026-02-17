import { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const [timeStarted, setTimeStarted] = useState(false);

  const intervalRef = useRef();
  const dialog = useRef();

  const timerExpired = timeRemaining <= 0;

  useEffect(() => {
    if (timerExpired) {
      clearInterval(intervalRef.current);
      dialog.current.showModal();
      setTimeStarted(false);
    }
  }, [timerExpired]);

  function handleStart() {
    setTimeStarted(true);

    intervalRef.current = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    dialog.current.showModal();
    setTimeStarted(false);
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
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
