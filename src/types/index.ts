export type ID = string;
export enum TaskPriority { LOW, MEDIUM, HIGH, URGENT }
export enum TaskStatus { BACKLOG, IN_PROGRESS, DONE }
export interface ITask { id: ID; title: string; status: TaskStatus; priority: TaskPriority; }

export interface ITaskContract_6 { version: number; meta: Record<string, string>; }

export interface ITaskContract_11 { version: number; meta: Record<string, string>; }

export interface ITaskContract_16 { version: number; meta: Record<string, string>; }

export interface ITaskContract_21 { version: number; meta: Record<string, string>; }

export interface ITaskContract_26 { version: number; meta: Record<string, string>; }

export interface ITaskContract_31 { version: number; meta: Record<string, string>; }

export interface ITaskContract_36 { version: number; meta: Record<string, string>; }

export interface ITaskContract_41 { version: number; meta: Record<string, string>; }

export interface ITaskContract_46 { version: number; meta: Record<string, string>; }

export interface ITaskContract_51 { version: number; meta: Record<string, string>; }

export interface ITaskContract_56 { version: number; meta: Record<string, string>; }

export interface ITaskContract_61 { version: number; meta: Record<string, string>; }

export interface ITaskContract_66 { version: number; meta: Record<string, string>; }

export interface ITaskContract_71 { version: number; meta: Record<string, string>; }

export interface ITaskContract_76 { version: number; meta: Record<string, string>; }
