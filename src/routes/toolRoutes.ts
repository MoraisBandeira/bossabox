import express from 'express';
import getToolController from '../controllers/getToolsController';
import removeToolController from '../controllers/deleteToolsController';
import createToolController from '../controllers/createToolsController';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const router = express.Router();

router.delete('/tools/:id',removeToolController)

router.get('/tools', getToolController);

router.post('/tools',createToolController)
  


export default router;