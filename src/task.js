import { constructFrom } from "date-fns";

export class Task {
    constructor(name, description, project) {
        this.name = name;
        this.description = description;
        this.project = project;
        this.completed = false;
    }
}

export class List {
    #tasklist = [];
    get tasks() {
        return this.#tasklist;
    }
}

export function addTask(name, description, project) {
    console.log(new Task(name, description, project));
}