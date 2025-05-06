import { Tasks } from "./task";
import { Project, Projects } from "./project";
import { Events } from "./pubsub";
import { getDate } from "./helper";

export class Dialog {
    constructor(name) {
        this.name = name;
        this.reference = document.getElementById(`${name}`);
        this.answers = {};

        Events.on("updateProjects", this.populate);
        
        if (name === "toDoDialog") {
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
        } else if (name === "projectDialog") {
            let projectCloseBtn = document.getElementById("projectCloseBtn");
            projectCloseBtn.addEventListener("click", () => {
                this.close();
            });
    
            let projectConfirmBtn = document.getElementById("projectConfirmBtn");
            projectConfirmBtn.addEventListener("click", (e) => {
                e.preventDefault();
                [...document.querySelector(`#projectDialog form`).children].forEach(element => {
                    if (element.name && element.value) {
                        Projects.add(element.value)
                    }
                });
    
                this.close();
            });
        }};
    
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

    populate() {
        let options = document.getElementById("project");
        options.innerHTML = '';
        let projects = Projects.list;
        for (let i = 4; i < projects.length; i++) {
            const element = document.createElement("option");
            element.value = projects[i].name;
            element.innerHTML = projects[i].name;
            options.appendChild(element);
        }
    }
}

export const TaskDialog = new Dialog("toDoDialog");
export const ProjectDialog = new Dialog("projectDialog");