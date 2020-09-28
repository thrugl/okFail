import { OkFail } from './types'

class OkFailObject<T> implements OkFail<T> {
	ok: boolean
	data: T

	constructor (ok: boolean, data: T) {
		this.ok   = ok
		this.data = data
	}
}

export default OkFailObject