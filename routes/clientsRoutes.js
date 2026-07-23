import express from 'express';
import * as controller from '../controllers/clientsController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:id', controller.getClientById);
router.get('/', controller.getClients);
router.post('/new', authMiddleware, controller.createClient);
router.put('/update/:_id', authMiddleware, controller.updateClient);
router.delete('/delete/:_id', authMiddleware, controller.deleteClient);

export default router;