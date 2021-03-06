import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/useCases/category/create";
import { importCategoryController } from "../modules/cars/useCases/category/import";
import { listCategoryController } from "../modules/cars/useCases/category/list";

export const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/categories", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/categories", (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});
