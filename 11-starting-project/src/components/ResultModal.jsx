import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      showModal() {
        dialog.current.showModal();
      },
    };
  });

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  const score = Math.round(
    (1 - remainingTime / (targetTime * 1000)) * 100
  );

  return (
    <dialog className="result-modal" ref={dialog}>
      <h2>{userLost ? "You lost!" : "You won!"}</h2>

      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>

      {!userLost && (
        <>
          <h2>Your Score: {score}</h2>
          <p>
            You stopped the timer with{" "}
            <strong>{formattedRemainingTime} seconds left.</strong>
          </p>
        </>
      )}

      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
