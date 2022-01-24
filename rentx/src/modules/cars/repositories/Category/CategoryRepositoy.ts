import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoryRepositoy, ICreateCategoryDto } from "./ICategoryRepositoy";

export class CategoryRepository implements ICategoryRepositoy {

  // singleton para funcionar o get categories, para isso precisamos colocar a instancia como private
  private static INSTANCE: CategoryRepository;

  private repository: Repository<Category>;

  private constructor() {
    this.repository = getRepository(Category);
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }

    return CategoryRepository.INSTANCE;
  }
  //fim singleton

  async create({ name, description }: ICreateCategoryDto): Promise<void> {
    const category = new Category();

    const categoryObj = this.repository.create({
      name,
      description,
    });

    await this.repository.save(categoryObj);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({name});
    return category;
  }
}
