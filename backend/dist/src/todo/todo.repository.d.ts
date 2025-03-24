import { CreateTodoDto, ListTodoDto, CombinedDto, UpdateTodoDto, DeleteTodoDto } from "./dto/todo.dto";
import { PrismaService } from "../prisma.service";
export declare class TodoRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(page: number): Promise<CombinedDto>;
    findByTodo(id: number): Promise<ListTodoDto | null>;
    create(data: CreateTodoDto): Promise<{
        title: string;
        contents: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(data: UpdateTodoDto): Promise<{
        title: string;
        contents: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: DeleteTodoDto): Promise<{
        title: string;
        contents: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
