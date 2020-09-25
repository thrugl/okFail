class OkFail <T> {
	ok: boolean
	data: T

	constructor (ok: boolean, data: T) {
		this.ok   = ok
		this.data = data
	}
}

const okFail = <T>(ok: boolean, data: T) => new OkFail<T>(ok, data)

export {
	OkFail,
	okFail
}
export default okFail