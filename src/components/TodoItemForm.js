import React from 'react';
import { useInput } from './../hooks/useInput';
import { useTodoItems } from './../hooks/todoItem-hooks';
import { useEditMode } from './../hooks/editMode-hooks';
import PriorityRating from './PriorityRating';
export default function TodoItemForm({ id = '' }) {
  const {
    updateTodoItem,
    addTodoItem,
    todoItems,
    prioritizeTodoItem,
  } = useTodoItems();
  const { toggleEditMode } = useEditMode();
  const [item] = todoItems.filter((n, i) => n.id === id);
  let title;
  let description;
  let priority;
  if (item) {
    title = item.title;
    description = item.description;
    priority = item.priority;
  } else {
    title = '';
    description = '';
    priority = '';
  }
  const [titleProps, resetTitle] = useInput(title);
  const [descriptionProps, resetDescription] = useInput(description);
  const [priorityProps, resetPriority, setPriorityValue] = useInput(priority);

  const submit = (e) => {
    e.preventDefault();
    console.log('submitting');
  };
  return (
    <form className='todo-item-form'>
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
      <PriorityRating
        priority={priorityProps.value}
        onRate={(priority) => setPriorityValue(priority)}
      ></PriorityRating>
      <button
        onClick={(e) => {
          e.preventDefault();

          if (titleProps.value == '') return;
          resetTitle();
          resetDescription();
          resetPriority();
          id
            ? updateTodoItem(
                id,
                titleProps.value,
                descriptionProps.value,
                priorityProps.value
              )
            : addTodoItem(
                titleProps.value,
                descriptionProps.value,
                priorityProps.value
              );
          toggleEditMode();
        }}
      >
        {id ? 'UPDATE' : 'ADD'}
      </button>
      <button onClick={() => toggleEditMode()}>CANCEL</button>
    </form>
  );
}
