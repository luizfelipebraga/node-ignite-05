import { SpecificationRepository } from "../../../repositories/Specification/SpecificationRepository";
import { SpecificationController } from "./SpecificationController";
import { SpecificationUseCase } from "./SpecificationUseCase";

const specificationRepository = new SpecificationRepository();
const specificationUser = new SpecificationUseCase(specificationRepository);
export const specificationController = new SpecificationController(specificationUser);