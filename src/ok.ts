import okFail from './okFail'

const ok = (data: any): OkFail<typeof data> => okFail(true, data)

export default ok