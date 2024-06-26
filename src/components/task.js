import React from 'react';

const Task = ({ textDescription, textCreated }) => {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>
        <span className="description">{textDescription}</span>
        <span className="created">{textCreated}</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  );
};
export default Task;
