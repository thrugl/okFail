import fetch from 'cross-fetch'
import okPromise from './okPromise'
import { OkPromise } from './types'

const okFetch = async <T>(
	url: string, 
	options: RequestInit = {},
	check?: (x: Response) => boolean
): OkPromise<T|Error> => {
	try {
		const load   = await fetch(url, options)
		const type   = load.headers.get('content-type')
		const isJSON = type && type.includes('application/json')
		const data   = (isJSON ? load.json() : load.text()) as Promise<T>

		return okPromise<T>(data, () => {
			if (typeof check !== 'undefined') {
				return check(load)
			}
			return load.ok
		})
	}
	catch (e) {
		return okPromise<Error>(Promise.resolve(Error(e)), false)
	}
}

export default okFetch