import { isOkFail } from '.'

export const isOK = (o: any) => isOkFail(o) && o.ok === true

export default isOK