import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/Specification/SpecificationRepository";
import { SpecificationUseCase } from "../modules/cars/useCases/specification/SpecificationUseCase";

export const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/specifications", (request, response) => {
  
});

specificationsRoutes.get("/specifications", (request, response) => {
  const listAll = specificationRepository.list();

  return response.json(listAll);
});
