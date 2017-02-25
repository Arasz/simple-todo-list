var TodoService = (function (service) {

    service.readConfig = function(){
        service.address = "http://localhost:60033/api/todo";
    }

    service.readConfig();
    var proxy = new TodoWebServiceProxy(service.address);

    var _todos = [];
    var _todoFilter;

    service.getTodos = function () {
        return proxy.getAll()
        .then((todos) => {
            _todos = todos;
            if(_todoFilter)
                 _todos.filter((todo)=>_todoFilter.filter(todo));
            else
                return _todos;
        });

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