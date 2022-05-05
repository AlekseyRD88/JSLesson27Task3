import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
//import { onCreateTask } from './createTask';
//import { onToggleTask } from './updateTask';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  //onCreateTask();
  //onToggleTask();
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
