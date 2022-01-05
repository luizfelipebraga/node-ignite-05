import { Request, Response } from "express";
import { SpecificationUseCase } from "./SpecificationUseCase";

export class SpecificationController {
  constructor(private specificationUseCase: SpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.specificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}
