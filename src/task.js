import { constructFrom } from "date-fns";
import { test } from "./helper";
import { Events } from "./pubsub";
import { TaskDialog } from "./dialog";

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
        Events.emit("updateTasks");
    }

    async edit() {
        let fields = await TaskDialog.edit({name: this.name, description: this.description, project: this.project, date: this.date});
        this.name = fields.name;
        this.description = fields.description;
        this.project = fields.project;
        this.date = fields.date;
        Events.emit("updateTasks");
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

    delete(task) {
        this.#listItems = this.list.filter(tasks => tasks.name != task.name);
        Events.emit("updateTasks");
    }
}

export const Tasks = new List;