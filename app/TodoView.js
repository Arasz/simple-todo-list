document.addEventListener("DOMContentLoaded", function (event) {


    let todoList = [
        new Todo("Take cat to walk"),
        new Todo("Make dinner"),
        new Todo("Learn something cool")
    ];

    TodoRenderer.renderList(todoList);

})

var TodoView = (function (view) {
    let _todos = [
        new Todo("Take cat to walk"),
        new Todo("Make dinner"),
        new Todo("Learn something cool")
    ];

    view.addTodo = function(){
        alert("Add!");
    }

    view.deleteTodo = function(id){
        alert("Delete");
        let removedTodo = _findTodo(id);
        _todos.splice(_todos.indexOf(removedTodo),1);
    }

    _findTodo = function(id){
         _todos.find((todo, index)=> todo.id === id);
    }

    view.changeState = function(checkbox, id){
        alert("Change!");
        let todo = _findTodo(id);
        todo.isCompleted = checkbox.checked;
    }

    return view;

})(TodoView || {});