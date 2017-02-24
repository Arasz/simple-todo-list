class ToDoWebServiceProxy {
    constructor(baseAddress){
        this.baseAddress = baseAddress;
    }

    getAll(){
        let request = new XMLHttpRequest();
        request.open("GET", this.baseAddress, false);
        request.setRequestHeader("Content-Type","application/json");
        request.send();
        return JSON.parse(request.response);
    }

    get(id){
        let request = new XMLHttpRequest();
        request.setRequestHeader("Content-Type","application/json");
    }

    create(todoItem){

    }

    update(id, todoItem){

    }

    delete(id){

    }
}