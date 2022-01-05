import { SpecificationRepository } from "../../../repositories/Specification/SpecificationRepository";
import { SpecificationUseCase } from "../create/SpecificationUseCase";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";


const specificationRepository = new SpecificationRepository();
const listSpecificationUseCase = new ListSpecificationUseCase(specificationRepository);
export const listSpecificationController = new ListSpecificationController(listSpecificationUseCase);