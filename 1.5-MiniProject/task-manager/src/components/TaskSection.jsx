import { useState } from "react";

export default function TaskDisplay(props) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected(prev => !prev); 
  }

  return (
    <ul className={`TaskBlock ${isSelected ? "done" : ""}`}>
      <li>Title : {props.title}</li>
      <li>Description : {props.description}</li>
      <li>Due Date : {props.dueDate}</li>

      <button onClick={handleClick}>
        Done
      </button>
    </ul>
  );
}
