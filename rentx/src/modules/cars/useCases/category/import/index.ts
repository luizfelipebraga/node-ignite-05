import { CategoryRepository } from "../../../repositories/Category/CategoryRepositoy";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
export const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);
