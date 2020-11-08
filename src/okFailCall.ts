import { OkFail, OkPromise, isOK, isOkFail, ok } from '.'

export type OkFailCallFunc<T> = (okObj: OkFail<T>) => any

export const okFailCall = async <T>(
	okObj: OkFail<T>, 
	ifOK: OkFailCallFunc<T>, 
	ifFail: OkFailCallFunc<T>
): Promise<OkFail<T>> => {
	const result = await (isOK(okObj) ? ifOK(okObj) : ifFail(okObj))
	return isOkFail(result) ? result : ok(result)
}

export default okFailCall