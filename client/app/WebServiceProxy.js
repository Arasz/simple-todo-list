class TodoWebServiceProxy {
    constructor(baseAddress){
        this.baseAddress = baseAddress;
        this.request = null;
    }

    get currentRequest(){
        if(this.request === null)
        {
            this.request = new XMLHttpRequest();
        }
        return this.request;
    }

    makeRequest(method = "GET", relativeAddress = ""){
        let promise = new Promise((resolve, reject) => {
            let request = this.currentRequest;
            request.onerror = (e) => {
                let error = new TodoException(request.status, request.statusText);
                reject(error);
            };
            request.onload = (e) => {
                if(request.response == null)
                    resolve();
                else
                    resolve(JSON.parse(request.response));
            };
            request.open(method, this.baseAddress + relativeAddress);
            request.setRequestHeader("Content-Type","application/json");
            request.send();
        })
        return promise;
    }

    getAll(){
        return this.makeRequest();
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
        request.open("PUT", `${this.baseAddress}/${id}`, false);
        request.setRequestHeader("Content-Type","application/json");
        request.send(JSON.stringify(todoItem));
    }

    delete(id){
       return makeRequest("DELETE", `/${id}`);
    }
}