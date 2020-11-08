import { isUndefined, OkFail, okPromise, addQueryString, 
	OkPromiseValidator } from './index'

import fetch from 'cross-fetch'
import qs from 'qs'
import QueryString from 'qs'
import fail from './fail'

export interface OkFetchData {
	[param: string]: any;
}
export type OkFetchDataFormatter = (o: OkFetchData) => string
export type OkFetchType = 'json'|'form'|'html'|string
export interface OkFetchOptions extends RequestInit {
	type?: OkFetchType;
	forceJSON?: boolean;
	query?: OkFetchData|string;
	queryFormat?: OkFetchDataFormatter;
	qsQueryOptions?: QueryString.IStringifyOptions;
	data?: OkFetchData|string;
	dataFormat?: OkFetchDataFormatter;
	qsDataOptions?: QueryString.IStringifyOptions;
}

export const okFetch = async <T>(
	url: string, 
	options: OkFetchOptions = {},
	validate?: OkPromiseValidator
): Promise<OkFail<T|null>> => {
	const query = (
		isUndefined(options.query) 
			? '' 
			: isUndefined(options.queryFormat)
				? qs.stringify(options.query, options?.qsQueryOptions ?? {})
				: (options.queryFormat as OkFetchDataFormatter)(options.query as OkFetchData)
	)
	const target = addQueryString(query, url)

	const contentType = (options.type ?? 'json').toLowerCase()
	const jsonType    = 'application/json'
	const formType    = 'application/x-www-form-urlencoded'

	const headers = {
		...(isUndefined(options.type)  ? {} : {
			'content-type': (
				contentType === 'json' 
					? jsonType
					: contentType === 'form'
						? formType
						: options.type as string
			)
		}),
		...(options.headers ?? {})
	}

	const body = options?.body ?? (
		(options?.method ?? '').toUpperCase() === 'POST'
			? isUndefined(options.dataFormat) 
				? contentType === 'form'
					? qs.stringify(options.data, options?.qsDataOptions ?? {})
					: JSON.stringify(options.data)
				: (options.dataFormat as OkFetchDataFormatter)(options.data as OkFetchData)
			: undefined
	)

	const fetchOptions = {
		...options,
		body,
		headers
	}

	try {
		const load   = await fetch(target, fetchOptions)
		const type   = load.headers.get('content-type')?.toLowerCase() ?? ''
		const isJSON = (options?.forceJSON ?? false) || (type && type.includes('json'))
		const data   = (isJSON ? load.json() : load.text()) as Promise<T>

		return okPromise<T>(data, validate)
	}
	catch (e) {
		return fail(null, e)
	}
}

export default okFetch