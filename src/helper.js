export function test(code) {
    console.log(code);
}

export function addElement(name, tag, target) {
    const element = document.createElement(`${tag}`);
    element.id = `${name}`;
    if (target === "body") {
        document.body.appendChild(element);
    } else {
        document.getElementById(`${target}`).appendChild(element);
    }
}