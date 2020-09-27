class OkFail <T> {
	ok: boolean
	data: T

	constructor (ok: boolean, data: T) {
		this.ok   = ok
		this.data = data
	}
}

export default OkFail