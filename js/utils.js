import { doneSvg, pinnedSvg, delSvg, editSvg } from './svg.js';

export function getTasksLocalStorage() {
  const taskJSON = localStorage.getItem('tasks');
  return taskJSON ? JSON.parse(taskJSON) : [];
}

export function setTasksLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function generateUniqueId() {
  const timestamp = Date.now();
  const randomPart = Math.floor(Math.random() * 10000);
  const randomPartTwo = Math.floor(Math.random() * 10000);
  return timestamp + randomPart + randomPartTwo;
}

export function updateListTasks() {
  document.querySelector('.output').textContent = '';
  const arrayTasksLS = getTasksLocalStorage();
  renderTasks(arrayTasksLS);
}

function renderTasks(tasks) {
  if (!tasks || !tasks.length) return;

  tasks
    .sort((a, b) => {
      //сортировка по выполнению
      if (a.done !== b.done) {
        return a.done ? 1 : -1;
      }
      // сортировка по закреплению
      if (a.pinned !== b.pinned) {
        return a.pinned ? -1 : 1;
      }
      // сортировка по позиции
      return a.position - b.position;
    })
    .forEach((value, i) => {
      const { id, task, pinned, done } = value;
      const item = `
            <div class="task ${done ? 'done' : ''} ${pinned ? 'pinned' : ''}" data-task-id="${id}" draggable="true">
                <p class="task__text">${task}</p>
                <span class="task__index ${done ? 'none' : ''}">${i + 1}</span>
                <div class="task__btns">
                    <button class="task__done ${done ? 'active' : ''}">${doneSvg}</button>
                    <button class="task__pinned ${pinned ? 'active' : ''}">${pinnedSvg}</button>
                    <button class="task__edit">${editSvg}</button>
                    <button class="task__del">${delSvg}</button>
                </div>
            </div>
            `;
      document.querySelector('.output').insertAdjacentHTML('beforeend', item);
    });

  activationDrag();
}

// перетаскивание задачи
function activationDrag() {
  const tasks = [...document.querySelectorAll('.task')];
  tasks.forEach((task) => {
    task.addEventListener('dragstart', () => {
      setTimeout(() => task.classList.add('dragging'), 0);
    });
    task.addEventListener('dragend', () => {
      task.classList.remove('dragging');
      if (tasks.length > 1) {
        savePositionTask();
      }
    });
  });
}

// сохранение позиции задачи
function savePositionTask() {
  const arrayTasksLS = getTasksLocalStorage();
  const tasks = [...document.querySelectorAll('.task')];

  tasks.forEach((task, i) => {
    const id = Number(task.dataset.taskId); // id задачи
    const index = arrayTasksLS.findIndex((value) => value.id === id);
    if (index !== -1) {
      arrayTasksLS[index].position = i;
    }
  });

  setTasksLocalStorage(arrayTasksLS);
  updateListTasks();
}

export function initSortableList(event) {
  event.preventDefault();

  const output = document.querySelector('.output');
  const draggingItem = document.querySelector('.dragging');
  let siblings = [...output.querySelectorAll('.task:not(.dragging)')]; // все эл-ты с классом task кроме тех, у кого есть dragging

  let nextSibling = siblings.find((sibling) => {
    return event.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  output.insertBefore(draggingItem, nextSibling);
}
