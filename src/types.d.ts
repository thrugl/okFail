declare interface OkFail<T> {
	ok: boolean;
	data: T;
}
declare type OkPromise<T> = Promise<OkFail<T>>