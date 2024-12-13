import { go } from "./todos";

class Interface {
    constructor() {
        const content = document.createElement("div")
        document.body.appendChild(content)
        content.id = "content";
    }

    createButton(name, method) {
        const button = document.createElement("button");
        button.textContent = name;
        button.id = this.camelCase(name);
        content.appendChild(button);
        button.addEventListener("click", method)
    }

    loadToDos(project) {
        let toDos = go.getToDosFrom(project);
        toDos.forEach((toDo) => {
            const container = document.createElement("div");
            content.appendChild(container);

            for (const element in toDo) {
                const elementContainer = document.createElement("p");
                elementContainer.classList.add(`${element}`)
                elementContainer.textContent = toDo[element];
                container.appendChild(elementContainer);
            };

            this.createButton("X", () => {console.log("Delete")})
        });
    }

    camelCase(str) {
        return str
            .replace(/\s(.)/g, function (a) {
                return a.toUpperCase();
            })
            .replace(/\s/g, '')
            .replace(/^(.)/, function (b) {
                return b.toLowerCase();
            });
    }
}

export const screen = new Interface();