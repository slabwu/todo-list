export class Task {
    constructor(name, description, project) {
        this.name = name;
        this.description = description;
        this.project = project;
        this.completed = false;
    }
}