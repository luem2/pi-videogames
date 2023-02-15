import type { Request, Response, NextFunction } from 'express'

export function notFound(req: Request, res: Response, _next: NextFunction) {
    if (!req.route) return res.status(404).json({ msg: 'Invalid Endpoint' })
}
