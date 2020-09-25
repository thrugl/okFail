import 'whatwg-fetch'
import fail from './fail'
import ok from './ok'
import { OkPromise, okPromise } from './okFailPromise'

const okFetch = <T>(options): Promise<OkPromise<T>> => {
	return fetch(options.url, options).then(ok).catch(fail)
}

export default okFetch