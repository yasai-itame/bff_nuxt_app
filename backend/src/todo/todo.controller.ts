import { Controller, Get, Post, Query, Param, Body, ParseIntPipe, Put, Delete } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { ApiTags, ApiProduces, ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger";
import { Todo } from "./entities/todo.entity";

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Get("/todo")
  @ApiProduces("application/json; charset=utf-8")
  @ApiOperation({ summary: "Todo一覧API" })
  @ApiResponse({
    status: 200,
    description: "Todoの一覧情報を返却",
    type: Todo
  })
  getTodo(
    @Query("page", ParseIntPipe) page: number
  ) {
    return this.todoService.getTodoItem(page);
  }
  
  @Get("/todo/:id")
  @ApiProduces("application/json; charset=utf-8")
  @ApiOperation({ summary: "Todo詳細API" })
  @ApiResponse({
    status: 200,
    description: "Todoの詳細情報を返却",
    type: Todo
  })
  getTodoDetail(
    @Param("id", ParseIntPipe) id: number
  ) {
    return this.todoService.getTodoById(id);
  }

  @Post("/todo")
  @ApiProduces("application/json; charset=utf-8")
  @ApiOperation({ summary: "Todo登録API" })
  @ApiResponse({
    status: 201,
    description: "登録したTodoを返却",
    type: Todo
  })
  postTodo(
    @Body("title") title: string,
    @Body("contents") contents: string
  ) {
    return this.todoService.registerTodo(title, contents);
  }

  @Put("/todo/:id")
  @ApiProduces("application/json; charset=utf-8")
  @ApiOperation({ summary: "Todo更新API" })
  @ApiResponse({
    status: 200,
    description: "Todoを更新",
    type: Todo
  })
  updateTodo(
    @Param("id", ParseIntPipe) id: number,
    @Body("title") title: string,
    @Body("contents") contents: string,
    @Body("updatedAt") updatedAt: Date
  ) {
    return this.todoService.updateTodo(id, title, contents, updatedAt);
  }
  
  @Delete("/todo/:id")
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'Todo削除API' })
  @ApiResponse({
    status: 200,
    description: "Todoを削除",
    type: Todo
  })
  deleteTodo(
    @Param("id", ParseIntPipe) id: number
  ) {
    return this.todoService.deleteTodoById(id);
  }

}