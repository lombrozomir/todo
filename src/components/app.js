import React, { Component } from 'react';

import NewTaskForm from './new-task-form';
import TaskList from './task-list';
import Footer from './footer';

export default class App extends Component {
  state = {
    todoData: [
      {
        id: 1,
        className: 'completed',
        textDescription: 'Completed task',
        textCreated: 'created 17 seconds ago',
      },
      {
        id: 2,
        className: 'editing',
        textDescription: 'Editing task 2',
        textCreated: 'Created 40sec ago editing',
      },
      {
        id: 3,
        className: 'view',
        textDescription: 'Active task',
        textCreated: 'created 5 minutes ago',
      },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  render() {
    return (
      <div>
        <NewTaskForm />
        <TaskList todoData={this.state.todoData} onDeleted={this.deleteItem} />
        <Footer />
      </div>
    );
  }
}
