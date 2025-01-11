import { Events } from "./pubsub";
import { Projects } from "./project"; 

export function test(code) {
    console.log(code);
}

export function addElement(name, tag, target, className = undefined) {
    const element = document.createElement(`${tag}`);
    element.id = name;
    if (className) element.classList.add(className);
    if (target === "body") {
        document.body.appendChild(element);
    } else {
        document.getElementById(`${target}`).appendChild(element);
    }
}

export function addTextElement(name, tag, target, className = undefined) {
    const element = document.createElement(`${tag}`);
    element.textContent = name;
    element.classList.add(`${className}`);
    if (target === "body") {
        document.body.appendChild(element);
    } else {
        document.getElementById(`${target}`).appendChild(element);
    }
}

export function addButton(name, target, fn) {
    const element = document.createElement("button");
    element.textContent = name;
    element.id = `${camelCase(name)}Btn`;
    if (target === "body") {
        document.body.appendChild(element);
    } else {
        document.getElementById(`${target}`).appendChild(element);
    }
    element.addEventListener("click", (e) => {fn(e)});
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
        case "Overdue":
            return tasks.filter(task => overdue(task.date) === true);
        case "Upcoming":
            return tasks.filter(task => overdue(task.date) === false);
        default:
            return tasks.filter(task => task.project === Projects.current);
    }
}