import { SpecificationRepository } from "../../../repositories/Specification/SpecificationRepository";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { ListSpecificationController } from "./ListSpecificationController";


const specificationRepository = new SpecificationRepository();
const listSpecificationUseCase = new ListSpecificationUseCase(specificationRepository);
export const listSpecificationController = new ListSpecificationController(listSpecificationUseCase);