import React, { useState } from 'react';

import { useTodoItems } from './../hooks/todoItem-hooks';
import { useEditMode } from './../hooks/editMode-hooks';
import { FaExclamation } from 'react-icons/fa';

// return an array with length passed
const createArray = (length) => [...Array(length)];
// Priority Rating component
// Renders Exclamation icons with a default of 4
export default function PriorityRating({
  style = {},
  totalPriority = 4,
  priority = 0,
  onRate = (f) => f,
  ...props
}) {
  const { isEditMode } = useEditMode();
  return (
    <div className='priority-rating' style={{ ...style }} {...props}>
      {createArray(totalPriority).map((n, i) => (
        <Priority
          key={i}
          selected={priority > i}
          onSelect={() => {
            if (isEditMode) {
              onRate(i + 1);
            }
          }}
        />
      ))}
      <small style={{ color: '#b5b9bd' }}>
        priority level {priority} out of {totalPriority} levels
      </small>
    </div>
  );
}
// Individual Star componenet
const Priority = ({ selected = false, onSelect = (f) => f }) => (
  <FaExclamation color={selected ? 'red' : 'grey'} onClick={onSelect} />
);
