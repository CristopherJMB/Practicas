import { Task } from './task.js';

// Referencias al DOM y estado global
const tasks       = [];
const inputEl     = document.getElementById('task-input');
const addBtn      = document.getElementById('add-btn');
const listEl      = document.getElementById('task-list');
const filterBtns  = document.querySelectorAll('[data-filter]');
let currentFilter = 'all';

// Función que actualiza la lista en pantalla
function mostrarTareas() {
  // Limpio el contenedor
  listEl.innerHTML = '';

  // Decido qué tareas mostrar según currentFilter
  const listaFiltrada = tasks.filter(t => {
    if (currentFilter === 'all')      return true;
    if (currentFilter === 'completed') return t.completed;
    if (currentFilter === 'pending')   return !t.completed;
  });

  // Por cada tarea, creo un <li> con checkbox, texto y botón de borrar
  listaFiltrada.forEach(task => {
    const li = document.createElement('li');

    // Checkbox para marcar completado
    const chk = document.createElement('input');
    chk.type = 'checkbox';
    chk.checked = task.completed;
    chk.addEventListener('click', () => {
      task.toggle();
      mostrarTareas(); // vuelvo a renderizar
    });

    // Span con el nombre
    const span = document.createElement('span');
    span.textContent = task.name;
    if (task.completed) {
      span.classList.add('completed');
    }

    // Botón de eliminar
    const delBtn = document.createElement('button');
    delBtn.textContent = '✕';
    delBtn.addEventListener('click', () => {
      eliminarTarea(task.id);
      mostrarTareas();
    });

    // Inserto en el <li> y luego al <ul>
    li.append(chk, span, delBtn);
    listEl.append(li);
  });
}

// Funciones de lógica
function agregarTarea(name) {
  if (!name.trim()) return;         // no agrego si está vacío
  const nueva = new Task(name);
  tasks.push(nueva);
}

function eliminarTarea(id) {
  const idx = tasks.findIndex(t => t.id === id);
  if (idx >= 0) tasks.splice(idx, 1);
}

// Event listeners
addBtn.addEventListener('click', () => {
  agregarTarea(inputEl.value);
  inputEl.value = '';
  mostrarTareas();
});

inputEl.addEventListener('keyup', e => {
  if (e.key === 'Enter') addBtn.click();
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Actualizo el filtro activo
    currentFilter = btn.getAttribute('data-filter');
    // Marco/desmarco visualmente el botón activo
    filterBtns.forEach(b => b.disabled = false);
    btn.disabled = true;
    mostrarTareas();
  });
});


mostrarTareas();