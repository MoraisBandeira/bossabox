import express from 'express';
import getToolController from '../controllers/getToolsController';
import removeToolController from '../controllers/deleteToolsController';
import createToolController from '../controllers/createToolsController';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const router = express.Router();

router.delete('/:id',removeToolController)

router.get('/', getToolController);
  
router.post('/',createToolController)
  


export default router;