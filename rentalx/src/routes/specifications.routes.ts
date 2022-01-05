import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/Specification/SpecificationRepository";
import { specificationController } from "../modules/cars/useCases/specification";

export const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/specifications", (request, response) => {
  return specificationController.handle(request, response);
});

specificationsRoutes.get("/specifications", (request, response) => {
  const listAll = specificationRepository.list();

  return response.json(listAll);
});
