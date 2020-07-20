import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoItemForm from './components/TodoItemForm';
import { useEditMode } from './hooks/editMode-hooks';

/**
 * isEditMode: if in edit mode, TodoList is hidden, and TodoItem form is visible.
 * When the user submits, edit mode is turned off and TodoList is visible again.
 */
function App() {
  const { isEditMode, idToEdit } = useEditMode();
  return (
    <>
      {(!isEditMode && <TodoList></TodoList>) || ''}
      {(isEditMode && <TodoItemForm id={idToEdit}></TodoItemForm>) || ''}
    </>
  );
}

export default App;
