var TodoView = (function (view) {
    var _todos = [
        new Todo("Take cat to walk"),
        new Todo("Make dinner"),
        new Todo("Learn something cool")
    ];

    view.addTodo = function(){
        alert("Add!");
    };

    view.deleteTodo = function(id){
        alert("Delete");
        let removedTodo = _findTodo(id);
        _todos.splice(_todos.indexOf(removedTodo),1);
        reload();
    };

    view.reload = function(){
        TodoRenderer.renderList(getTodos());
    }

    _findTodo = function(id){
        return _todos.find((todo, index)=> todo.id === id);
    };

    view.changeState = function(checkbox, id){
        alert("Change!");
        let todo = _findTodo(id);
        todo.isCompleted = checkbox.checked;
    };

    view.getTodos = function(){
        return _todos;
    };

    return view;

})(TodoView || {});

document.addEventListener("DOMContentLoaded", function (event) {
    TodoRenderer.renderList(TodoView.getTodos());
});