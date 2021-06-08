import { okFail } from './okFail'
import { OkFail } from './types'

type OkFailPromise<T> = Promise<OkFail<T>>

const okFailPromise = <T>(ok: boolean, data: T): OkFailPromise<T> => {
	return new Promise(async () => okFail(ok, data))
}

export {
	OkFailPromise,
	okFailPromise
}
export default okFailPromise