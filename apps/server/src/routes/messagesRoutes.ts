import { messagesController } from '../controller/messagesController';

const express = require('express');

const messagesRoutes = express.Router();

messagesRoutes.get('/messages', messagesController.handleGetMessage);

export default messagesRoutes;
