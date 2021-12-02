import { sessionMiddleware } from 'svelte-kit-cookie-session';

export default function (io) {
	const VITE_SESSION_SECRET = "test123456789";

	const wrap = (middleware) => (socket, next) => middleware(socket.request, {}, next);
	io.use(wrap(sessionMiddleware({ secret: VITE_SESSION_SECRET, key: 'test.session' })));

	io.on('connection', (socket) => {
		console.log(socket.request.session.data);
		socket.on('message', async ({ text, room }) => {
			console.log(socket.request);
		});
	});
}