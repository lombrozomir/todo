import React from 'react';
import { createRoot } from 'react-dom/client';

import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';
import Footer from './components/footer';

const container = document.getElementsByClassName('todoapp')[0];
const root = createRoot(container);

const App = () => {
  const todoData = [
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
  ];
  return (
    <div>
      <NewTaskForm />
      <TaskList todoData={todoData} />
      <Footer />
    </div>
  );
};

root.render(<App />);
