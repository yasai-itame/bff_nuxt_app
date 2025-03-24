import { TodoRepository } from "./todo.repository";
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: TodoRepository);
    getTodoItem(page: number): Promise<{
        todos: {
            title: string;
            contents: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
    }>;
    getTodoById(id: number): Promise<{
        title: string;
        contents: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    registerTodo(title: string, contents: string): Promise<{
        title: string;
        contents: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateTodo(id: number, title: string, contents: string, updatedAt: Date): Promise<{
        title: string;
        contents: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteTodoById(id: number): Promise<{
        title: string;
        contents: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
