import supertest from 'supertest';
import  app  from './app';

const request = supertest(app);

describe('Testes da API', () => {
    it('Deve listar ferramentas', async () => {
      const response = await request.get('/api/tools');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        { id: 1, title: 'Ferramenta 1' },
        { id: 2, title: 'Ferramenta 2' },
      ]);
    });
  
    it('Deve cadastrar uma nova ferramenta', async () => {
      const response = await request
        .post('/api/tools')
        .send({
          title: 'Nova Ferramenta',
          link: 'https://nova-ferramenta.com',
          description: 'Descrição da nova ferramenta.',
          tags: ['nova', 'ferramenta'],
        });
  
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        id: 3,
        title: 'Nova Ferramenta',
        link: 'https://nova-ferramenta.com',
        description: 'Descrição da nova ferramenta.',
        tags: ['nova', 'ferramenta'],
      });
    });
  
    it('Deve remover uma ferramenta por ID', async () => {
      const response = await request.delete('/api/tools/3');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({});
    });
  });

