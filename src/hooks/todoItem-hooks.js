import React, { createContext, useContext, useState } from 'react';
import { v4 } from 'uuid';
import todoData from '../data/todo-data.json';
import { useEditMode } from './../hooks/editMode-hooks';
import moment from 'moment';

const TodoItemContext = createContext();
export const useTodoItems = () => useContext(TodoItemContext);
export function TodoItemProvider({ children }) {
  const [todoItems, setTodoItems] = useState(todoData);

  // Rather than allowing user to directly access setColors (and potentially make breaking changes)
  // giving them access to context through only allowed operations.
  const addTodoItem = (title, description, priority) => {
    const creationDate = moment().unix();
    setTodoItems([
      ...todoItems,
      { id: v4(), priority, title, description, creationDate },
    ]);
  };

  /**
   * Update the passed in todoItem with the data in it.
   * @param {TodoItem object} todoItem - TodoItem being updated.
   */
  const updateTodoItem = (id, title, description, priority) => {
    setTodoItems(
      todoItems.map((item, i) =>
        item.id === id ? { ...item, title, description, priority } : item
      )
    );
  };

  /**
   * update todoItem priority level
   * @param {uuid} id - Id of todoItem to be updated
   * @param {integer} priority - new priority level of todoItem
   */
  const prioritizeTodoItem = (id, priority) => {
    setTodoItems(
      todoItems.map((item) => (item.id === id ? { ...item, priority } : item))
    );
  };

  /**
   * Delete todoItem
   * @param {uuid} id - id of todoItem to be deleted
   */
  const removeTodoItem = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };
  return (
    <TodoItemContext.Provider
      value={{
        todoItems,
        addTodoItem,
        updateTodoItem,
        removeTodoItem,
        prioritizeTodoItem,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
}
