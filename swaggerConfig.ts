import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API',
      version: '1.0.0',
    },
  },
  apis: ['**/*.ts'], // Especifique os caminhos dos arquivos que contêm suas rotas
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;