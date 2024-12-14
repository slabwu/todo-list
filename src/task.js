import { constructFrom } from "date-fns";
import { test } from "./helper";

export class Task {
    constructor(name, description, project) {
        this.name = name;
        this.description = description;
        this.project = project;
        this.completed = false;
    }
}

class List {
    #listItems = [];

    get list() {
        return this.#listItems;
    }
}

export const Tasks = new List();


export function addTask(name, description, project) {
    console.log(new Task(name, description, project));
}