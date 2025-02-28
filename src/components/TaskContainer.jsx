import TaskList from "./TaskList";
import "./../styles/TaskContainer.css";

const TaskContainer = ({ tasks, removeTask }) => {
  const priorities = ["urgente", "alta", "media", "baixa"];

  return (
    <div className="task-container">
      {priorities.map((priority) => (
        <TaskList
          key={priority}
          priority={priority}
          tasks={tasks[priority]}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default TaskContainer;
