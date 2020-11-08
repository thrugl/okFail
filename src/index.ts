import { OkPromise, OkFail } from './types'
import { fail } from './fail'
import { ifOK } from './ifOK'
import { isFail } from './isFail'
import { isOK } from './isOK'
import { isOkFail } from './isOkFail'
import { ok } from './ok'
import { okCall } from './okCall'
import { failCall } from './failCall'
import { okFailCall, OkFailCallFunc } from './okFailCall'
import { okFail } from './okFail'
import { OkFailObject } from './OkFailObject'
import { okFetch, OkFetchOptions, OkFetchData,
	OkFetchDataFormatter, OkFetchType } from './okFetch'
import { OkFetcherUrlFunc, OkFetcherUrl, OkFetcherDataFunc,
	OkFetcherData, OkFetcherOptions, okFetcher, OkFetcherQuery, 
	OkFetcherQueryFunc, OkFetcherStoreGetter, OkFetcherStoreSetter } from './okFetcher'
import { okPromise, OkPromiseValidator, OkPromiseValidatorFunc } from './okPromise'
import { okResolve } from './okResolve'
import { okUpdate } from './okUpdate'
import { failSwitch } from './failSwitch'
import { okSwitch } from './okSwitch'
import { okFailSwitch } from './okFailSwitch'
import { unOK } from './unOK'
import { isUndefined, isFunction, fuser, lastChar, addQueryString } from './utils'

export {
	okFail, ok, fail, OkFail, OkFailObject, 
	ifOK, isFail, isOK, isOkFail,
	okFailCall, OkFailCallFunc, okCall, failCall,
	okFetch, OkFetchOptions, OkFetchData,
	OkFetchDataFormatter, OkFetchType,
	okFetcher, OkFetcherUrlFunc, OkFetcherUrl, 
	OkFetcherDataFunc, OkFetcherData, OkFetcherOptions, 
	OkFetcherStoreGetter, OkFetcherStoreSetter, 
	OkFetcherQuery, OkFetcherQueryFunc,
	okPromise, OkPromise, 
	OkPromiseValidator, OkPromiseValidatorFunc,
	okResolve, okUpdate,
	failSwitch, okSwitch, okFailSwitch, 
	unOK,
	isUndefined, isFunction, 
	fuser, lastChar, addQueryString
}

export default {
	okFail, ok, fail, OkFailObject, 
	ifOK, isFail, isOK, isOkFail,
	okFetch, okFetcher,
	okResolve, okPromise, okUpdate,
	failSwitch, okSwitch, okFailSwitch,
	failCall, okCall, okFailCall,
	unOK
}