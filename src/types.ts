export interface OkFail<T> {
	ok: boolean;
	data: T;
}
export type OkPromise<T> = Promise<OkFail<T>>