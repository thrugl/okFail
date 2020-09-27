export declare class OkFail<T> {
    ok: boolean;
    data: T;
    response?: Response;
    constructor(ok: boolean, data: T);
}
export declare const okFail: (ok: boolean, data: any) => OkFail<any>;
export default okFail;
