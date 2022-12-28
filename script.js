// Get references to the form, list, and buttons
const form = document.querySelector("form");
const list = document.querySelector("ul");
// const clearBtn = document.querySelector("#clear-btn");
// const completeBtn = document.querySelector("#complete-btn");

// An array to store the todo items
let todos = [];

// A function to add a new todo item to the list
function addTodo(text) {
  const li = document.createElement("li");
  const removeBtn = document.createElement("span");
  removeBtn.classList.add("material-symbols-outlined");
  removeBtn.textContent = "delete_forever";

  removeBtn.addEventListener("click", () => {
    removeBtn.parentElement.remove("li");
    localStorage.removeItem();
    todos = [];
  });

  li.innerHTML = text;
  li.appendChild(removeBtn);
  list.appendChild(li);
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = form.querySelector("input");
  const text = input.value;
  input.value = "";

  // Add the todo item to the list and the array
  addTodo(text);
  todos.push(text);

  localStorage.setItem(text, JSON.stringify(todos));
});

// Load the tasks from local storage when the page loads
const storedTasks = JSON.parse(localStorage.getItem(text));
if (storedTasks) {
  todos = storedTasks;
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

// activation navigatio buttons

const all = document.querySelector(".all");
const active = document.querySelector(".active");
const complete = document.querySelector(".complete");
const lists = document.querySelectorAll("li");

active.addEventListener("click", () => {
  all.classList.remove("actived");
  complete.classList.remove("actived");
  active.classList.add("actived");
  lists.forEach((i) => {
    if (i.className == "completed") {
      i.style.display = "none";
    } else if (i) {
      i.style.display = "flex";
    }
  });
});
complete.addEventListener("click", () => {
  active.classList.remove("actived");
  all.classList.remove("actived");
  complete.classList.add("actived");
  lists.forEach((i) => {
    if (i.className == "completed") {
      i.style.display = "flex";
    } else {
      i.style.display = "none";
    }
  });
});
all.addEventListener("click", () => {
  active.classList.remove("actived");
  all.classList.add("actived");
  complete.classList.remove("actived");
  lists.forEach((i) => {
    if (i) {
      i.style.display = "flex";
    } else {
      i.style.display = "none";
    }
  });
});
// console.log(list.childNodes);
