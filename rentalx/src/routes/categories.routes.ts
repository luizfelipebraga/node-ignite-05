import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/category/create";
import { listCategoryController } from "../modules/cars/useCases/category/list";

export const categoriesRoutes = Router();

categoriesRoutes.post("/categories", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/categories", (request, response) => {
  return listCategoryController.handle(request, response);
});
