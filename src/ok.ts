import okFail from './okFail'
import { OkFail } from './types'

const ok = (data: any): OkFail<typeof data> => okFail(true, data)

export default ok