import { SpecificationRepository } from "../../../repositories/Specification/SpecificationRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationRepository = new SpecificationRepository();
const specificationUser = new CreateSpecificationUseCase(specificationRepository);
export const createSpecificationController = new CreateSpecificationController(specificationUser);