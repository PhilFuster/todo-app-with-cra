import React from 'react';
import { useInput } from './../hooks/useInput';
import { useTodoItems } from './../hooks/todoItem-hooks';
import { useEditMode } from './../hooks/editMode-hooks';
export default function TodoItemForm({ id = '' }) {
  const { updateTodoItem, addTodoItem, todoItems } = useTodoItems();
  const { toggleEditMode } = useEditMode();
  const [item] = todoItems.filter((n, i) => n.id === id);
  let title;
  let description;
  if (item) {
    title = item.title;
    description = item.description;
  } else {
    title = '';
    description = '';
  }
  const [titleProps, resetTitle] = useInput(title);
  const [descriptionProps, resetDescription] = useInput(description);

  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <form className='todo-item-form' onSubmit={submit}>
      <label htmlFor='title'>Title</label>
      <input
        id='title'
        style={{ minWidth: '400px' }}
        {...titleProps}
        type='text'
        placeholder='todoItem title...'
        required
      />
      <label htmlFor='description'>Description</label>
      <textarea
        id='description'
        {...descriptionProps}
        placeholder='description of todoItem'
        required
      />
      <button
        onClick={() => {
          resetTitle();
          resetDescription();
          id
            ? updateTodoItem(id, titleProps.value, descriptionProps.value)
            : addTodoItem(titleProps.value, descriptionProps.value);
          toggleEditMode();
        }}
      >
        {id ? 'UPDATE' : 'ADD'}
      </button>
      <button onClick={() => toggleEditMode()}>CANCEL</button>
    </form>
  );
}
