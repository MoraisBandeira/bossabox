import express from 'express';
import toolRoutes from './routes/toolRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swaggerConfig';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', toolRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});