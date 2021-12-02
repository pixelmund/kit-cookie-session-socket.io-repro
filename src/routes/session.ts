export const get = ({ locals }) => {
	let count = locals.session.data?.count ?? 0;
	count++;
	locals.session.data = { count };

	return {
		body: {
			session: locals.session.data
		}
	};
};
