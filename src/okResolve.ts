import { OkFail, okFail, okUpdate } from '.'
import isOkFail from './isOkFail'

export const okResolve = (okObj: OkFail<any>, promise?: Promise<any>) => {
	const fn = async (promise: Promise<any>) => {
		const resolved = await promise
		const update = (
			isOkFail(resolved) 
				? resolved 
				: okFail(resolved?.ok ?? true, resolved?.data ?? resolved)
		)
		okUpdate(okObj, update)
	}
	return promise === undefined ? fn : fn(promise)
}

export default okResolve