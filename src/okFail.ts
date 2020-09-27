export class OkFail <T> {
	ok: boolean
	data: T
	response?: Response

	constructor (ok: boolean, data: T) {
		this.ok   = ok
		this.data = data
	}
}

export const okFail = (ok: boolean, data: any) => new OkFail<typeof data>(ok, data)

export default okFail