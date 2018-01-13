type Resolve<T> = (value?: T | PromiseLike<T> | undefined) => void
type Reject = (reason?: any) => void

export interface Options {
  rejectOnTimeout: boolean,
  errorMessage?: string,
}

const defaultOptions: Options = {
  rejectOnTimeout: true,
  errorMessage: undefined,
}

/**
 * instead of new Promise((resolve, reject) => { ... }),
 * use promiseWithTimeout((resolve, reject) => { ... }, timeout, errorMsg)
 */
export const promiseWithTimeout = <T>(
  cb: (resolve: Resolve<T>, reject: Reject) => void,
  timeout: number,
  options?: Options,
) => {
  const {
    rejectOnTimeout = defaultOptions.rejectOnTimeout,
    errorMessage = defaultOptions.errorMessage,
  } = options || defaultOptions
  return new Promise<T>((resolve, reject) => {
    cb(resolve, reject)
    setTimeout(() => {
      if (rejectOnTimeout) {
        reject(errorMessage)
      } else {
        resolve()
      }
    }, timeout)
  })
}

/**
 * adds timelimit to the given promise
 */
export default <T>(
  promise: Promise<T>,
  timeout: number,
  options?: Options,
) => promiseWithTimeout(
  (resolve, reject) => promise.then(resolve).catch(reject),
  timeout,
  options,
)
