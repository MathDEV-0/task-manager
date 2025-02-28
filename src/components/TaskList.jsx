import "./../styles/TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
