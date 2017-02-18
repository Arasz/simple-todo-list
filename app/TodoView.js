document.addEventListener("DOMContentLoaded", function(event){
    

    let todoList = [
        new Todo("Take cat to walk"),
        new Todo("Make dinner"),
        new Todo("Learn something cool")
    ];

    TodoRendere.renderList(todoList);

})