import { OkPromise } from './okPromise';
export declare const okFetch: <T>(url: string, options?: RequestInit, check?: ((x: Response) => boolean) | undefined) => OkPromise<Error | T>;
export default okFetch;
