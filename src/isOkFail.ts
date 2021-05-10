// export const isOkFail = (o: any) => o?.__proto__?.constructor?.name === 'OkFailObject'

export const isOkFail = (o: any) => o.hasOwnProperty('ok') && o.hasOwnProperty('data')

export default isOkFail