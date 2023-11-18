const users = [
  {
    id: 1,
    username: "admin",
  },
  {
    id: 2,
    username: "support",
  },
  {
    id: 3,
    username: "administrator",
  },
];

/**const newArray = users.map((user) => {
  return [`${user.username}`];
});

console.log(newArray);**/

const newArrayFlatMap = users.flatMap((user) => {
  return [`${user.username}`];
});

console.log(newArrayFlatMap);
