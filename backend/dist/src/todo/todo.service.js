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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const todo_repository_1 = require("./todo.repository");
let TodoService = class TodoService {
    todoRepository;
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async getTodoItem(page) {
        const item = await this.todoRepository.findAll(page);
        if (!item) {
            throw new common_1.NotFoundException("Todo not found");
        }
        return item;
    }
    async getTodoById(id) {
        const todoDetail = await this.todoRepository.findByTodo(id);
        if (!todoDetail) {
            throw new common_1.NotFoundException("Todo not found");
        }
        return todoDetail;
    }
    async registerTodo(title, contents) {
        const todo = await this.todoRepository.create({ title, contents });
        return todo;
    }
    async updateTodo(id, title, contents, updatedAt) {
        const todoUpdate = await this.todoRepository.update({ id, title, contents, updatedAt });
        return todoUpdate;
    }
    async deleteTodoById(id) {
        const todoDelete = await this.todoRepository.delete(id);
        return todoDelete;
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [todo_repository_1.TodoRepository])
], TodoService);
//# sourceMappingURL=todo.service.js.map