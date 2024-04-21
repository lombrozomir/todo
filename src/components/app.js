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
        textCreated: 'created 18 seconds ago',
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
  render() {
    return (
      <div>
        <NewTaskForm />
        <TaskList todoData={this.state.todoData} />
        <Footer />
      </div>
    );
  }
}
