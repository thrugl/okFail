import { OkFail } from './okFail';
export declare type OkPromise<T> = Promise<OkFail<T>>;
export declare type CheckFn = (x: unknown) => boolean;
export declare const okPromise: <T>(promise: Promise<T>, check?: boolean | CheckFn | undefined) => OkPromise<T>;
export default okPromise;
