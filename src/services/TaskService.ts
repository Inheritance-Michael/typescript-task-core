import { ITask, TaskStatus, ID } from "../types";
export class TaskService {
  private tasks: Map<ID, ITask> = new Map();
  addTask(t: ITask) { this.tasks.set(t.id, t); }
}
