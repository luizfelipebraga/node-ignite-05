import { Category } from "../entities/Category";
import { ICategoryRepositoy, ICreateCategoryDto } from "./ICategoryRepositoy";


export class PostgresCategoryReposioty implements ICategoryRepositoy {
    findByName(name: string): Category {
        throw new Error("Method not implemented.");
    }
    list(): Category[] {
        throw new Error("Method not implemented.");
    }
    create({ name, description }: ICreateCategoryDto) {
        console.log(name, description);
    }

}