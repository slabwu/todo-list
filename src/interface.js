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