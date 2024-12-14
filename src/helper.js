export function test(code) {
    console.log(code);
}

export function addElement(name, tag, target) {
    const element = document.createElement(`${tag}`);
    element.classList.add(`${name}`);
    element.textContent = `${name}`;
    target.appendChild(element);
}