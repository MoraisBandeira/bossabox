import express from 'express';
import getToolController from '../controllers/getToolsController';
import removeToolController from '../controllers/deleteToolsController';
import createToolController from '../controllers/createToolsController';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const router = express.Router();
/**
 * @swagger
 * /tools/{id}:
 *   delete:
 *     summary: Remove uma ferramenta por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da ferramenta a ser removida
 *     responses:
 *       '200':
 *         description: Ferramenta removida com sucesso
 *         content:
 *           application/json:
 *             example: {}
 */
router.delete('/tools/:id',removeToolController)

/**
 * @swagger
 * /tools:
 *   get:
 *     summary: Lista todas as ferramentas
 *     responses:
 *       '200':
 *         description: Operação bem-sucedida
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 title: "Notion"
 *                 link: "https://notion.so"
 *                 description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. "
 *                 tags:  ["organization","planning","collaboration","writing","calendar"]
 *               -  id: 2
 *                  title: "json-server"
 *                  link: "https://github.com/typicode/json-server"
 *                  description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges."
 *                  tags: ["api","json","schema","node","github","rest"]
 *               -  id: 3
 *                  title: "fastify"
 *                  link: "https://www.fastify.io/"
 *                  description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2."
 *                  tags: ["web","framework","node","http2","https","localhost"]
                     */

router.get('/tools', getToolController);

/**
 * @swagger
 * /tools:
 *   post:
 *     summary: Cadastra uma nova ferramenta
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             title: hotel
 *             link: https://github.com/typicode/hotel
 *             description: "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box."
 *             tags: ["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
 *     responses:
 *       '201':
 *         description: Ferramenta criada com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 3
 *               title: hotel   
 *               link: https://github.com/typicode/hotel
 *               description: "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box."
 *               tags: ["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
 */
router.post('/tools',createToolController)
  


export default router;