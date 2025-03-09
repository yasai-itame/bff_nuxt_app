export interface Todo {
  todos: {
    id: number;
    title: string;
    contents: string;
    createdAt: string;
    updatedAt: string;
  }[],
  total: number;
}

export interface TodoDetail {
  id?: number;
  title?: string;
  contents?: string;
  updatedAt?: string;
}

export interface TodoCreate {
  title: string;
  contents: string;
}