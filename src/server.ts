import http from 'http'
import app from './app'

const httpServer = http.createServer(app);

const PORT = 3000;

httpServer.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });