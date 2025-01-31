import { ITask, TaskStatus, ID } from "../types";
export class TaskService {
  private tasks: Map<ID, ITask> = new Map();
  addTask(t: ITask) { this.tasks.set(t.id, t); }
}

  filterTasks_7() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_12() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_17() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_22() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_27() { return Array.from(this.tasks.values()).slice(0, 10); }
