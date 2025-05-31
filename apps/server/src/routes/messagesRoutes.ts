import { messagesController } from '../controller/messagesController';
import express from 'express'

const messagesRoutes = express.Router();

messagesRoutes.get('/', messagesController.handleGetMessage);

export default messagesRoutes;
