import { Events } from "./pubsub";

export class Project {
    constructor(name) {
        this.name = name;
    }

    setAsCurrent() {
        Projects.current = this.name;
        Events.emit("updateTasks");
    }
}

class ProjectManager {
    #projectList = [];
    #currentProject = "Inbox";

    get list() {
        return this.#projectList;
    }

    get current() {
        return this.#currentProject;
    }

    set current(project) {
        this.#currentProject = project;
        Events.emit("updateProjects");
        Events.emit("updateTasks");
    }

    add(name) {
        this.#projectList.push(new Project(name));
        Events.emit("updateProjects");
    }

    delete(project) {
        this.#projectList = this.list.filter(projects => projects.name != project.name);
        if (this.current === project.name) {
            this.current = "Inbox";
        }
        Events.emit("updateProjects");
        Events.emit("updateTasks");
    }
}

export const Projects = new ProjectManager;
Events.on("updateProjects", () => {localStorage.setItem('projects', JSON.stringify(Projects.list))});