"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTodoSchema = exports.UpdateTodoSchema = exports.CombinedSchema = exports.ListTodoTotalSchema = exports.ListTodoSchema = exports.CreateTodoSchema = void 0;
const zod_1 = require("zod");
exports.CreateTodoSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    contents: zod_1.z.string().min(1, "Contents is required"),
});
exports.ListTodoSchema = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string().min(1, "Title is required"),
    contents: zod_1.z.string().min(1, "Contents is required"),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date()
});
exports.ListTodoTotalSchema = zod_1.z.number();
exports.CombinedSchema = zod_1.z.object({
    todos: zod_1.z.array(exports.ListTodoSchema),
    total: exports.ListTodoTotalSchema
});
exports.UpdateTodoSchema = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string().min(1, "Title is required"),
    contents: zod_1.z.string().min(1, "Contents is required"),
    updatedAt: zod_1.z.date()
});
exports.DeleteTodoSchema = zod_1.z.number();
//# sourceMappingURL=todo.dto.js.map