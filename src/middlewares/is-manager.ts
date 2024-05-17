import { NextFunction, Request, Response } from "express"

import { NotAuthorizeError } from "../errors/not-authorized-error"

const isManager = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.currentUser
  if (!user || user.role !== "manager") {
    throw new NotAuthorizeError()
  }
  next()
}
