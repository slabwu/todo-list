export function test(code) {
    console.log(code);
}

export function addElement(name, tag, target, text) {
    const element = document.createElement(`${tag}`);
    element.id = `${name}`;
    if (text) element.textContent = `${name}`;
    if (target === "body") {
        document.body.appendChild(element);
    } else {
        document.getElementById(`${target}`).appendChild(element);
    }
}

export function deleteElementsFrom(target) {
    document.getElementById(`${target}`).innerHTML = ``;
}