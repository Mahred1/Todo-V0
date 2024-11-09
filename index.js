let todoList= document.querySelector(".task-items");
let addButton = document.querySelector(".add-button");
let myInput = document.getElementById("my-input");


addButton.addEventListener("click",function(e){
    let newElement=document.createElement('div');
    newElement.classList.add("task-item");
    todoList.appendChild(newElement);
    let newList = document.createElement("li");
    newList.classList.add("item");
    newList.innerText = myInput.value;
    newElement.appendChild(newList);
    let trashCan = document.createElement("button");
    trashCan.classList.add("trash-can");
    trashCan.innerHTML ='<i class="fa fa-trash-can fa-lg"></i>';
    newElement.appendChild(trashCan);
    let checkBox= document.createElement("button");
    checkBox.classList.add("check-box");
    checkBox.innerHTML='<i class="fa fa-check-square fa-lg"></i>';
    newElement.appendChild(checkBox);
    myInput.value="";


    e.preventDefault();
});

