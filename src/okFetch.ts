import fetch from 'cross-fetch'
import { okPromise, OkPromise } from './okPromise'

export const okFetch = async <T>(
	url: string, 
	options: RequestInit = {},
	check?: (x: Response) => boolean
): OkPromise<T|Error> => {
	try {
		const x      = await fetch(url, options)
		const type   = x.headers.get('content-type')
		const isJSON = type && type.includes('application/json')
		const data   = (isJSON ? x.json() : x.text()) as Promise<T>

		return okPromise<T>(data, () => {
			console.log('testin')
			if (typeof check !== 'undefined') {
				return check(x)
			}
			return x.ok
		})
	}
	catch (e) {
		return okPromise<Error>(Promise.resolve(Error(e)), false)
	}
}

export default okFetch