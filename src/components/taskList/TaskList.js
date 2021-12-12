import React from "react";
import TaskItem from "../taskItem/TaskItem";
import "./TaskList.css";

const TaskList = ({ taskList, handleComplete, handleDelete }) => {
  return (
    <div>
      {taskList.map((elt) => (
        <TaskItem
          todo={elt}
          key={elt.id}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
