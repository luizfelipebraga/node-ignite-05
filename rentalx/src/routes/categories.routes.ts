import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepositoy';
import { CategoryService } from '../services/CategoryService';

export const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/categories", (request, response) => {
    const { name, description } = request.body;

    const categoryService = new CategoryService(categoryRepository);
    categoryService.execute({ name, description });

    return response.status(201).send();
})

categoriesRoutes.get("/categories", (request, response) => {
    const listAll = categoryRepository.list();

    return response.json(listAll);
})