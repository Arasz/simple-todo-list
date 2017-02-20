var TodoService = (function (service) {

    var _todos = [];

    service.getTodos = function () {
        return _todos;
    };

    service.deleteTodo = function (id) {
        _todos = _todos.filter((toddo) => toddo.id !== id);
    };

    service.addTodo = function (description) {
        _todos.push(new Todo(description));
    };

    service.changeState = function (isCompleted, id) {
        _getTodo(id).isCompleted = isCompleted;
    };

    function _getTodo (id) {
        return _todos.find((todo) => todo.id === id);
    };

    return service;

})(TodoService || {});