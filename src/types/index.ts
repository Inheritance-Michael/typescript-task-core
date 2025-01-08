export type ID = string;
export enum TaskPriority { LOW, MEDIUM, HIGH, URGENT }
export enum TaskStatus { BACKLOG, IN_PROGRESS, DONE }
export interface ITask { id: ID; title: string; status: TaskStatus; priority: TaskPriority; }

export interface ITaskContract_6 { version: number; meta: Record<string, string>; }
