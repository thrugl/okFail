import OkFailObject from './OkFailObject'

const okFail = (ok: boolean, data: any) => new OkFailObject<typeof data>(ok, data)

export default okFail 