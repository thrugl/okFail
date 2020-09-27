import { OkFail, okFail } from './OkFail'

export const fail = (data: any): OkFail<typeof data> => okFail(false, data)

export default fail