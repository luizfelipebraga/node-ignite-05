import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/Category/CategoryRepositoy";
import { CategoryUseCase } from "../modules/cars/useCases/category/CategoryUseCase";

export const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/categories", (request, response) => {
  
});

categoriesRoutes.get("/categories", (request, response) => {
  const listAll = categoryRepository.list();

  return response.json(listAll);
});
