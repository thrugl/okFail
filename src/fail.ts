import OkFail from './OkFail'

const fail = (data: any) => new OkFail(false, data)

export default fail