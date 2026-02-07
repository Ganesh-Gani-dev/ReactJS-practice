import "./App.css";
import TaskForm from "./components/TaskForm.jsx";
import TaskDisplay from "./components/TaskSection.jsx";

function App() {
  return (
    <div className="App">
      <div className="Form">
        <TaskForm></TaskForm>
      </div>
      <br />
      <div className="Tasks">
        <TaskDisplay
          title="Learning React"
          description="Course completion"
          dueDate="10/02/2026"
        ></TaskDisplay>
        <TaskDisplay
          title="Learning Typescript"
          description="Course completion"
          dueDate="15/02/2026"
        ></TaskDisplay>
        <TaskDisplay
          title="Learning Node.js"
          description="Course completion"
          dueDate="20/02/2026"
        ></TaskDisplay>
      </div>
    </div>
  );
}

export default App;
