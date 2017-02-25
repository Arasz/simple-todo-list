var TodoView = (function (view) {


    let _todoDesciptionInput = document.querySelector('#todo-input');

    view.addTodo = function () {
        TodoService.addTodo(_getAndClearDescription());
        TodoService.setFilter(null);
        view.reloadView();
    };

    view.deleteTodo = function (id) {
        TodoService.deleteTodo(id)
            .then((result) => {
                view.reloadView();
            })
            .catch((error) => {
                view.displayError(error);
            });
    };

    view.showCompleted = function (showCompleted) {
        TodoService.setFilter(new TodoFilter((todo) => todo.isCompleted === showCompleted));
        view.reloadView();
    }

    view.showWithSimilarDescription = function () {
        let partialDescription = _todoDesciptionInput.value;
        TodoService.setFilter(new TodoFilter((todo) => todo.description.includes(partialDescription)));
        view.reloadView();
    }

    view.showAll = function () {
        TodoService.setFilter(null);
        view.reloadView();
    }

    view.reloadView = function () {
        view.getTodos().then((todos) => {
            TodoRenderer.renderList(todos);
        })
    }

    view.changeState = function (checkbox, id) {
        TodoService.changeState(checkbox.checked, id);
    };

    view.getTodos = function () {
        return TodoService.getTodos();
    };

    function _getAndClearDescription() {
        let description = _todoDesciptionInput.value;
        _todoDesciptionInput.value = '';
        return description;
    }

    view.displayError = function (error) {
        alert(error.message);
    }

    return view;

})(TodoView || {});

document.addEventListener("DOMContentLoaded", function (event) {
    TodoView.getTodos()
        .then((todos) => TodoRenderer.renderList(todos))
        .catch((error) => TodoView.displayError(error));

});