import { OkFail, isUndefined } from '.'

type T = OkFail<any>

export const okUpdate = (toUpdate: T, update: T|undefined): T|((x: T) => T) => {
	const fn = (update: T|undefined) => {
		toUpdate.ok = update?.ok ?? false
		toUpdate.data = update?.data
		return toUpdate
	}
	return isUndefined(update) ? fn : fn(update)
}

export default okUpdate