import { Events } from "./pubsub";
import { test, addElement, addButton, deleteElementsFrom, camelCase, addCheckbox } from "./helper";
import { Tasks } from "./task";
import { Project, Projects } from "./project";
import { TaskDialog } from "./dialog";

class Renderer {
    projectTitle;
    constructor() {
        Events.on("updateTasks", this.renderTasks);
        Events.on("updateProjects", this.renderProjects);

        addElement("content", "div", "body");
        addElement("header", "header", "content");
        addElement("sidebar", "nav", "content");
        addElement("main", "main", "content");
        addElement("footer", "footer", "content");

        addElement("Right Meow", "h1", "header", "title", true);
        addElement(`${Projects.current}`, "h2", "main", "projectTitle", true);
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
            addButton(`${project.name}`, "projectList", () => {
                project.setAsCurrent();
                [...document.querySelector("#projectList").children].forEach(project => {
                    project.classList.remove("active");
                });
                document.querySelector(`#${camelCase(Projects.current)}Btn`).classList.add("active");
                
            });
        })
    }

    renderTasks() {
        document.querySelector(".projectTitle").textContent = `${Projects.current}`;

        deleteElementsFrom("taskList");
        let currentTasks = (Projects.current === "Inbox")? Tasks.list : Tasks.list.filter(task => task.project === Projects.current);
        currentTasks.forEach((task, index) => {
            let taskContainer = `task${index + 1}`;
            addElement(taskContainer, "div", "taskList", "task");

            addCheckbox(task, taskContainer);
            addElement(task.name, "p", taskContainer, "name", true);
            addElement(task.description, "p", taskContainer, "description", true);
        })
    }
}

export const Screen = new Renderer;