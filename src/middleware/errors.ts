import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError"

export const errorMiddleware = (
  error: Error & Partial<AppError>,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500
  const message = error.statusCode ? error.message : 'Internal Server Error'
  return response.status(statusCode).json({ error: { problem: message } })
}
