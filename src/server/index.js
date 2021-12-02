// @ts-ignore
import { assetsMiddleware, prerenderedMiddleware, kitMiddleware } from '../../build/middlewares.js';
import polka from 'polka';
import websockets from './websockets.js';
import { Server } from 'socket.io';

const { PORT = 3000 } = process.env;
const app = polka();

app.all('*', assetsMiddleware, prerenderedMiddleware, kitMiddleware);
app.listen(PORT, () => console.log(`> Running on localhost:${PORT}`));

const { server } = app;
websockets(new Server(server));