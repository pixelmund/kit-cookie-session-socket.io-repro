import { handleSession } from "svelte-kit-cookie-session";

export const handle = handleSession({
    secret: 'test123456789',
    key: 'test.session'
});