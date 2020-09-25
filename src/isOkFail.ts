const isOkFail = (o: any) => o.__proto__.constructor.name === 'OkFail'

export default isOkFail