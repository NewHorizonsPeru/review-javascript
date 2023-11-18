const p1 = new Promise((resolve, reject) => {
  resolve("P1 Ok 😁");
});

const p2 = new Promise((resolve, reject) => {
  reject("P2 OK 😔");
});

const p3 = new Promise((resolve, reject) => {
  resolve("P3 Ok 😎");
});

const promises = [p1, p2, p3];

//Promise.all(promises).then((resp) => console.log(resp));
Promise.allSettled(promises).then((resp) => console.log(resp));
