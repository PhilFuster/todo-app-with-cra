import React, { useState } from 'react';

import { FaExclamation } from 'react-icons/fa';

// return an array with length passed
const createArray = (length) => [...Array(length)];
// Start Rating component
// Renders Star icons with a default of 5
export default function PriorityRating({
  style = {},
  totalPriority = 4,
  selectedPriority = 0,
  onPrioritize = (f) => f,
  ...props
}) {
  return (
    <div style={{ padding: '5px', ...style }} {...props}>
      {createArray(totalPriority).map((n, i) => (
        <Priority
          key={i}
          selected={selectedPriority > i}
          onSelect={() => onPrioritize(i + 1)}
        />
      ))}
      <p>
        priority level {selectedPriority} out of {totalPriority} levels
      </p>
    </div>
  );
}
// Individual Star componenet
const Priority = ({ selected = false, onSelect = (f) => f }) => (
  <FaExclamation color={selected ? 'red' : 'grey'} onClick={onSelect} />
);
