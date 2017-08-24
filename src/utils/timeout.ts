// setTimeout as a Promise
export const timeout = (time) => {
  console.error('timeout');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}
