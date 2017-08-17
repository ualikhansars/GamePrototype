// setTimeout as a Promise
export const timeout = (time) => {
  console.log('timeout');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}
