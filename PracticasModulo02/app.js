//Definicion de variables locales y referencial al DOM

const task = [];
const inputEl = document.getElementById("task-input");
const addBtn = document.getElementById("add-button");
const listEl = document.getElementById("task-list");
const filterBtns = document.getElementById("[data-filtrer]");
let currentFilter = "all";