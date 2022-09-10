let todoLists = ["hello"];

let container = document.getElementById("container");

function displayList() {
  for (let i = 0; todoLists.length > i; i++) {
    //div ee style tai hajuudaa <button onclick="removeTodo()">X</button>
    const todoList = document.createElement("div");
    todoList.innerText = todoLists[i];
    container.appendChild(todoList);
  }
}
function addTodo() {
  container.innerHTML = "";
  todoLists.unshift(document.getElementById("todoInput").value);
  displayList();
  window.localStorage.setItem("todoLists", todoLists);
}

//buren bish
// function removeTodo() {
//   container.innerHTML = "";
//   //neg ym bichne
//   displayList();
//   window.localStorage.setItem("todoLists", todoLists);
// }

displayList();

//Remove hiihdee ashiglah
//let filtered = todoLists.filter((el) => el != "Hicheeldee anhaarah");

//localStorage ashiglah zaawar
// window.localStorage.setItem("name", "Dashka");
// window.localStorage.getItem("name");



