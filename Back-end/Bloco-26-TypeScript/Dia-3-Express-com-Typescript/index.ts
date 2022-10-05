import express, { NextFunction, Request, Response } from 'express';
import statusCodes from './statusCodes';
import BooksRoutes from './routes/books.routes';
import 'express-async-errors';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (_req, res) => {
  res.status(statusCodes.OK).send('Express + TypeScript')
});

app.use(BooksRoutes); // coloque essa linha antes do middleware de erro!

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[ 0 ].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});