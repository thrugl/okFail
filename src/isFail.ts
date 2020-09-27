import isOkFail from './isOkFail'

const isFail = (o: any) => isOkFail(o) && o.ok === false

export default isFail