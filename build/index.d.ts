declare type Resolve<T> = (value?: T | PromiseLike<T> | undefined) => void;
declare type Reject = (reason?: any) => void;
export interface Options {
    rejectOnTimeout: boolean;
    errorMessage?: string;
}
/**
 * instead of new Promise((resolve, reject) => { ... }),
 * use promiseWithTimeout((resolve, reject) => { ... }, timeout, errorMsg)
 */
export declare function promiseWithTimeout<T>(cb: (resolve: Resolve<T>, reject: Reject) => void, timeout: number, options?: Options): Promise<T>;
declare const _default: <T>(promise: Promise<T>, timeout: number, options?: Options | undefined) => Promise<T>;
/**
 * adds timelimit to the given promise
 */
export default _default;
