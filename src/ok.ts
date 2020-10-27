import okFail from './okFail'
import { OkFail } from './types'

export const ok = (data: any, error?: any): OkFail<typeof data> => okFail(true, data, error)

export default ok