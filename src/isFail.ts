import isOkFail from './isOkFail'

export const isFail = (o: any) => isOkFail(o) && o.ok === false

export default isFail