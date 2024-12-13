import "./styles.css";
import { compareAsc, format } from "date-fns";

class Controller {
    #projects = [];

    constructor() {
        this.#projects.push(new Project("Default"));
    }
    test() {
        console.log('works');
    }

    getProjects = () => this.#projects;
}

// class Interface {
    
// }

class Project {
    constructor(title) {
        this.title = title;
    }
}

// class ToDo {
//     constructor(title, description) {
        
//     }
// }

const go = new Controller();


console.log(go.getProjects())

