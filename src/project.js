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
    }

    add(name) {
        this.#projectList.push(new Project(name));
        Events.emit("updateProjects");
    }
}

export const Projects = new ProjectManager;