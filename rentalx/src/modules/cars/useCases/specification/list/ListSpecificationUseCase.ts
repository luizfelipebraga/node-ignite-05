import { Specification } from "../../../entities/Specification";
import { SpecificationRepository } from "../../../repositories/Specification/SpecificationRepository";


export class ListSpecificationUseCase {
  //constructor
  constructor(private specificationRepository: SpecificationRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationRepository.list();

    return specifications;
  }
}