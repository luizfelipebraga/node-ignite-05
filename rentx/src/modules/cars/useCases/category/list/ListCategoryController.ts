import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoryController {
  constructor(private categoryUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const listAll = this.categoryUseCase.execute();
    return response.json(listAll);
  }
}
