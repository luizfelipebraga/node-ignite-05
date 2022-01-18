import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO } from "./ISpecificationRepository";

export class SpecificationRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      return (SpecificationRepository.INSTANCE = new SpecificationRepository());
    }

    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const spec = new Specification();

    Object.assign(spec, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(spec);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const spec = this.specifications.find((spec) => spec.name === name);
    return spec;
  }
}
