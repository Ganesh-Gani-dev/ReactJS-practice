import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

      <NewTask onAddTask={onAddTask} />

      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet
        </p>
      )}

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between my-2">
            {task.text}
            <button
              className="text-red-500"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
