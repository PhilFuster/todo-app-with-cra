import React from 'react';
import moment from 'moment';
import { FaPen, FaTrash } from 'react-icons/fa';
import { useEditMode } from './../hooks/editMode-hooks';
import { useTodoItem, useTodoItems } from './../hooks/todoItem-hooks';
export default function TodoItem({
  title,
  description,
  creationDate,
  priority,
  id,
}) {
  const { toggleEditMode } = useEditMode();
  const { removeTodoItem } = useTodoItems();
  const formattedDate = moment.unix(creationDate, 'MMM DD, YYYY');
  return (
    <section id={id} className='todo-item'>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className='todo-item-footer'>
        <small>{formattedDate.format('MMM DD, YYYY - hh:mm')}</small>
        <div className='actions'>
          <FaPen
            onClick={() => toggleEditMode(id)}
            className='pen-icon'
          ></FaPen>
          <FaTrash
            onClick={() => removeTodoItem(id)}
            className='trashcan'
          ></FaTrash>
        </div>
      </div>
    </section>
  );
}
