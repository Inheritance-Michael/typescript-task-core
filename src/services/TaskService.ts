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

  filterTasks_32() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_37() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_42() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_47() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_52() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_57() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_62() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_67() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_72() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_77() { return Array.from(this.tasks.values()).slice(0, 10); }

  filterTasks_82() { return Array.from(this.tasks.values()).slice(0, 10); }
