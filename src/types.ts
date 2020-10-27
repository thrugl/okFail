export interface OkFail<T> {
	ok: boolean;
	data: T;
	error?: any;
}
export type OkPromise<T> = Promise<OkFail<T>>