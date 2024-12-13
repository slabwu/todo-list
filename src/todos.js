class Controller {
    #projects = [];

    constructor() {
        this.#projects.push(new Project("Default"));
    }

    addProject(title) {
        this.#projects.push(new Project(title));
    }

    getProjects = () => this.#projects;

    addToDoTo(project, title, description) {
        let currentProject = this.#projects.find((element) => element.title === project);
        if (!currentProject) throw new Error('Project does not exist!');
        currentProject.addToDo(title, description);
    }

    getToDosFrom = (project) => this.#projects.find((element) => element.title === project).getToDos();
}

class Project {
    #todos = [];

    constructor(title) {
        this.title = title;
    }

    getToDos = () => this.#todos;

    addToDo(title, description) {
        this.#todos.push(new ToDo(title, description));
    }
}

class ToDo {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

export const go = new Controller();