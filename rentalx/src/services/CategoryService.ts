import { CategoryRepository } from "../repositories/CategoryRepositoy";
import { ICategoryRepositoy } from "../repositories/ICategoryRepositoy";

interface ICategoryService {
    name: string;
    description: string;
}

export class CategoryService {
    private categoryRepository: ICategoryRepositoy;

    constructor(categoryRepository: ICategoryRepositoy) {
        this.categoryRepository = categoryRepository;
    }

    //This way, we dont need to do what i did on top -->> Dependecy Inversion Principle //**constructor(private categoryRepository: CategoryRepository) {}**//

    execute({ name, description }: ICategoryService): void {
        const categoryAlreadyExists = this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
        }

        this.categoryRepository.create({ name, description});
    }
}