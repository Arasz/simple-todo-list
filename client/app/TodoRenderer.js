
var TodoRenderer = (function(renderer){


    let _listRoot = null;
    let _rootElementId = "#todo-list-root";


    
    renderer.renderList = function(todoList){
        _initializeRoot();

        todoList.forEach(function(todo) {
            _createTodoItem(todo)
        }, this);
    };

    function _initializeRoot(){
        if(!_listRoot)
            _listRoot = document.querySelector(_rootElementId);
        else
            _clearItems();
    }

    function _clearItems(){
        while(_listRoot.firstChild)
            _listRoot.removeChild(_listRoot.firstChild);
    }

    function _createTodoItem(todo){
        _listRoot.innerHTML += _createTodoFromTemplate(todo);
    }

    function _createTodoFromTemplate(todo){
        return ` <div class="panel panel-default">
                <div  class="panel-body">
                <div class="row">
                    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <p class="todo-description"> ${todo.description} </p>
                    </div>
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <label>
                            <input type="checkbox" onClick="TodoView.changeState(this, ${todo.id});" ${todo.isCompleted? 'checked' : ''}> 
                        Is completed 
                        </label>
                    </div>
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <button id="add-todo-btn" type="button" class="btn btn-danger btn-block"  onclick="TodoView.deleteTodo(${todo.id});">Delete</button>
                    </div>
                </div>
                </div>
                </div>`;
    }

    return renderer;

}(TodoRenderer || {}))
// Module Pattern