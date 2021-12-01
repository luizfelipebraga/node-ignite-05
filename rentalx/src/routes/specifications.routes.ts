import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/Specification/SpecificationRepository';
import { SpecificationService } from '../modules/cars/services/SpecificationService';

export const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/specifications", (request, response) => {
    const { name, description } = request.body;

    const specificationService = new SpecificationService(specificationRepository);

    specificationService.execute({name, description});
    
    return response.status(201).send();
})

specificationsRoutes.get("/specifications", (request, response) => {
    const listAll = specificationRepository.list();

    return response.json(listAll);
})