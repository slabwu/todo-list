import { Events } from "./pubsub";
import { test, addElement, addButton, deleteElementsFrom } from "./helper";
import { Tasks } from "./task";
import { TaskDialog } from "./dialog";

class Renderer {
    constructor() {
        Events.on("update", this.render);
        addElement("content", "div", "body");

        addElement("header", "header", "content");
        addElement("sidebar", "nav", "content");
        addElement("main", "main", "content");
        addElement("footer", "footer", "content");

        addButton("Add Task", "main", () => {TaskDialog.open()});
        addElement("taskList", "div", "main");
    }

    render() {
        deleteElementsFrom("taskList");
        Tasks.list.forEach((task, index) => {
            let taskContainer = `task${index+1}`;
            addElement(taskContainer, "div", "taskList", "task");
            addElement(task.name, "p", taskContainer, "name", true);
            addElement(task.description, "p", taskContainer, "description", true);
        })
    }
}

export const Screen = new Renderer;