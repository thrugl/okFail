import { OkFail, okFail } from './okFail'

export const fail = (data: any): OkFail<typeof data> => okFail(false, data)

export default fail