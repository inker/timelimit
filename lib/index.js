"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultOptions = {
    rejectOnTimeout: true,
    errorMessage: undefined,
};
/**
 * instead of new Promise((resolve, reject) => { ... }),
 * use promiseWithTimeout((resolve, reject) => { ... }, timeout, errorMsg)
 */
exports.promiseWithTimeout = (cb, timeout, options) => {
    const { rejectOnTimeout = defaultOptions.rejectOnTimeout, errorMessage = defaultOptions.errorMessage, } = options || defaultOptions;
    return new Promise((resolve, reject) => {
        cb(resolve, reject);
        setTimeout(() => {
            if (rejectOnTimeout) {
                reject(errorMessage);
            }
            else {
                resolve();
            }
        }, timeout);
    });
};
/**
 * adds timelimit to the given promise
 */
exports.default = (promise, timeout, options) => exports.promiseWithTimeout((resolve, reject) => promise.then(resolve).catch(reject), timeout, options);
//# sourceMappingURL=index.js.map