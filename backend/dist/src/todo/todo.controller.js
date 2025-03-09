"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_service_1 = require("./todo.service");
const swagger_1 = require("@nestjs/swagger");
const todo_entity_1 = require("./entities/todo.entity");
let TodoController = class TodoController {
    todoService;
    constructor(todoService) {
        this.todoService = todoService;
    }
    getTodo(page) {
        return this.todoService.getTodoItem(page);
    }
    getTodoDetail(id) {
        return this.todoService.getTodoById(id);
    }
    postTodo(title, contents) {
        return this.todoService.registerTodo(title, contents);
    }
    updateTodo(id, title, contents, updatedAt) {
        return this.todoService.updateTodo(id, title, contents, updatedAt);
    }
    deleteTodo(id) {
        return this.todoService.deleteTodoById(id);
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.Get)("/todo"),
    (0, swagger_1.ApiProduces)("application/json; charset=utf-8"),
    (0, swagger_1.ApiOperation)({ summary: "Todo一覧API" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Todoの一覧情報を返却",
        type: todo_entity_1.Todo
    }),
    __param(0, (0, common_1.Query)("page", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getTodo", null);
__decorate([
    (0, common_1.Get)("/todo/:id"),
    (0, swagger_1.ApiProduces)("application/json; charset=utf-8"),
    (0, swagger_1.ApiOperation)({ summary: "Todo詳細API" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Todoの詳細情報を返却",
        type: todo_entity_1.Todo
    }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getTodoDetail", null);
__decorate([
    (0, common_1.Post)("/todo"),
    (0, swagger_1.ApiProduces)("application/json; charset=utf-8"),
    (0, swagger_1.ApiOperation)({ summary: "Todo登録API" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "登録したTodoを返却",
        type: todo_entity_1.Todo
    }),
    __param(0, (0, common_1.Body)("title")),
    __param(1, (0, common_1.Body)("contents")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "postTodo", null);
__decorate([
    (0, common_1.Put)("/todo/:id"),
    (0, swagger_1.ApiProduces)("application/json; charset=utf-8"),
    (0, swagger_1.ApiOperation)({ summary: "Todo更新API" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Todoを更新",
        type: todo_entity_1.Todo
    }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)("title")),
    __param(2, (0, common_1.Body)("contents")),
    __param(3, (0, common_1.Body)("updatedAt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Date]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "updateTodo", null);
__decorate([
    (0, common_1.Delete)("/todo/:id"),
    (0, swagger_1.ApiProduces)('application/json; charset=utf-8'),
    (0, swagger_1.ApiOperation)({ summary: 'Todo削除API' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Todoを削除",
        type: todo_entity_1.Todo
    }),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "deleteTodo", null);
exports.TodoController = TodoController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
//# sourceMappingURL=todo.controller.js.map