// callbacks function
function doSomething() {}

const calculatePrice = () => {};

[1, 2, 3].some(function () {
  // This is call callback function
});

// methods

const num = [1, 2, 3, 5];

num.push(34); // this is a method

const obj = {
  name: "john",
  hobbies: ["golf", "skitting"],
  calulateAge: function () {
    return 30 + this.hobbies.length;
  },
};

console.log(obj.calulateAge());

// Advance

function CalulatePrice(sqMtr) {
  return 3000 + sqMtr;
}

const result = CalulatePrice(2000);

console.log(result);
