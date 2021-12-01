import { ISpecificationRepository } from "../repositories/Specification/ISpecificationRepository";

export interface ISpecificationService {
    name: string;
    description: string;
}

export class SpecificationService {

    constructor(private specificationService: ISpecificationRepository) { }

    execute({ name, description }: ISpecificationService): void {
        const specificationAlreadyExists = this.specificationService.findByName(name);

        if(specificationAlreadyExists) {
            throw new Error(`Specification ${name} already exists`);
        }

        this.specificationService.create({name, description});
    }
}