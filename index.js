let todoList= document.querySelector(".task-items");
let addButton = document.querySelector(".add-button");
let myInput = document.getElementById("my-input");
let filter = document.querySelector(".filter-todo");


createLocalTodos();
addButton.addEventListener("click",function(e){

    //add new todo div
    let newElement=document.createElement('div');
    newElement.classList.add("task-item");
    todoList.appendChild(newElement);

    //add todo li
    let newList = document.createElement("li");
    newList.classList.add("item");
    newList.innerText = myInput.value;
    newElement.appendChild(newList);
    // save to do to local storage

    saveLocalTodos(myInput.value);

    //add remove button
    let trashCan = document.createElement("button");
    trashCan.classList.add("trash-can");
    trashCan.innerHTML ='<i class="fa fa-trash-can fa-lg"></i>';
    newElement.appendChild(trashCan);

    //add check-box button
    let checkBox= document.createElement("button");
    checkBox.classList.add("check-box");
    checkBox.innerHTML='<i class="fa fa-check-square fa-lg"></i>';
    newElement.appendChild(checkBox);


    myInput.value="";

    e.preventDefault();
   
    checkBox.addEventListener("click",completeTodo);
    filter.addEventListener("click",filterTodo);
    trashCan.childNodes[0].addEventListener("click", removeTodo);

});

//remove to do 

function removeTodo(e){

        e.target.parentNode.parentNode.classList.add("fall");
        removeLocalTodo(e);
        e.target.parentNode.addEventListener("transitionend", function(e){
            e.target.parentNode.classList.add("remove");
        })
    e.stopPropagation();
}

// remove local todos

function removeLocalTodo(event){
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos =[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
 let todoContent =event.target.parentNode.parentNode.childNodes[0].innerText;
 todoIndex=todos.indexOf(todoContent);
 todos.splice(todoIndex,1);
 localStorage.setItem("todos",JSON.stringify(todos));

}
//completed to do
function completeTodo(e){
    let listTodo=e.target.parentNode.parentNode.children[0];
    listTodo.classList.toggle("complete");
}

//filter to do
function filterTodo(e){
    let todoTask = document.querySelector(".task-items").childNodes;
    todoTask.forEach(element => {
        if (element.childNodes[0].classList.contains("item")) {
            switch (e.target.value) {
               case "all":
                    element.style.display = "flex";
                   break;
               case "completed":
                    if (element.childNodes[0].classList.contains("complete")) {
                        element.style.display = "flex";
                    } else {
                        element.style.display = "none";
                    }
                   break;
               case "uncompleted":
                if (!element.childNodes[0].classList.contains("complete")) {
                    element.style.display = "flex";
                } else {
                    element.style.display = "none";
                }
                  
            }
         }
    });
     
    
}

//Save to lacla storage
function saveLocalTodos(input){
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos =[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(input);
    localStorage.setItem("todos",JSON.stringify(todos));
   
}

//create local todos
function createLocalTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos =[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    

    todos.forEach(element => {
        //add new todo div
    let newElement=document.createElement('div');
    newElement.classList.add("task-item");
    todoList.appendChild(newElement);

    //add todo li
    let newList = document.createElement("li");
    newList.classList.add("item");
   
    newList.innerText = element;
    newElement.appendChild(newList);
    // save to do to local storage

    //add remove button
    let trashCan = document.createElement("button");
    trashCan.classList.add("trash-can");
    trashCan.innerHTML ='<i class="fa fa-trash-can fa-lg"></i>';
    newElement.appendChild(trashCan);

    //add check-box button
    let checkBox= document.createElement("button");
    checkBox.classList.add("check-box");
    checkBox.innerHTML='<i class="fa fa-check-square fa-lg"></i>';
    newElement.appendChild(checkBox); 

    myInput.value="";
   
    checkBox.addEventListener("click",completeTodo);
    filter.addEventListener("click",filterTodo);
    trashCan.childNodes[0].addEventListener("click", removeTodo);
    });

}



