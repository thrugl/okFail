import { okFetch, okFailSwitch, isUndefined, isFunction, 
	OkFetchOptions, OkPromiseValidator, OkFail, OkPromise } from './index'

export type OkFetcherUrlFunc          = (...args: any[]) => string
export type OkFetcherUrl              = string|OkFetcherUrlFunc
export type OkFetcherDataFunc<T, F=T> = (data: T, ...args: any[]) => F 
export type OkFetcherData<T, F=T>     = F|OkFetcherDataFunc<T, F>
export type OkFetcherQueryFunc        = (...args: any[]) => {[x: string]: any}
export type OkFetcherQuery            = {[x: string]: any}|OkFetcherQueryFunc
export type OkFetcherConfigFunc       = (...args: any[]) => OkFetchOptions
export type OkFetcherConfig           = OkFetchOptions|OkFetcherConfigFunc
export type OkFetcherStoreGetter<T>   = (...args: any[]) => T|null
export type OkFetcherStoreSetter<T>   = (okObj: OkFail<T>, ...args: any[]) => void

export interface OkFetcherOptions <T, F=T>{
	url: OkFetcherUrl;
	config?: OkFetcherConfig;
	validate?: OkPromiseValidator;
	failData?: OkFetcherData<T, F>;
	okData?: OkFetcherData<T, F>;
	query?: OkFetcherQuery;
	data?: OkFetcherQuery;
	getter?: OkFetcherStoreGetter<F>;
	setter?: OkFetcherStoreSetter<F>;
}

export function okFetcher <T, F=T>({ 
	url, 
	validate, 
	failData, 
	okData,
	query = {}, 
	data = {},
	config = {},
	getter,
	setter
}: OkFetcherOptions<T, F>) {
	return async (...args: any[]) => {
		const target = isFunction(url) ? (url as OkFetcherUrlFunc)(...args) : url as string
		const options = { 
			query: isFunction(query) ? (query as OkFetcherQueryFunc)(...args) : query, 
			data: isFunction(data) ? (data as OkFetcherQueryFunc)(...args) : data,
			...(isFunction(config) ? (config as OkFetcherConfigFunc)(...args) : config)
		}

		if (isFunction(getter)) {
			const stored = (getter as OkFetcherStoreGetter<F>)(...args)
			if (stored) return stored
		}

		const load = await okFetch<T>(target, options, validate)
		const check = (_Data: any) => {
			if (isUndefined(_Data)) return load.data
			return isFunction(_Data) ? _Data(load.data, ...args) : _Data
		}
		const result = okFailSwitch(load, check(okData), check(failData))

		if (isFunction(setter)) {
			(setter as OkFetcherStoreSetter<F>)(result, ...args)
		}
		return result
	}
}

export default okFetcher