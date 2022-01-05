import { Request, Response } from "express";
import { CategoryUseCase } from "./CategoryUseCase";

export class CategoryController {
  constructor(private categoryUseCase: CategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.categoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}
