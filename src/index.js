import "./styles.css";
import { compareAsc, format } from "date-fns";
import { Task, Tasks, addTask } from "./task";
import { test } from "./helper";
import { Events } from "./pubsub";
import { Screen } from "./render";

Screen.render();

addTask("test", "test", "Default");
addTask("test1", "test1", "Default");
addTask("test2", "test2", "Default");
//test(Tasks.list);
