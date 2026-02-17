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

  return (
    <dialog className="result-modal" ref={dialog}>
      <h2>{userLost ? "You lost!" : "You won!"}</h2>

      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>

      {!userLost && (
        <p>
          You stopped the timer with{" "}
          <strong>{formattedRemainingTime} seconds left.</strong>
        </p>
      )}

      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
