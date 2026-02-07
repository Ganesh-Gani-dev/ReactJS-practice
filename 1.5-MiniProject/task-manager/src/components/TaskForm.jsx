export default function TaskForm() {
  return (
    <div className="taskForm">
      <h2>Add your Tasks</h2>
      <label htmlFor="title">Task Name :</label>
      <input type="text" name="title" />
      <br /> <br />
      <label htmlFor="taskDescription">Description:</label>
      <br />
      <textarea
        name="taskDescription"
        id="taskDescription"
        placeholder="Describe"
        rows={5}
        cols={50}
      ></textarea>
      <br />
      <label htmlFor="dueDate">DueDate:</label>
      <input type="date" name="dueDate" />
      <br />
      <label for="priority">Choose a Priority:</label>
      <select id="Priority" name="priority">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}
