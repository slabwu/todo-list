import "./styles.css";
import { compareAsc, format } from "date-fns";
import { Task, Tasks, addTask } from "./task";
import { Project, Projects, addProject } from "./project";
import { test } from "./helper";
import { Events } from "./pubsub";
import { Screen } from "./render";

Screen.render();

let defaultTasks = [
    ["Eat", "Finish dinner", "Home"],
    ["Walk", "Take a stroll with the dog", "Home"],
    ["Clean", "Tidy up the room", "Home"],
    ["Fix", "Fix the ceiling light", "Home"],
    ["Report", "Submit financial report", "Work"],
    ["Essay", "Edit conclusion of essay", "Study"]
];
defaultTasks.forEach(task => Tasks.add(task[0], task[1], task[2]));

let defaultProjects = [ "Inbox", "Home", "Work", "Study" ];
defaultProjects.forEach(project => Projects.add(project));
