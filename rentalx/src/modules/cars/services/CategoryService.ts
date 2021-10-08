import { ICategoryRepositoy } from "../repositories/Category/ICategoryRepositoy";

interface ICategoryService {
    name: string;
    description: string;
}

export class CategoryService {
    private categoryRepository: ICategoryRepositoy;

    constructor(categoryRepository: ICategoryRepositoy) {
        this.categoryRepository = categoryRepository;
    }

    //This way, its just a trick to not use "THIS" -->> Dependecy Inversion Principle //**constructor(private categoryRepository: CategoryRepository) {}**//

    execute({ name, description }: ICategoryService): void {
        const categoryAlreadyExists = this.categoryRepository.findByName(name);
        
        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
        }

        this.categoryRepository.create({ name, description});
    }
}