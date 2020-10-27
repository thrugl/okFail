import fail from './fail'
import isOK from './isOK'
import ok from './ok'

export const okFailSwitch = (okObj: any, ifOkData: any, ifFailData: any) => (
	isOK(okObj) ? ok(ifOkData) : fail(ifFailData)
)

export default okFailSwitch