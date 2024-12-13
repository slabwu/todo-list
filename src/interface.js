export class Interface {
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

        const addToDo = document.createElement("button");
        addToDo.textContent = "Add To Do";
        content.appendChild(addToDo);
        addToDo.addEventListener("click", () => {
            go.addToDoTo("Default", "Dishes", "Clean the dishes")
            console.log(go.getToDosFrom("Default"));
        })
    }
}