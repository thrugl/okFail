import OkFailObject from './OkFailObject'

export const okFail = (ok: boolean, data: any, error?: any) => {
	const payload = data?.data ?? data
	return new OkFailObject<typeof data>(ok, payload, error)
}

export default okFail 