// let todoLists = window.localStorage.getItem("todoLists").split(",");

// let container = document.getElementById("container");

// function displayList() {
//   for (let i = 0; todoLists.length > i; i++) {
    //div ee style tai hajuudaa <button onclick="removeTodo()">X</button>
//     const todoList = document.createElement("div");
//     todoList.innerText = todoLists[i];
//     container.appendChild(todoList);
//   }
// }
// function addTodo() {
//   container.innerHTML = "";
//   todoLists.unshift(document.getElementById("todoInput").value);
//   displayList();
//   window.localStorage.setItem("todoLists", todoLists);
// }

//buren bish
// function removeTodo() {
//   container.innerHTML = "";
//   //neg ym bichne
//   displayList();
//   window.localStorage.setItem("todoLists", todoLists);
// }

// displayList();

//Remove hiihdee ashiglah
//let filtered = todoLists.filter((el) => el != "Hicheeldee anhaarah");

//localStorage ashiglah zaawar
// window.localStorage.setItem("name", "Dashka");
// window.localStorage.getItem("name");

document.querySelector('#btn').onclick = function(){
  if(document.querySelector('#toDoMake input').value.length == 0){
      alert("Kindly Enter Task Name!!!!")
  }

  else{
      document.querySelector('#toDoLists').innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector('#toDoMake input').value}
              </span>
              <button class="delete">
                  <i class="fa fa-trash-o"></i>
              </button>
          </div>
      `;

      var current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }
  }
}
