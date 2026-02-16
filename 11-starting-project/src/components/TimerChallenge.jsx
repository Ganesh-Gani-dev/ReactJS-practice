import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timeStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart(targetTime) {
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second {targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={handleStart}>
        {timeStarted ? "Stop" : "Start"} Challenge
      </button>
      <p className={timeStarted ? "active" : undefined}>{timeStarted ? "Time is running..." : "Timer inactive"}</p>
    </section>
  );
}
