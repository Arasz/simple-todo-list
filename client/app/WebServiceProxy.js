class TodoWebServiceProxy {
    constructor(baseAddress) {
        this.baseAddress = baseAddress;
    }

    makeRequest(method = "GET", relativeAddress = "", body = null) {
        let promise = new Promise((resolve, reject) => {

            let request = new XMLHttpRequest();

            request.onerror = (e) => {
                let error = new TodoException(request.status, request.statusText === "" ? "Connection error" : request.statusText);
                reject(error);
            };

            request.onload = (e) => {

                if(request.status >= 400)
                    request.onerror();
                else if (request.response === "")
                    resolve();
                else
                    resolve(JSON.parse(request.response));
            };

            request.open(method, this.baseAddress + relativeAddress);
            request.setRequestHeader("Content-Type", "application/json");
            request.send(JSON.stringify(body));
        });
        return promise;
    }

    getAll() {
        return this.makeRequest();
    }

    get(id) {
        return this.makeRequest("GET", `/${id}`);
    }

    create(todoItem) {
        return this.makeRequest("POST", "", todoItem);
    }

    update(id, todoItem) {
        return this.makeRequest("PUT", `/${id}`, todoItem);
    }

    delete(id) {
        return this.makeRequest("DELETE", `/${id}`);
    }
}