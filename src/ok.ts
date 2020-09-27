import { OkFail, okFail } from './OkFail'

export const ok = (data: any): OkFail<typeof data> => okFail(true, data)

export default ok