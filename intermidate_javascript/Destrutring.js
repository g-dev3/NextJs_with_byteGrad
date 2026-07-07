const user = {
  name: "johns",
  age: 29,
  hobbies: "tennis",
};
// const name = user.name
// const hobbies = user.hobbies

const { name, hobbies } = user;

console.log(hobbies);

const nums = [5, 10, 15, 20, 25];

const [a, b, c] = nums;

console.log(b);
