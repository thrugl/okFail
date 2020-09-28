import isOkFail from './isOkFail'

const deOK = (x: any) => isOkFail(x) ? x.data : x

export default deOK