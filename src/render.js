import { Events } from "./pubsub";
import { test, addElement, addButton, deleteElementsFrom } from "./helper";
import { Tasks } from "./task";
import { Projects } from "./project";
import { TaskDialog } from "./dialog";

class Renderer {
    constructor() {
        Events.on("updateTasks", this.renderTasks);
        Events.on("updateProjects", this.renderProjects);

        addElement("content", "div", "body");
        addElement("header", "header", "content");
        addElement("sidebar", "nav", "content");
        addElement("main", "main", "content");
        addElement("footer", "footer", "content");

        addElement("Right Meow", "h1", "header", "title", true);
        addElement("Inbox", "h2", "main", "projectTitle", true);
        addButton("Add Task", "main", () => {TaskDialog.open()});
        addElement("projectList", "div", "sidebar");
        addElement("taskList", "div", "main");
    }

    render() {
        this.renderProjects();
        this.renderTasks();
    }

    renderProjects() {
        deleteElementsFrom("projectList");
        Projects.list.forEach((project) => {
            addButton(`${project.name}`, "projectList", () => {});
        })
    }

    renderTasks() {
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