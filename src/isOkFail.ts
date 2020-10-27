export const isOkFail = (o: any) => o?.__proto__?.constructor?.name === 'OkFailObject'

export default isOkFail