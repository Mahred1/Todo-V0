let todoList= document.querySelector(".task-items");
let addButton = document.querySelector(".add-button");
let myInput = document.getElementById("my-input");


addButton.addEventListener("click",function(e){
    let newElement=document.createElement('li');
    newElement.classList.add("task-item");
    newElement.innerText = myInput.value;
    todoList.appendChild(newElement);
    myInput.value="";

    newElement.addEventListener("click",function(e){
        e.target.classList.add("remove");
    });

    e.preventDefault();
});