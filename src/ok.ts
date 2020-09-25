import OkFail from './OkFail'

const ok = (data: any) => new OkFail(true, data)

export default ok