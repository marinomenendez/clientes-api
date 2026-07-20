import express from 'express';
import * as controller from '../controllers/clientsController.js';

const router = express.Router();

router.get('/', controller.getClients);
router.post('/new',controller.createClient);
router.post('/update/:id',controller.updateClient);
router.post('/delete/:id',controller.deleteClient);

export default router;