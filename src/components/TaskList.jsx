import { Droppable } from "@hello-pangea/dnd";
import TaskItem from "./TaskItem";
import "./../styles/TaskList.css";

const TaskList = ({ priority, tasks, removeTask }) => {
  return (
    <Droppable droppableId={priority}>
      {(provided) => (
        <div
          className={`task-list ${priority}`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2>{priority.toUpperCase()}</h2>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              priority={priority}
              removeTask={removeTask}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
