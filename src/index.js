import "./styles.css";
import { compareAsc, format } from "date-fns";
import { Task, Tasks, addTask } from "./task";
import { test } from "./helper";

addTask("test", "test", "Default");
addTask("test", "test", "Default");
addTask("test", "test", "Default");
test(Tasks.list);