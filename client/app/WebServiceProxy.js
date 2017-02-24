class TodoWebServiceProxy {
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
        request.open("GET", `${this.baseAddress}/${id}`, false);
        request.setRequestHeader("Content-Type","application/json");
        request.send();
        return JSON.parse(request.response);
    }

    create(todoItem){
        let request = new XMLHttpRequest();
        request.open("POST", `${this.baseAddress}`, false);
        request.setRequestHeader("Content-Type","application/json");
        request.send(JSON.stringify(todoItem));
    }

    update(id, todoItem){
        let request = new XMLHttpRequest();
        request.open("PUT", `${this.baseAddress}/${id}`);
        request.setRequestHeader("Content-Type","application/json");
        request.send(JSON.stringify(todoItem));
    }

    delete(id){
        let request = new XMLHttpRequest();
        request.open("DELETE", `${this.baseAddress}/${id}`);
        request.setRequestHeader("Content-Type","application/json");
        request.send();
    }
}