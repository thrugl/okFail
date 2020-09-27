import { OkFail, okFail } from './okFail'

export const ok = (data: any): OkFail<typeof data> => okFail(true, data)

export default ok