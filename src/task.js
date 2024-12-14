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

    add(name, description, project) {
        this.#listItems.push(new Task(name, description, project));
        Events.emit("updateTasks");
    }
}

export const Tasks = new List;