import { AppError } from "@errors/AppError";
import { Request, Response, NextFunction } from "express";
import { INTERNAL_SERVER_ERROR } from "src/constants/http-status";

export function errorMiddleware(
  error: Error & Partial<AppError>,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const statusCode =  error.status ? error.status : INTERNAL_SERVER_ERROR;
  const message = error.status ? error.message : "Internal Server Error";
  
  return response.status(statusCode).json({ error: { problem: message } });
}
