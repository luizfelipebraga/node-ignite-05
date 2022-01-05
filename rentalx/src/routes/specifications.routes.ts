import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/Specification/SpecificationRepository";
import { specificationController } from "../modules/cars/useCases/specification/create";
import { listSpecificationController } from "../modules/cars/useCases/specification/list";

export const specificationsRoutes = Router();
specificationsRoutes.post("/specifications", (request, response) => {
  return specificationController.handle(request, response);
});

specificationsRoutes.get("/specifications", (request, response) => {
  return listSpecificationController.handle(request, response);
});
