import { constructFrom } from "date-fns";
import { test } from "./helper";
import { Events } from "./pubsub";

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

    add(task) {
        this.#listItems.push(task);
        Events.emit("update");
    }
}

export const Tasks = new List();


export function addTask(name, description, project) {
    Tasks.add(new Task(name, description, project));
}