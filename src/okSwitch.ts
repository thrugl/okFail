import ok from './ok'
import isOK from './isOK'

export const okSwitch = (okObj: any, ifOkData: any) => isOK(okObj) ? ok(ifOkData) : okObj

export default okSwitch