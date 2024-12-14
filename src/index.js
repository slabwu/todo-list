import "./styles.css";
import { compareAsc, format } from "date-fns";
import { Task, Tasks, addTask } from "./task";
import { test } from "./helper";
import { Events } from "./pubsub";
import { Screen } from "./render";

Screen.render();

addTask("Eat", "Finish dinner", "Default");
addTask("Walk", "Take a stroll with the dog", "Default");
addTask("Clean", "Tidy up the room", "Default");
//test(Tasks.list);
