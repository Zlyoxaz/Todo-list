/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/svg.js":
/*!***********************!*\
  !*** ./src/js/svg.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delSvg: () => (/* binding */ delSvg),
/* harmony export */   doneSvg: () => (/* binding */ doneSvg),
/* harmony export */   editSvg: () => (/* binding */ editSvg),
/* harmony export */   pinnedSvg: () => (/* binding */ pinnedSvg)
/* harmony export */ });
const doneSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
    </svg>
`;

const pinnedSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z"/>
    </svg>
`;

const delSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146z"/>
        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
    </svg>
`;

const editSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg>
`;

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateUniqueId: () => (/* binding */ generateUniqueId),
/* harmony export */   getTasksLocalStorage: () => (/* binding */ getTasksLocalStorage),
/* harmony export */   initSortableList: () => (/* binding */ initSortableList),
/* harmony export */   setTasksLocalStorage: () => (/* binding */ setTasksLocalStorage),
/* harmony export */   updateListTasks: () => (/* binding */ updateListTasks)
/* harmony export */ });
/* harmony import */ var _svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg.js */ "./src/js/svg.js");


function getTasksLocalStorage() {
  const taskJSON = localStorage.getItem('tasks');
  return taskJSON ? JSON.parse(taskJSON) : [];
}

function setTasksLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function generateUniqueId() {
  const timestamp = Date.now();
  const randomPart = Math.floor(Math.random() * 10000);
  const randomPartTwo = Math.floor(Math.random() * 10000);
  return timestamp + randomPart + randomPartTwo;
}

function updateListTasks() {
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
                    <button class="task__done ${done ? 'active' : ''}">${_svg_js__WEBPACK_IMPORTED_MODULE_0__.doneSvg}</button>
                    <button class="task__pinned ${pinned ? 'active' : ''}">${_svg_js__WEBPACK_IMPORTED_MODULE_0__.pinnedSvg}</button>
                    <button class="task__edit">${_svg_js__WEBPACK_IMPORTED_MODULE_0__.editSvg}</button>
                    <button class="task__del">${_svg_js__WEBPACK_IMPORTED_MODULE_0__.delSvg}</button>
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

function initSortableList(event) {
  event.preventDefault();

  const output = document.querySelector('.output');
  const draggingItem = document.querySelector('.dragging');
  let siblings = [...output.querySelectorAll('.task:not(.dragging)')]; // все эл-ты с классом task кроме тех, у кого есть dragging

  let nextSibling = siblings.find((sibling) => {
    return event.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  output.insertBefore(draggingItem, nextSibling);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");

//==========================================



const form = document.querySelector('.form');
const textareaForm = document.querySelector('.form__textarea');
const buttonSendForm = document.querySelector('.form__send-btn');
const buttonCancel = document.querySelector('.form__cancel-btn');
const output = document.querySelector('.output');
let editId = null; // id редактируемой задачи
let isEditTask = false; // процесс редактирования задачи

// отображение задачи при первой загрузке
(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateListTasks)();

// All eventListeneer
form.addEventListener('submit', sendTask);
buttonCancel.addEventListener('click', resetSendForm);
output.addEventListener('dragenter', (e) => e.preventDefault());
output.addEventListener('dragover', _utils_js__WEBPACK_IMPORTED_MODULE_0__.initSortableList);

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

  const arrayTasksLS = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getTasksLocalStorage)();
  arrayTasksLS.push({
    id: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.generateUniqueId)(),
    task,
    done: false,
    pinned: false,
    position: 1000,
  });
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setTasksLocalStorage)(arrayTasksLS);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateListTasks)();

  form.reset();
}

//выполнение задачи
function doneTask(event) {
  const task = event.target.closest('.task');
  const id = Number(task.dataset.taskId); // id задачи

  const arrayTasksLS = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getTasksLocalStorage)(); // получаем массив из LocalStorage
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

  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setTasksLocalStorage)(arrayTasksLS);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateListTasks)();
}

// закрепление задачи
function pinnedTask(event) {
  const task = event.target.closest('.task');
  const id = Number(task.dataset.taskId); // id задачи

  const arrayTasksLS = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getTasksLocalStorage)(); // получаем массив из LocalStorage
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

  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setTasksLocalStorage)(arrayTasksLS);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateListTasks)();
}

// удаление задачи
function delTask(event) {
  const task = event.target.closest('.task');
  const id = Number(task.dataset.taskId); // id задачи

  const arrayTasksLS = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getTasksLocalStorage)(); // получаем массив из LocalStorage
  const newTasksArr = arrayTasksLS.filter((task) => task.id !== id); // возвращаем все значения массива, кроме id
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setTasksLocalStorage)(newTasksArr);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateListTasks)();
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
  const arrayTasksLS = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getTasksLocalStorage)();
  const editedTaskIndex = arrayTasksLS.findIndex((task) => task.id === editId);

  if (editedTaskIndex !== -1) {
    arrayTasksLS[editedTaskIndex].task = task;
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setTasksLocalStorage)(arrayTasksLS);
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateListTasks)();
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

/******/ })()
;
//# sourceMappingURL=bundle.js.map