import "./styles.css";
import { compareAsc, format } from "date-fns";
import { Task, Tasks, addTask } from "./task";
import { test } from "./helper";
import { Events } from "./pubsub";

addTask("test", "test", "Default");
addTask("test", "test", "Default");
addTask("test", "test", "Default");
//test(Tasks.list);

Events.on("meow", test)
Events.on("meow", addTask)
Events.off("meow", addTask)
Events.emit("meow", "works!")
