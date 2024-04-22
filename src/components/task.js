import React, { Component } from 'react';

export default class Task extends Component {
  state = {
    completed: false,
  };

  handleCheckboxChange = () => {
    this.setState(({ completed }) => {
      return {
        completed: !completed,
      };
    });
  };

  render() {
    const { textDescription, textCreated, itemID, onDeleted } = this.props;
    const { completed } = this.state;

    let classNames = '';
    if (completed) classNames += 'completed';
    else classNames += 'view';

    return (
      <li key={itemID} className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={this.handleCheckboxChange}
          />
          <label>
            <span className="description">{textDescription}</span>
            <span className="created">{textCreated}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}
/* const editInput =
itemClassName === 'editing' ? (
  <input type="text" className="edit" defaultValue="Editing task" />
) : null;

<input type="text" className="edit" defaultValue="Editing task" /> */
