import "./styles.css";
import { compareAsc, format } from "date-fns";

class Controller {
    projects = [];
    defaultProject = new Project("Default");

    constructor() {
        this.projects.push(this.defaultProject);
    }
    test() {
        console.log('works');
    }

    getProjects = () => this.projects;
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

console.log(go.defaultProject)
console.log(go.projects)

