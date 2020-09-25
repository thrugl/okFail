class OkFail <T> {
	ok: boolean
	data: T

	constructor (ok: boolean, data: any) {
		this.ok   = ok
		this.data = data
	}
}

export default OkFail