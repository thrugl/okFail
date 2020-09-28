import fail from "./fail"
import isOK from "./isOK"
import { OkFail } from './types'

const ifOK = (x: OkFail<any>, ifFn: Function, elseFn?: Function) => {
	if (isOK(x)) return ifFn(x)
	if (typeof elseFn !== 'undefined') return elseFn(x)
	
	return fail(x)
}

export default ifOK