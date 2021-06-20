import { curry } from 'ramda'
import { okFail, okUpdate } from './index'
import isOkFail from './isOkFail'

import type { OkFail } from './index'

export const okResolve = curry(
	async (okObj: OkFail<any>, promise: Promise<any>) => {
		const resolved = await promise
		const update = (
			isOkFail(resolved) 
				? resolved 
				: okFail(resolved?.ok ?? true, resolved?.data ?? resolved)
		)
		return okUpdate(okObj, update)
	}
)

export default okResolve