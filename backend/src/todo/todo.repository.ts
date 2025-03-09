import { Injectable, UsePipes } from "@nestjs/common";
import { ZodValidationPipe } from "src/common/zod-validation.pipe";
import { CreateTodoSchema, CreateTodoDto, ListTodoSchema, ListTodoDto, CombinedSchema, CombinedDto, UpdateTodoSchema, UpdateTodoDto, DeleteTodoSchema, DeleteTodoDto } from "./dto/todo.dto";
import { PrismaService } from "../prisma.service";

@Injectable()
export class TodoRepository {
  constructor(private readonly prisma: PrismaService) { }

  @UsePipes(new ZodValidationPipe(CombinedSchema))
  async findAll(page: number): Promise<CombinedDto> {
    const perPage = 10;
    const skip = perPage * (page - 1);

    const [data, total] = await this.prisma.$transaction([
      this.prisma.todo.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: perPage
      }),
      this.prisma.todo.count()
    ]);

    return {
      todos: data,
      total: total
    }
  }

  @UsePipes(new ZodValidationPipe(ListTodoSchema))
  async findByTodo(id: number): Promise<ListTodoDto | null> {
    return await this.prisma.todo.findFirst({
      where: {
        id: id
      }
    })
  }
  
  @UsePipes(new ZodValidationPipe(CreateTodoSchema))
  async create(data: CreateTodoDto) {
    return await this.prisma.todo.create({ data });
  }

  @UsePipes(new ZodValidationPipe(UpdateTodoSchema))
  async update(data: UpdateTodoDto) {
    return await this.prisma.todo.update({
      where: {
        id: data.id
      },
      data: {
        title: data.title,
        contents: data.contents,
        updatedAt: data.updatedAt
      }
    })
  }

  @UsePipes(new ZodValidationPipe(DeleteTodoSchema))
  async delete(id: DeleteTodoDto) {
    return await this.prisma.todo.delete({
      where: {
        id: id
      }
    });
  }
}