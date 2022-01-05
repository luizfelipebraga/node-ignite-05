import { Category } from "../../entities/Category";
import { ICreateCategoryDto } from "./ICategoryRepositoy";

export class CategoryRepository {
  private categories: Category[];

  // singleton para funcionar o get categories, para isso precisamos colocar a instancia como private
  private static INSTANCE: CategoryRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }

    return CategoryRepository.INSTANCE;
  }
  //fim singleton

  create({ name, description }: ICreateCategoryDto): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((c) => c.name === name);
    return category;
  }
}
