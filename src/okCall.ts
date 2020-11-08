import { OkFail, OkPromise, OkFailCallFunc, okFailCall } from './index'

export const okCall = <T>(okObj: OkFail<T>, ifOK: OkFailCallFunc<T>): OkPromise<any> => (
	okFailCall(okObj, ifOK, (x: OkFail<T>) => x)
)

export default okCall