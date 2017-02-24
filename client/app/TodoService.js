var TodoService = (function (service) {

    var proxy = new TodoWebServiceProxy("http://localhost:60033/api/todo");

    var _todos = [];
    var _todoFilter;

    service.getTodos = function () {
        _todos = proxy.getAll();
        if(_todoFilter)
            return _todos.filter((todo)=>_todoFilter.filter(todo));
        else
            return _todos;
    };

    service.deleteTodo = function (id) {
        proxy.delete(id);
    };

    service.addTodo = function (description) {
        proxy.create(new Todo(description));
    };

    service.setFilter = function(todoFilter){
        _todoFilter = todoFilter;
    };

    service.changeState = function (isCompleted, id) {
        let todo  =_getTodo(id);
        todo.isCompleted = isCompleted;
        proxy.update(id, todo);
    };

    function _getTodo (id) {
        return _todos.find((todo) => todo.id === id);
    };

    return service;

})(TodoService || {});