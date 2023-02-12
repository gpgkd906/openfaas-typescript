export type RequestEvent = {
    body: string
    headers: Record<string, string>
    method: string
    query: Record<string, unknown>
    path: string
}

export type Context = {
    status(statusCode: number): Context,
    headers(value?: Record<string, string>) : Context
    succeed(value: any): void
    fail(value: any):void
}