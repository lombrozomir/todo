import React from 'react';
import Task from './task';
const TaskList = ({ todoData }) => {
  const elements = todoData.map((item) => {
    if (item.className === 'editing') {
      return (
        <li key={item.id} className={item.className}>
          <Task
            textDescription={item.textDescription}
            textCreated={item.textCreated}
          />
          <input type="text" className="edit" defaultValue="Editing task" />
        </li>
      );
    } else {
      return (
        <li key={item.id} className={item.className}>
          <Task
            textDescription={item.textDescription}
            textCreated={item.textCreated}
          />
        </li>
      );
    }
  });

  return (
    <div>
      <ul className="todo-list">{elements}</ul>
      {/* <input type="text" className="edit" value="Editing task" /> */}
    </div>
  );
};
export default TaskList;
