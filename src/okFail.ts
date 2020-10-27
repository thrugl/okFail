import isOkFail from './isOkFail'
import OkFailObject from './OkFailObject'

export const okFail = (ok: boolean, data: any, error?: any) => {
	const payload = isOkFail(data) ? data.data : data
	return new OkFailObject<typeof data>(ok, payload, error)
}

export default okFail 