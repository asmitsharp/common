import { NextFunction, Request, Response } from "express"

import { NotAuthorizeError } from "../errors/not-authorized-error"

const isAgent = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.currentUser
  if (!user || user.role !== "agent") {
    throw new NotAuthorizeError()
  }
  next()
}
