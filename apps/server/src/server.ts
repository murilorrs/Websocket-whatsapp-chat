import messagesRoutes from './routes/messagesRoutes';

const express = require('express');

export const app = express();
const port = 3000;

app.use(messagesRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
