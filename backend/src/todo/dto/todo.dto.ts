import { z } from "zod";

export const CreateTodoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  contents: z.string().min(1, "Contents is required"),
});

export const ListTodoSchema = z.object({
  id: z.number(),
  title: z.string().min(1, "Title is required"),
  contents: z.string().min(1, "Contents is required"),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const ListTodoTotalSchema = z.number();

export const CombinedSchema = z.object({
  todos: z.array(ListTodoSchema),
  total: ListTodoTotalSchema
});

export const UpdateTodoSchema = z.object({
  id: z.number(),
  title: z.string().min(1, "Title is required"),
  contents: z.string().min(1, "Contents is required"),
  updatedAt: z.date()
});

export const DeleteTodoSchema = z.number();

export type CreateTodoDto = z.infer<typeof CreateTodoSchema>
export type ListTodoDto = z.infer<typeof ListTodoSchema>
export type CombinedDto = z.infer<typeof CombinedSchema>
export type UpdateTodoDto = z.infer<typeof UpdateTodoSchema>
export type DeleteTodoDto = z.infer<typeof DeleteTodoSchema>