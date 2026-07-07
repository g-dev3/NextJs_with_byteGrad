// length (number of element in arrays)

const numbers = [2, 45, 67, 110];

console.log(numbers[2]);

console.log(numbers[2] * 2);

// push()

numbers.push(12);

console.log(numbers);

// includes()

const find = numbers.includes(34);

console.log(find);

// forEach()

numbers.forEach((number) => {
  console.log(number * 2);
});


// Object in Array

const clientData = [
  {
    name:'john',
    age:22
  },{
    name:'rob',
    age:12
  },{
    name:'robin',
    age:7
  }
]

console.log(clientData[2]);

console.log(clientData[1].name);
