import "./styles.css";
import { compareAsc, format } from "date-fns";

class Controller {
    #projects = [];

    constructor() {
        this.#projects.push(new Project("Default"));
    }

    addProject(title) {
        this.#projects.push(new Project(title));
    }

    addToDoTo(project, title, description) {
        let currentProject = this.#projects.find((element) => element.title === project);
        if (!currentProject) throw new Error('Project does not exist!');
        currentProject.addToDo(title, description);
    }

    getToDosFrom = (project) => this.#projects.find((element) => element.title === project).getToDos();

    getProjects = () => this.#projects;
}

class Interface {
    //content = document.getElementById("content");
    constructor() {
        const content = document.createElement("div")
        document.body.appendChild(content)
        content.id = "content";

        const addProject = document.createElement("button");
        addProject.textContent = "Add Project";
        content.appendChild(addProject);
        addProject.addEventListener("click", () => {
            go.addProject("Test");
            console.log(go.getProjects());
        })
    }
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

const go = new Controller();
const start = new Interface();



