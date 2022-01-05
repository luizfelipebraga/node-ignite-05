import { CategoryRepository } from "../../../repositories/Category/CategoryRepositoy";
import { CategoryController } from "./CreateCategoryController";
import { CategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepository = new CategoryRepository();
const categoryUseCase = new CategoryUseCase(categoryRepository);
export const categoryController = new CategoryController(categoryUseCase);