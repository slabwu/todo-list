import { Events } from "./pubsub";
import { test, addElement } from "./helper";
import { Tasks } from "./task";

class Renderer {
    constructor() {
        Events.on("update", this.render);

        addElement("content", "div", document.body);
    }

    render() {
        test(Tasks.list)
    }
}

export const Screen = new Renderer();