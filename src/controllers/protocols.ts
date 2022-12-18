export interface HttpResponse<T> {
  statusCode: number;
  body: T | string; // vai esperar um generic ou uma string
}
