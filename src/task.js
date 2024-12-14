export class Task {
    constructor(name, description, project) {
        this.name = name;
        this.description = description;
        this.project = project;
        this.completed = false;
    }
}

export function addTask(name, description, project) {
    console.log(new Task(name, description, project));
}