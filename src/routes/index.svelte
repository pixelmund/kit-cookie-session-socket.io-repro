<script>
	import { io } from 'socket.io-client';

	const socket = io();

	socket.on('connect', () => {
		console.log(socket.id); // x8WIv7-mJelg7on_ALbx
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
