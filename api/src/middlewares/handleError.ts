import type { IError } from '../types'
import type { Request, Response, NextFunction } from 'express'

export function handleError(
    err: IError,
    _req: Request,
    res: Response,
    _next: NextFunction
): void {
    const status = err.status ?? 500
    const message = err.message ?? err

    console.error(err)

    res.status(status).send(message)
}
