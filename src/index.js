import "./styles.css";
import { compareAsc, format } from "date-fns";
import { Task, addTask, List } from "./task";
import { test } from "./helper";

addTask("test", "test", "Default");
test(List.tasks);