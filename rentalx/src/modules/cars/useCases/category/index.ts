import { CategoryRepository } from "../../repositories/Category/CategoryRepositoy";
import { CategoryController } from "./CategoryController";
import { CategoryUseCase } from "./CategoryUseCase";

const categoryRepository = new CategoryRepository();
const categoryUseCase = new CategoryUseCase(categoryRepository);
export const categoryController = new CategoryController(categoryUseCase);