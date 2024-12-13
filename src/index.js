import "./styles.css";
import { compareAsc, format } from "date-fns";
import { go } from "./todos";
import { screen } from "./interface";

export const Display = (function() {

    // screen.createButton("Add Project", content, () => {
    //     go.addProject("Test");
    //     console.log(go.getProjects());
    // });
    screen.createButton("Add To Do", content, () => {
        go.addToDoTo("Default", "Dishes", "Clean the dishes")
        console.log(go.getToDosFrom("Default"));
        screen.loadToDos("Default");
    });


    go.addToDoTo("Default", "Eat", "Finish dinner");
    go.addToDoTo("Default", "Walk", "Walk the dog");
    screen.loadToDos("Default");
})();