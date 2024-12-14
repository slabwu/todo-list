import { Events } from "./pubsub";

export class Project {
    constructor(name) {
        this.name = name;
    }
}

class ProjectManager {
    #projectList = [];
    #currentProject;

    get list() {
        return this.#projectList;
    }

    get current() {
        return this.#currentProject;
    }

    add(name) {
        this.#projectList.push(new Project(name));
        Events.emit("updateProjects");
    }
}

export const Projects = new ProjectManager;