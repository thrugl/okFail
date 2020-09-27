import fail from './fail'
import isFail from './isFail'
import isOK from './isOK'
import isOkFail from './isOkFail'
import ok from './ok'
import okFail from './okFail'
import okFetch from './okFetch'
import okPromise from './okPromise'

export default {
	...fail, ...isFail, ...isOK, ...isOkFail, ...ok, 
	...okFail, ...okFetch, ...okPromise
}