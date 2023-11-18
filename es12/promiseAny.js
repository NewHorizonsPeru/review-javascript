const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("P3 Resuelta");
  }, 5000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("P2 Resuelta");
  }, 1000);
});

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("P1 Resuelta");
  }, 1000);
});

const promises = [p3, p2, p1];
Promise.any(promises)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
