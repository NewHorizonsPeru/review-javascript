const comment = {
  owner: {
    id: 32,
    name: "Jaime",
  },
  created: "08/12/2022",
  content: "Ipsum minim deserunt sint deserunt.",
};
//const errorMessage = (comment.error ?? {}).message ?? "No existe error.";
const errorMessage = comment.error?.message ?? "No existe error.";
console.log(errorMessage);
