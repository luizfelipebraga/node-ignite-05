import { Category } from "../entities/Category";
import { ICreateCategoryDto } from "./ICategoryRepositoy";

//**Dto - Date Transfer Object */



export class CategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({name, description}: ICreateCategoryDto): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            create_at: new Date()
        });

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(c => c.name === name)
        return category;
    }
}