import { Events } from "./pubsub";
import { test, addElement, addTextElement, addButton, deleteElementsFrom, camelCase, addCheckbox, overdue, filterTasks, addIcon } from "./helper";
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
        addElement("mainContainer", "mainContainer", "main");
        addElement("footer", "footer", "content");

        addIcon("done_all", "header");
        addTextElement("Right Now", "h1", "header", "title");
        addTextElement(`${Projects.current}`, "h2", "mainContainer", "projectTitle");
        addElement("projectList", "div", "sidebar");
        addElement("taskList", "div", "mainContainer");
        addButton("Add Task", "mainContainer", () => {TaskDialog.open()});
    }

    render() {
        this.renderProjects();
        this.renderTasks();
    }

    renderProjects() {
        deleteElementsFrom("projectList");
        let icons = ["inbox", "star", "assignment_late", "watch_later", "format_list_bulleted"];
        Projects.list.forEach((project, index) => {
            if (index === 4) addTextElement('Projects', "h2", "projectList", "projects");
            let icon = (index <= 4) ? icons[index]: icons[4];
            addButton(`${project.name}`, "projectList", () => {
                project.setAsCurrent();
                [...document.querySelector("#projectList").children].forEach(project => {
                    project.classList.remove("active");
                });
                document.querySelector(`#${camelCase(Projects.current)}Btn`).classList.add("active");
            }, icon);
            if (index === 0) document.querySelector(`#inboxBtn`).classList.add("active");
        })
    }

    renderTasks() {
        document.querySelector(".projectTitle").textContent = `${Projects.current}`;

        deleteElementsFrom("taskList");
        let currentTasks = filterTasks(Tasks.list);
        currentTasks.forEach((task, index) => {
            let taskContainer = `task${index + 1}`;
            addElement(taskContainer, "div", "taskList", "task");

            addCheckbox(task, taskContainer);
            addTextElement(task.name, "p", taskContainer, "name");
            addTextElement(task.description, "p", taskContainer, "description");
            addTextElement(task.date, "p", taskContainer, "date");
            addElement("divider", "div", "taskList", "divider");

            let star = (task.priority) ? "star" : "star_outline";
            addIcon(star, taskContainer, (e) => {task.favourite()});
            addIcon("edit", taskContainer, () => {});
            addIcon("close", taskContainer, () => {});

            let elements = [...document.getElementById(`${taskContainer}`).children];

            if (task.completed) {
                elements.forEach(element => element.classList.add("completed"));
            } else {
                elements.forEach(element => element.classList.remove("completed"));
            }

            if (overdue(task.date)) {
                elements[3].classList.add("overdue");
            } else {
                elements[3].classList.remove("overdue");
            }
        })
    }
}

export const Screen = new Renderer;