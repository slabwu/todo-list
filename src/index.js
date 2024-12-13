import "./styles.css";
import { compareAsc, format } from "date-fns";

class Controller {
    #projects = [];

    constructor() {
        this.#projects.push(new Project("Default"));
    }

    addProject(title) {
        this.#projects.push(new Project(`${title}`));
    }

    addToDo(title, description, project) {
        let currentProject = this.#projects.find((element) => element.title === project);
        if (!currentProject) throw new Error('Project does not exist!');
        currentProject.addToDo(title, description);
    }

    getToDos = (project) => this.#projects.find((element) => element.title === project).getToDos();

    getProjects = () => this.#projects;
}

// class Interface {
    
// }

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

const go = new Controller();



go.addToDo("meow", "meow meow", "Default");
go.addToDo("meow", "meow meow meow", "Default");

console.log(go.getToDos("Default"));



