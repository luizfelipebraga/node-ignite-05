import { ICategoryRepositoy } from "../../repositories/Category/ICategoryRepositoy";

interface ICategoryCategoryUseCase {
  name: string;
  description: string;
}

export class CategoryUseCase {
  private categoryRepository: ICategoryRepositoy;

  constructor(categoryRepository: ICategoryRepositoy) {
    this.categoryRepository = categoryRepository;
  }

  execute({ name, description }: ICategoryCategoryUseCase): void {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists");
    }

    this.categoryRepository.create({ name, description });
  }
}
