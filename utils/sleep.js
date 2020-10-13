async function sleep(n) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve('result');
    }, n)
  );
}

export default sleep;
