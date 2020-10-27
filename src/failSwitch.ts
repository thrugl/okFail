import fail from './fail'
import isOK from './isOK'

export const failSwitch = (okObj: any, ifFailData: any) => isOK(okObj) ? okObj : fail(ifFailData)

export default failSwitch