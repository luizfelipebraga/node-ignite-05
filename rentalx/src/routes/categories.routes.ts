import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/Category/CategoryRepositoy";
import { categoryController } from "../modules/cars/useCases/category";

export const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/categories", (request, response) => {
  return categoryController.handle(request, response);
});

categoriesRoutes.get("/categories", (request, response) => {
  const listAll = categoryRepository.list();

  return response.json(listAll);
});
