import { Events } from "./pubsub";

export function test(code) {
    console.log(code);
}

export function addElement(name, tag, target, className = undefined, text = undefined) {
    const element = document.createElement(`${tag}`);
    (text) ? element.textContent = name : element.id = name;
    if (className) element.classList.add(`${className}`);
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
    const element = document.createElement("input");
    element.type = "checkbox";
    element.id = task.name;
    element.name = task.name;
    (task.completed) ? element.checked = true : element.checked = false;
    document.getElementById(`${target}`).appendChild(element);
    element.addEventListener("click", () => {
        task.completed = element.checked;
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