import React from 'react';
import TodoItem from './TodoItem';
import { useTodoItems } from './../hooks/todoItem-hooks';
import { useEditMode } from './../hooks/editMode-hooks';

export default function TodoList() {
  const { todoItems } = useTodoItems();
  const { toggleEditMode } = useEditMode();
  return (
    <>
      <div className='todo-list'>
        {todoItems.map((n, i) => (
          <TodoItem key={i} {...n}></TodoItem>
        ))}
        <button
          style={{ justifySelf: 'start' }}
          onClick={() => toggleEditMode()}
        >
          ADD
        </button>
      </div>
    </>
  );
}
