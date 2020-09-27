import OkFail from './OkFailClass'

const okFail = (ok: boolean, data: any) => new OkFail<typeof data>(ok, data)

export default okFail 