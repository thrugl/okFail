import { OkFail, fail, ok, okUpdate } from '.'

export const okResolve = (okObj: OkFail<any>, promise?: Promise<any>) => {
	const fn = async (p: Promise<any>) => {
		const resolved = await p.then(ok).catch(fail)
		okUpdate(okObj, resolved)
	}
	return promise === undefined ? fn : fn(promise)
}

export default okResolve