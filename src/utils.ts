export const isUndefined = (x: any) => typeof x === 'undefined'
export const isFunction = (x: any) => typeof x === 'function'
export const fuser = (a: string, b: string) => (x: string) => a + x + b
export const lastChar = (x: string, s: string) => x === s.slice(-1)
export const addQueryString = (qs: string, url: string) => {
	const fuse = fuser(url, qs)
	if (url.includes('?')) {
		return lastChar('?', url) || lastChar('', url) ? fuse('') : fuse('&')
	}
	return fuse('?')
}