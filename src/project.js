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

    add(project) {
        this.#projectList.push(project);
        Events.emit("updateProjects");
    }
}

export const Projects = new ProjectManager;

export function addProject(name) {
        Projects.add(new Project(name));
}