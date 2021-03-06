import { isFunction, isUndefined, OkFail, fail, ok } from './index'

export type OkPromiseValidatorFunc = (data?: any) => boolean
export type OkPromiseValidator = boolean|OkPromiseValidatorFunc

export const okPromise = async <T>(
	promise: T|Promise<T>, 
	validate?: OkPromiseValidator,
	error?: any
): Promise<OkFail<T>> => {
	try {
		const data = await promise
		const isValidated = () => (
			isFunction(validate) 
				? (validate as OkPromiseValidatorFunc)(data) 
				: validate
		)
		if (isUndefined(validate) || isValidated()) {
			return ok(data)
		}
		else throw data
	}
	catch (data) {
		return fail(data, 'Failed validation')
	}
}

export default okPromise