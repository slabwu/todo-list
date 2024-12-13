import "./styles.css";
import { compareAsc, format } from "date-fns";
import { go } from "./todos";
import { screen } from "./interface";

export const Display = (function() {

    screen.createButton("Add Project", () => {
        go.addProject("Test");
        console.log(go.getProjects());
    });
    screen.createButton("Add To Do", () => {
        go.addToDoTo("Default", "Dishes", "Clean the dishes")
        console.log(go.getToDosFrom("Default"));
    });


    go.addToDoTo("Default", "hi", "hihihi");
    go.addToDoTo("Default", "hi", "hihihi");
    screen.loadToDos("Default");
})();