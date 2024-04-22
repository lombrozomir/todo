import React, { Component } from 'react';
import Task from './task';

export default class TaskList extends Component {
  render() {
    const { todoData, onDeleted } = this.props;

    const elements = todoData.map((item) => {
      const {id, ...itemProps} = item
      return (
        <Task
          key={id}
          {...itemProps}
          onDeleted={()=>onDeleted(id)}
        />
      );
    });

    return (
      <div>
        <ul className="todo-list">{elements}</ul>
      </div>
    );
  }
}

// const elements = todoData.map((item) => {
    //   const editInput =
    //     item.className === 'editing' ? (
    //       <input type="text" className="edit" defaultValue="Editing task" />
    //     ) : null;
    //   return (
    //     <li key={item.id} className={item.className}>
    //       <Task
    //         itemID={item.id}
    //         itemClassName={item.className}
    //         textDescription={item.textDescription}
    //         textCreated={item.textCreated}
    //       />
    //       {editInput}
    //     </li>
    //   );
    // });