export class Dialog {
    #reference;
    constructor(name) {
        this.name = name;
        this.#reference = document.getElementById(`${name}`);
    }
    
    open() {
        this.#reference.showModal();
    }

    getElement() {
        return this.#reference;
    }
}

export const TaskDialog = new Dialog("toDoDialog");