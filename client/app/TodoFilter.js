class TodoFilter {
    constructor(predicate){
        this.predicate = predicate;
    }

    filter(todo){
        return this.predicate(todo);
    }
}