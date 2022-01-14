import fs from "fs";
import { parse } from "csv-parse";
import { ICategoryRepositoy } from "../../../repositories/Category/ICategoryRepositoy";

interface IImportCategory {
  name: string;
  description: string;
}

export class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepositoy) {}

  loadCategory(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise<IImportCategory[]>((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const categories: IImportCategory[] = [];

      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (data: any) => {
          const [name, description] = data;
          categories.push({ name, description });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err: any) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategory(file);
    categories.map(async (category) => {
      const {name, description} = category;
      const existingCategory = this.categoryRepository.findByName(name);
      !existingCategory && this.categoryRepository.create({name, description});
    })
    console.log(categories);
  }
}
