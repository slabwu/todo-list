import { Tasks } from "./task";

export class Dialog {
    constructor(name) {
        this.name = name;
        this.reference = document.getElementById(`${name}`);
        this.answers = {};

        this.confirmBtn = document.getElementById("confirmBtn");
        confirmBtn.addEventListener("click", (e) => {
            e.preventDefault();
            [...document.querySelector(`#${name} form`).children].forEach(element => {
                if (element.name) {
                    this.answers[element.name] = element.value;
                }
            });
            Tasks.add(`${this.answers.name}`,`${this.answers.description}`, "Default");
            this.close();
        });
    }
    
    open() {
        this.reference.showModal();
    }

    close() {
        this.reference.close();
    }

    get source() {
        return this.reference;
    }
}

export const TaskDialog = new Dialog("toDoDialog");