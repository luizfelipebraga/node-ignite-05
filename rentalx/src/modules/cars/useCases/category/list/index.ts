import { CategoryRepository } from "../../../repositories/Category/CategoryRepositoy";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


const categoryRepository = new CategoryRepository();
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);
export const listCategoryController = new ListCategoryController(listCategoryUseCase);