import "./styles.css";
import { compareAsc, format } from "date-fns";
import { go } from "./todos";
import { screen } from "./interface";

export const Display = (function() {
    const toDoDialog = document.getElementById("toDoDialog");

    // screen.createButton("Add Project", content, () => {
    //     go.addProject("Test");
    //     console.log(go.getProjects());
    // });

    screen.createButton("Add To Do", content, () => {
        //go.addToDoTo("Default", "Dishes", "Clean the dishes")
        //screen.loadToDos("Default");
        toDoDialog.showModal();
    });

    go.addToDoTo("Default", "Eat", "Finish dinner");
    go.addToDoTo("Default", "Walk", "Walk the dog");
    screen.loadToDos("Default");
})();

const Dialog = (function() {
    confirmBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const titleInput = document.getElementById("title").value;
        const descriptionInput = document.getElementById("description").value;
        go.addToDoTo("Default", titleInput, descriptionInput);
        screen.loadToDos("Default");
        toDoDialog.close();
    });    
})();