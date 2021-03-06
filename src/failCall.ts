import { OkFail, OkPromise, OkFailCallFunc, okFailCall } from './index'

export const failCall = <T>(okObj: OkFail<T>, ifFail: OkFailCallFunc<T>): OkPromise<any> => (
	okFailCall(okObj, (x: OkFail<T>) => x, ifFail)
)

export default failCall