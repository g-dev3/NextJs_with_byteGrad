const numbers = [10, 100, 500, 1000];

// push()
numbers.push(5000);
console.log(numbers);

// forEach()
numbers.forEach((number) => {
  console.log(number);
});

// map()
const newNumbers = numbers.map((number) => {
  return number;
});

console.log(newNumbers);

// some()
const newNum = numbers.some((number) => {
  return number > 9;
});
console.log(newNum);

//find()

const result = numbers.find((number) => {
  return number > 500;
});

console.log(result);

//filter()

const newNums = numbers.filter((number)=>{
  return number < 200
})

console.log(newNums);
