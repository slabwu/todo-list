import { Events } from "./pubsub";
import { test, addElement } from "./helper";
import { Tasks } from "./task";

class Renderer {
    constructor() {
        Events.on("update", this.render);
        addElement("content", "div", "body");
        addElement("taskList", "div", "content");
    }

    render() {
        Tasks.list.forEach((task, index) => {
            let taskContainer = `task${index+1}`;
            addElement(taskContainer, "div", "taskList");
            addElement(task.name, "p", taskContainer, true);
            addElement(task.description, "p", taskContainer, true);
        })
    }
}

export const Screen = new Renderer();