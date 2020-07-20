import React from 'react';
import ReactDOM from 'react-dom';
import { TodoItemProvider } from './hooks/todoItem-hooks';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { EditModeProvider } from './hooks/editMode-hooks';

ReactDOM.render(
  <EditModeProvider>
    <TodoItemProvider>
      <App />
    </TodoItemProvider>
  </EditModeProvider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
