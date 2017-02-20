var TodoView = (function (view) {

    TodoService.addTodo("Take cat to walk");
    TodoService.addTodo("Learn something cool");

    let _todoDesciptionInput = document.querySelector('#todo-input');

    view.addTodo = function () {
        TodoService.addTodo(_getAndClearDescription());
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

    function _getAndClearDescription(){
        let description = _todoDesciptionInput.value;
        _todoDesciptionInput.value = '';
        return description;
    }

    return view;

})(TodoView || {});

document.addEventListener("DOMContentLoaded", function (event) {
    TodoRenderer.renderList(TodoView.getTodos());
});