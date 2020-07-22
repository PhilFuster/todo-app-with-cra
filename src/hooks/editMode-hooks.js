import React, { createContext, useContext, useState } from 'react';
import { v4 } from 'uuid';
import todoData from '../data/todo-data.json';

const EditModeContext = createContext();
export const useEditMode = () => useContext(EditModeContext);
export function EditModeProvider({ children }) {
  const [isEditMode, setIsEditMode] = useState(0);
  const [idToEdit, setIdToEdit] = useState('');

  const toggleEditMode = (id = ``) => {
    setIsEditMode(!isEditMode);
    setIdToEdit(id);
  };

  return (
    <EditModeContext.Provider value={{ isEditMode, toggleEditMode, idToEdit }}>
      {children}
    </EditModeContext.Provider>
  );
}
