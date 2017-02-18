document.addEventListener("DOMContentLoaded", function(event){
    
    addTodoBtn = document.querySelector("#add-todo-btn");
    todoInput = document.querySelector("todo-input");

    addTodoBtn.addEventListener("click", function(event){
        alert(todoInput.value);
    })
})