import "./styles.css";
import { compareAsc, format } from "date-fns";
import { Task, Tasks, addTask } from "./task";
import { Project, Projects, addProject } from "./project";
import { test } from "./helper";
import { Events } from "./pubsub";
import { Screen } from "./render";

Screen.render();

addTask("Eat", "Finish dinner", "Inbox");
addTask("Walk", "Take a stroll with the dog", "Inbox");
addTask("Clean", "Tidy up the room", "Inbox");

addProject("Inbox");
addProject("Home");
addProject("Work");
addProject("Study");


