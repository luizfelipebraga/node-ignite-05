import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoryRepositoy';

export const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/categories", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = categoryRepository.findByName(name);
    if(categoryAlreadyExists) {
        return response.status(400).send({ message: "Category Already Exists"})
    }

    categoryRepository.create({name, description});


    return response.status(201).send();
})

categoriesRoutes.get("/categories", (request, response) => {
    const listAll = categoryRepository.list();

    return response.json(listAll);
})