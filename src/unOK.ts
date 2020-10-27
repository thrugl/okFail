import isOkFail from './isOkFail'

export const unOK = (x: any) => isOkFail(x) ? x.data : x

export default unOK