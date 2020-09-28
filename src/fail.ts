import okFail from './okFail'
import { OkFail } from './types'

const fail = (data: any): OkFail<typeof data> => okFail(false, data)

export default fail