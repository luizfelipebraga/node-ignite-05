import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

// import 'routes';

const app = express();

const port = process.env.PORT || 3333;

app.use(categoriesRoutes);

app.listen(port, () => console.log(`Server is running at ${port}`));