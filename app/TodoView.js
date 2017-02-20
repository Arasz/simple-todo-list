var TodoView = (function (view) {

    TodoService.addTodo("Take cat to walk");
    TodoService.addTodo("Learn something cool");


    view.addTodo = function () {
        let todoDescription = document.querySelector('#todo-input').value;
        TodoService.addTodo(todoDescription);
        view.reloadView();
    };

    view.deleteTodo = function (id) {
        TodoService.deleteTodo(id);
        view.reloadView();
    };

    view.reloadView = function () {
        TodoRenderer.renderList(view.getTodos());
    }

    view.changeState = function (checkbox, id) {
        TodoService.changeState(checkbox.checked, id);
    };

    view.getTodos = function () {
        return TodoService.getTodos();
    };

    return view;

})(TodoView || {});

document.addEventListener("DOMContentLoaded", function (event) {
    TodoRenderer.renderList(TodoView.getTodos());
});