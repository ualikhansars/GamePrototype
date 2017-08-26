// setTimeout as a Promise
export const timeout = (time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}
