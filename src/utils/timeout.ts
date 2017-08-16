// setTimeout as a Promise
export const timeout = (time, i) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('done');
    }, time);
  })
}
