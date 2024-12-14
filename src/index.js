import "./styles.css";
import { compareAsc, format } from "date-fns";
import { Task, Tasks, addTask } from "./task";
import { test } from "./helper";
import { Events } from "./pubsub";
import { Screen } from "./render";


addTask("test", "test", "Default");
addTask("test", "test", "Default");
addTask("test", "test", "Default");

Screen.render();
//test(Tasks.list);
