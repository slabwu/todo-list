import { Events } from "./pubsub";
import { Projects } from "./project"; 
import { add } from "date-fns";

export function test(code) {
    console.log(code);
}

export function addElement(name, tag, target, className = undefined) {
    const element = document.createElement(`${tag}`);
    element.id = name;
    if (className) element.classList.add(className);
    appendElement(element, target);
}

export function addTextElement(name, tag, target, className = undefined) {
    const element = document.createElement(`${tag}`);
    element.textContent = name;
    element.classList.add(`${className}`);
    appendElement(element, target);
}

export function addButton(name, target, fn, icon) {
    const element = document.createElement("button");
    element.textContent = name;
    element.id = `${camelCase(name)}Btn`;
    appendElement(element, target);
    element.addEventListener("click", (e) => {fn(e)});
    if (icon) {
        element.innerHTML = `<i class="material-icons">${icon}</i>` + name;
    }
}

export function addIcon(name, target, fn = undefined) {
    const element = document.createElement("i");
    element.classList.add("material-icons");
    element.textContent = name;
    appendElement(element, target);
   if (fn) element.addEventListener("click", (e) => {fn(e)});
}

function appendElement(element, target) {
    if (target === "body") {
        document.body.appendChild(element);
    } else {
        document.getElementById(`${target}`).appendChild(element);
    }
}

export function addCheckbox(task, target) {
    const element = document.createElement("div");
    element.id = task.name;
    element.name = task.name;
    element.classList.add('checkbox');
    document.getElementById(`${target}`).appendChild(element);
    element.addEventListener("click", () => {
        (task.completed) ? task.completed = false : task.completed = true;
        Events.emit("updateTasks");
    });
}

export function deleteElementsFrom(target) {
    document.getElementById(target).innerHTML = ``;
}

export function camelCase(str) {
    return str
        .replace(/\s(.)/g, function (a) {
            return a.toUpperCase();
        })
        .replace(/\s/g, '')
        .replace(/^(.)/, function (b) {
            return b.toLowerCase();
        });
}

export function overdue(date) {
    if (date === "") return false;
    let inputDate = new Date(date.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$2-$1-$3")).toISOString();
    let currentDate = new Date(Date.now()).toISOString();

    return inputDate < currentDate;
}

export function filterTasks(tasks) {
    switch (Projects.current) {
        case "Inbox":
            return tasks;
            break;
        case "Important":
            return tasks.filter(task => task.priority === true);
            break;
        case "Overdue":
            return tasks.filter(task => overdue(task.date) === true);
            break;
        case "Upcoming":
            return tasks.filter(task => overdue(task.date) === false);
            break;
        default:
            return tasks.filter(task => task.project === Projects.current);
    }
}

export function getDate(date) {
    let parts = date.split('/');
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}