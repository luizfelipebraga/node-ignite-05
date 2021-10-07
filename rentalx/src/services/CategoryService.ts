import { CategoryRepository } from "../repositories/CategoryRepositoy";

interface ICategoryService {
    name: string;
    description: string;
}

export class CategoryService {
    private categoryRepository: CategoryRepository;

    constructor(categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute({ name, description }: ICategoryService): void {
        const categoryAlreadyExists = this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
            
        }

        this.categoryRepository.create({ name, description});
    }
}