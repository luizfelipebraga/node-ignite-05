import { ISpecificationRepository } from "../../../repositories/Specification/ISpecificationRepository";

export interface ISpecificationUseCase {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationService: ISpecificationRepository) {}

  execute({ name, description }: ISpecificationUseCase): void {
    const specificationAlreadyExists =
      this.specificationService.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`);
    }

    this.specificationService.create({ name, description });
  }
}
