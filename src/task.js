import { constructFrom } from "date-fns";
import { test } from "./helper";
import { Events } from "./pubsub";

export class Task {
    constructor(name, description, project, date = undefined) {
        this.name = name;
        this.description = description;
        this.project = project;
        this.date = date;
        this.completed = false;
        this.priority = false;
    }

    favourite() {
        this.priority = (this.priority) ? false : true;
        Events.emit("updateTasks")
    }

    edit() {

    }

    delete() {

    }
}

class List {
    #listItems = [];

    get list() {
        return this.#listItems;
    }

    add(name, description, project, date) {
        this.#listItems.push(new Task(name, description, project, date));
        Events.emit("updateTasks");
    }
}

export const Tasks = new List;