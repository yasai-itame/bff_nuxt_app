import { Injectable, NotFoundException } from "@nestjs/common";
import { TodoRepository } from "./todo.repository";

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) { }

  async getTodoItem(page: number) {
    const item = await this.todoRepository.findAll(page);
    if (!item) {
      throw new NotFoundException("Todo not found");
    }
    return item;
  }

  async getTodoById(id: number) {
    const todoDetail = await this.todoRepository.findByTodo(id);
    if (!todoDetail) {
      throw new NotFoundException("Todo not found");
    }
    return todoDetail;
  }
  
  async registerTodo(title: string, contents: string) {
    const todo = await this.todoRepository.create({ title, contents });
    return todo;
  }

  async updateTodo(id: number, title: string, contents: string, updatedAt: Date) {
    const todoUpdate = await this.todoRepository.update({ id, title, contents, updatedAt });
    return todoUpdate;
  }

  async deleteTodoById(id: number) {
    const todoDelete = await this.todoRepository.delete(id);
    return todoDelete;
  }
}