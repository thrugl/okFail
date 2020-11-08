import { OkFail } from './types'
import { isUndefined } from './index'

export class OkFailObject<T> implements OkFail<T> {
	ok: boolean
	data: T
	error?: any

	constructor (ok: boolean, data: T, error?: any) {
		this.ok   = ok
		this.data = data

		if (!isUndefined(error)) {
			this.error = error
		}
	}
}

export default OkFailObject