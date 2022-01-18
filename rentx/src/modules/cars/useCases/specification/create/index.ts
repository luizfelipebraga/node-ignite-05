import { SpecificationRepository } from "../../../repositories/Specification/SpecificationRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationRepository = SpecificationRepository.getInstance();
const specificationUseCase = new CreateSpecificationUseCase(specificationRepository);
export const createSpecificationController = new CreateSpecificationController(specificationUseCase);