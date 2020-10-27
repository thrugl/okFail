import { OkFail, okFail } from '.'

export const fail = (data: any, error?: any): OkFail<typeof data> => okFail(false, data, error)

export default fail