import { Tasks } from "./task";
import { getDate } from "./helper";

export class Dialog {
    constructor(name) {
        this.name = name;
        this.reference = document.getElementById(`${name}`);
        this.answers = {};

        let closeBtn = document.getElementById("closeBtn");
        closeBtn.addEventListener("click", () => {
            this.close();
        });

        let confirmBtn = document.getElementById("confirmBtn");
        confirmBtn.addEventListener("click", (e) => {
            e.preventDefault();
            [...document.querySelector(`#${name} form`).children].forEach(element => {
                if (element.name) {
                    this.answers[element.name] = element.value;
                }
            });
            this.answers.date = (this.answers.date) ? new Date(this.answers.date).toLocaleDateString() : "";

            if (document.getElementById("dialogTitle").innerHTML === 'Add Task') {
                Tasks.add(`${this.answers.name}`,`${this.answers.description}`, `${this.answers.project}`, `${this.answers.date}`);
            }

            this.close();
        });
    }
    
    open() {
        document.getElementById("dialogTitle").innerHTML = 'Add Task';
        this.reference.showModal();
    }

    close() {
        this.reference.close();
        this.clear();
    }

    clear() {
        [...document.querySelector(`#${this.name} form`).children].forEach(element => {
            switch(element.name) {
                case 'name':
                case 'description':
                case 'date':
                    element.value = '';
                    break;
                case 'project':
                    element.value = 'Home';
                    break;
            }
        });
    }

    get source() {
        return this.reference;
    }

    async edit(fields) {
        this.open();
        document.getElementById("dialogTitle").innerHTML = 'Edit Task';
        [...document.querySelector(`#${this.name} form`).children].forEach(element => {
            if (element.name in fields) {
                if (element.name == 'date') {
                    element.value = getDate(fields.date);
                } else { 
                    element.value = fields[element.name];
                }
            }
        });

        await new Promise(resolve => {
            document.getElementById("confirmBtn").addEventListener('click', () => {
              resolve();
            }, { once: true });
        });

        return this.answers;
    }
}

export const TaskDialog = new Dialog("toDoDialog");