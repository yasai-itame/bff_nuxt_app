import { z } from "zod";
export declare const CreateTodoSchema: z.ZodObject<{
    title: z.ZodString;
    contents: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    contents: string;
}, {
    title: string;
    contents: string;
}>;
export declare const ListTodoSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    contents: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    title: string;
    contents: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
}, {
    title: string;
    contents: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const ListTodoTotalSchema: z.ZodNumber;
export declare const CombinedSchema: z.ZodObject<{
    todos: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        title: z.ZodString;
        contents: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        title: string;
        contents: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, {
        title: string;
        contents: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>, "many">;
    total: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    todos: {
        title: string;
        contents: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[];
    total: number;
}, {
    todos: {
        title: string;
        contents: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[];
    total: number;
}>;
export declare const UpdateTodoSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    contents: z.ZodString;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    title: string;
    contents: string;
    id: number;
    updatedAt: Date;
}, {
    title: string;
    contents: string;
    id: number;
    updatedAt: Date;
}>;
export declare const DeleteTodoSchema: z.ZodNumber;
export type CreateTodoDto = z.infer<typeof CreateTodoSchema>;
export type ListTodoDto = z.infer<typeof ListTodoSchema>;
export type CombinedDto = z.infer<typeof CombinedSchema>;
export type UpdateTodoDto = z.infer<typeof UpdateTodoSchema>;
export type DeleteTodoDto = z.infer<typeof DeleteTodoSchema>;
