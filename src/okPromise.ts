import ok from './ok'
import fail from './fail'

type CheckFn = (x: unknown) => boolean

const okPromise = async <T>(
	promise: Promise<T>, 
	check?: boolean|CheckFn
): OkPromise<T> => {
	try {
		const x = await promise
		const t = typeof check

		if (t === 'undefined' || (t === 'function' ? (check as CheckFn)(x) : check)) {
			return ok(x)
		}
		else throw x
	}
	catch (x) {
		return fail(x)
	}
}

export default okPromise