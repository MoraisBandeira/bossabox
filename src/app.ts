import express from 'express';
import toolRoutes from './routes/toolRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', toolRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});