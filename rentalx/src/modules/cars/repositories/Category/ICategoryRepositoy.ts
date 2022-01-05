import { Category } from "../../entities/Category";


export interface ICreateCategoryDto {
    name: string;
    description: string;
}

export interface ICategoryRepositoy {
    findByName(name: string): Category; 
    list(): Category[];
    create({name, description}: ICreateCategoryDto);
}