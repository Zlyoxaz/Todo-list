'use strict';
//==========================================

import {
  getTasksLocalStorage,
  setTasksLocalStorage,
  generateUniqueId,
  initSortableList,
  updateListTasks,
} from './utils.js';

const form = document.querySelector('.form');
const textareaForm = document.querySelector('.form__textarea');
const buttonSendForm = document.querySelector('.form__send-btn');
const buttonCancel = document.querySelector('.form__cancel-btn');
const output = document.querySelector('.output');
let editId = null; // id редактируемой задачи
let isEditTask = false; // процесс редактирования задачи

// отображение задачи при первой загрузке
updateListTasks();

// All eventListeneer
form.addEventListener('submit', sendTask);
buttonCancel.addEventListener('click', resetSendForm);
output.addEventListener('dragenter', (e) => e.preventDefault());
output.addEventListener('dragover', initSortableList);

output.addEventListener('click', (e) => {
  const taskElement = e.target.closest('.task__btns');
  if (!taskElement) return;

  if (e.target.closest('.task__pinned')) {
    pinnedTask(e);
  } else if (e.target.closest('.task__edit')) {
    editTask(e);
  } else if (e.target.closest('.task__del')) {
    delTask(e);
  } else if (e.target.closest('.task__done')) {
    doneTask(e);
  }
});

// All functions

// добавление задачи
function sendTask(event) {
  event.preventDefault();

  const task = textareaForm.value.trim().replace(/\s+/g, ' '); // удаление лишних пробелов
  if (!task) {
    return alert('Поле пустое!');
  }

  if (isEditTask) {
    saveEditedTask(task);
    return;
  }

  const arrayTasksLS = getTasksLocalStorage();
  arrayTasksLS.push({
    id: generateUniqueId(),
    task,
    done: false,
    pinned: false,
    position: 1000,
  });
  setTasksLocalStorage(arrayTasksLS);
  updateListTasks();

  form.reset();
}

//выполнение задачи
function doneTask(event) {
  const task = event.target.closest('.task');
  const id = Number(task.dataset.taskId); // id задачи

  const arrayTasksLS = getTasksLocalStorage(); // получаем массив из LocalStorage
  const index = arrayTasksLS.findIndex((task) => task.id === id);

  if (index === -1) {
    return alert('Задача не найдена!');
  }

  // снять закреп с выполненной задачи
  if (!arrayTasksLS[index].done && arrayTasksLS[index].pinned) {
    arrayTasksLS[index].pinned = false;
  }

  // переключатель выполнения задачи
  if (arrayTasksLS[index].done) {
    arrayTasksLS[index].done = false;
  } else {
    arrayTasksLS[index].done = true;
  }

  setTasksLocalStorage(arrayTasksLS);
  updateListTasks();
}

// закрепление задачи
function pinnedTask(event) {
  const task = event.target.closest('.task');
  const id = Number(task.dataset.taskId); // id задачи

  const arrayTasksLS = getTasksLocalStorage(); // получаем массив из LocalStorage
  const index = arrayTasksLS.findIndex((task) => task.id === id);

  if (index === -1) {
    return alert('Задача не найдена!');
  }

  if (!arrayTasksLS[index].pinned && arrayTasksLS[index].done) {
    return alert('Чтобы закрепить задачу, сначала уберите отметку о выполнении');
  }

  if (arrayTasksLS[index].pinned) {
    arrayTasksLS[index].pinned = false;
  } else {
    arrayTasksLS[index].pinned = true;
  }

  setTasksLocalStorage(arrayTasksLS);
  updateListTasks();
}

// удаление задачи
function delTask(event) {
  const task = event.target.closest('.task');
  const id = Number(task.dataset.taskId); // id задачи

  const arrayTasksLS = getTasksLocalStorage(); // получаем массив из LocalStorage
  const newTasksArr = arrayTasksLS.filter((task) => task.id !== id); // возвращаем все значения массива, кроме id
  setTasksLocalStorage(newTasksArr);
  updateListTasks();
}

// редактирование задачи
function editTask(event) {
  const task = event.target.closest('.task');
  const text = task.querySelector('.task__text');
  editId = Number(task.dataset.taskId);

  textareaForm.value = text.textContent; // текст задачи в поле ввода
  isEditTask = true;
  buttonSendForm.textContent = 'Сохранить'; // меняем "Добавить" на "Сохранить"
  buttonCancel.classList.remove('none'); // показываем кнопку "Отмена"
  form.scrollIntoView({ behavior: 'smooth' }); // прокрутка к зоне редактирования
}

// сохранение отредактированной задачи
function saveEditedTask(task) {
  const arrayTasksLS = getTasksLocalStorage();
  const editedTaskIndex = arrayTasksLS.findIndex((task) => task.id === editId);

  if (editedTaskIndex !== -1) {
    arrayTasksLS[editedTaskIndex].task = task;
    setTasksLocalStorage(arrayTasksLS);
    updateListTasks();
  } else {
    alert('Задача не найдена!');
  }

  resetSendForm();
}

// сброс формы для редактирования
function resetSendForm() {
  editId = null;
  isEditTask = false;
  buttonCancel.classList.add('none');
  buttonSendForm.textContent = 'Добавить';
  form.reset();
}
