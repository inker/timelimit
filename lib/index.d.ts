export interface Options {
    rejectOnTimeout: boolean;
    errorMessage?: string;
}
/**
 * instead of new Promise((resolve, reject) => { ... }),
 * use promiseWithTimeout((resolve, reject) => { ... }, timeout, errorMsg)
 */
export declare const promiseWithTimeout: <T>(cb: (resolve: (value?: T | PromiseLike<T> | undefined) => void, reject: (reason?: any) => void) => void, timeout: number, options?: Options | undefined) => Promise<T>;
declare const _default: <T>(promise: Promise<T>, timeout: number, options?: Options | undefined) => Promise<{}>;
export default _default;
