var TodoService = (function (service) {

    var _todos = [];
    var _todoFilter;

    service.getTodos = function () {
        if(_todoFilter)
            return _todos.filter((todo)=>_todoFilter.filter(todo));
        else
            return _todos;
    };

    service.deleteTodo = function (id) {
        _todos = _todos.filter((toddo) => toddo.id !== id);
    };

    service.addTodo = function (description) {
        _todos.push(new Todo(description));
    };

    service.setFilter = function(todoFilter){
        _todoFilter = todoFilter;
    };

    service.changeState = function (isCompleted, id) {
        _getTodo(id).isCompleted = isCompleted;
    };

    function _getTodo (id) {
        return _todos.find((todo) => todo.id === id);
    };

    return service;

})(TodoService || {});