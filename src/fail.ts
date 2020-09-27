import OkFail from './OkFailClass'
import okFail from './okFail'

const fail = (data: any): OkFail<typeof data> => okFail(false, data)

export default fail