import isOkFail from './isOkFail'

const isOK = (o: any) => isOkFail(o) && o.ok === true

export default isOK