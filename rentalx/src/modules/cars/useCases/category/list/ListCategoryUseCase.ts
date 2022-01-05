import { Category } from "../../../entities/Category";
import { ICategoryRepositoy } from "../../../repositories/Category/ICategoryRepositoy";


export class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepositoy) {}

  execute(): Category[] {
    const categories = this.categoryRepository.list();

    return categories
  }
}