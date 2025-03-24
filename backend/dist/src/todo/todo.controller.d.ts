import { TodoService } from "./todo.service";
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getTodo(page: number): Promise<{
        todos: {
            title: string;
            contents: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
    }>;
    getTodoDetail(id: number): Promise<{
        title: string;
        contents: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    postTodo(title: string, contents: string): Promise<{
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
    deleteTodo(id: number): Promise<{
        title: string;
        contents: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
