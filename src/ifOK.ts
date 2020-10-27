import { OkFail, isOK, fail, isUndefined } from '.'

/* DEPRECATED SINCE 1.5.0, USE 'okFailCall' INSTEAD */

export const ifOK = (x: OkFail<any>, ifFn: Function, elseFn?: Function) => {
	if (isOK(x)) return ifFn(x)
	if (!isUndefined(elseFn)) return (elseFn as Function)(x)
	return fail(x)
}

export default ifOK