import { Events } from "./pubsub";
import { test, addElement } from "./helper";
import { Tasks } from "./task";

class Renderer {
    constructor() {
        Events.on("update", this.render);

        addElement("content", "div", "body");
        addElement("hello", "div", "content");
    }

    render() {
        test(Tasks.list)
    }
}

export const Screen = new Renderer();