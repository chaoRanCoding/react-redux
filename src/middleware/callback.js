export default function callback() {
	return next => action => {
		const { meta = {}, error, payload } = action;
		const { resolved, rejected } = meta;
		next(action);
		error ? (rejected && rejected(payload)) : (resolved && resolved(payload));
	}
}
