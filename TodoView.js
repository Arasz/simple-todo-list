document.addEventListener("DOMContentLoaded", function(event){
    
    var addTodoBtn = document.querySelector("#add-todo-btn");
    var todoInput = document.querySelector("#todo-input");

    addTodoBtn.addEventListener("click", function(event){
        var todoText = todoInput.value;
        alert(todoText);
    })
})