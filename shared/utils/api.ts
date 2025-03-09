export interface API<T = any> {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: T;
};