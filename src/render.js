import { Events } from "./pubsub";
import { test } from "./helper";

class Renderer {
    constructor() {
        Events.on("update", this.render);
        test(Events.list)
    }

    render() {

    }
}

export const Screen = new Renderer();