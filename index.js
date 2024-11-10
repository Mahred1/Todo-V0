let todoList= document.querySelector(".task-items");
let addButton = document.querySelector(".add-button");
let myInput = document.getElementById("my-input");
let filter = document.querySelector(".filter-todo");


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
   
    trashCan.childNodes[0].addEventListener("click", removeTodo);
    checkBox.addEventListener("click",completeTodo);
    filter.addEventListener("click",filterTodo);

});

//remove to do 

function removeTodo(e){
    e.target.parentNode.parentNode.classList.add("fall");
    e.target.parentNode.parentNode.addEventListener("transitionend", function(e){
        e.target.classList.add("remove");
    })
    
    e.stopPropagation();
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
                   break;
            
               default:
                   break;
            }
         }
    });
     
    
}



