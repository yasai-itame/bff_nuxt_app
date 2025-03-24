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
exports.TodoRepository = void 0;
const common_1 = require("@nestjs/common");
const zod_validation_pipe_1 = require("../common/zod-validation.pipe");
const todo_dto_1 = require("./dto/todo.dto");
const prisma_service_1 = require("../prisma.service");
let TodoRepository = class TodoRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(page) {
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
        };
    }
    async findByTodo(id) {
        return await this.prisma.todo.findFirst({
            where: {
                id: id
            }
        });
    }
    async create(data) {
        return await this.prisma.todo.create({ data });
    }
    async update(data) {
        return await this.prisma.todo.update({
            where: {
                id: data.id
            },
            data: {
                title: data.title,
                contents: data.contents,
                updatedAt: data.updatedAt
            }
        });
    }
    async delete(id) {
        return await this.prisma.todo.delete({
            where: {
                id: id
            }
        });
    }
};
exports.TodoRepository = TodoRepository;
__decorate([
    (0, common_1.UsePipes)(new zod_validation_pipe_1.ZodValidationPipe(todo_dto_1.CombinedSchema)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoRepository.prototype, "findAll", null);
__decorate([
    (0, common_1.UsePipes)(new zod_validation_pipe_1.ZodValidationPipe(todo_dto_1.ListTodoSchema)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoRepository.prototype, "findByTodo", null);
__decorate([
    (0, common_1.UsePipes)(new zod_validation_pipe_1.ZodValidationPipe(todo_dto_1.CreateTodoSchema)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoRepository.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new zod_validation_pipe_1.ZodValidationPipe(todo_dto_1.UpdateTodoSchema)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoRepository.prototype, "update", null);
__decorate([
    (0, common_1.UsePipes)(new zod_validation_pipe_1.ZodValidationPipe(todo_dto_1.DeleteTodoSchema)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoRepository.prototype, "delete", null);
exports.TodoRepository = TodoRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TodoRepository);
//# sourceMappingURL=todo.repository.js.map