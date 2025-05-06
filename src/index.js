import "./styles.css";
import { compareAsc, format } from "date-fns";
import { Task, Tasks, addTask } from "./task";
import { Project, Projects, addProject } from "./project";
import { test } from "./helper";
import { Events } from "./pubsub";
import { Screen } from "./render";

Screen.render();

let defaultTasks = [
    ["Dinner", "Prepare chicken and marinade", "Home", "11/12/2024"],
    ["Walk", "Take a stroll with the dog", "Home", "06/03/2025"],
    ["Meeting", "Write up meeting minutes from yesterday", "Work", "14/04/2025"],
    ["Clean", "Tidy up the living room", "Home", "30/11/2024"],
    ["Dishes", "Wash up dishes", "Home", "03/11/2025"],
    ["Slides", "Present competitive research analysis", "Work", "16/10/2026"],
    ["Email", "Reply to email regarding open tickets", "Work", "22/07/2025"],
    ["Thesis", "Draft body structure and main arguments", "Study", "01/05/2026"],
    ["Revise", "Read Chapter 4-6 and prepare notes", "Study", "28/01/2025"],
    ["Repair", "Buy a new bulb to fix the ceiling light", "Home", "06/06/2025"],
    ["Report", "Submit financial report to HR", "Work", "15/10/2025"],
    ["Essay", "Edit conclusion and add references", "Study", "12/04/2025"],
    ["Homework", "Complete exercise problems", "Home", "02/12/2026"],
    ["Finals", "Finish practice paper 1 & 2", "Study", "09/09/2025"]
];
let tasks = localStorage.getItem('tasks')
tasks = '';

if (tasks && JSON.parse(tasks).length > 1) {
    JSON.parse(tasks).forEach(task => Tasks.add(task.name, task.description, task.project, task.date, task.completed, task.priority));
} else {
    defaultTasks.forEach(task => Tasks.add(task[0], task[1], task[2], task[3]));
}


let defaultProjects = [ "Inbox", "Important", "Overdue", "Upcoming", "Home", "Work", "Study" ];
let projects = localStorage.getItem('projects')
projects = '';

if (projects && JSON.parse(projects).length > 1) {
    JSON.parse(projects).forEach(project => Projects.add(project.name));
} else {
    defaultProjects.forEach(project => Projects.add(project));
}