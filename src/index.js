import "./styles.css";
import { compareAsc, format } from "date-fns";
import { Task, Tasks, addTask } from "./task";
import { Project, Projects, addProject } from "./project";
import { test } from "./helper";
import { Events } from "./pubsub";
import { Screen } from "./render";

Screen.render();

Tasks.add("Eat", "Finish dinner", "Inbox");
Tasks.add("Walk", "Take a stroll with the dog", "Inbox");
Tasks.add("Clean", "Tidy up the room", "Inbox");

addProject("Inbox");
addProject("Home");
addProject("Work");
addProject("Study");


