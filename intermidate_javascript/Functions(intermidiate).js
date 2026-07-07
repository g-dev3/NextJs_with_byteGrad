// overview again

function AddNumbers() {
  const num = 100;
  console.log(num + 10);
}
AddNumbers();

const AddNumber = () => {
  const num = 100;
  console.log(num + 10);
};

AddNumber();

// calling other function on other body

const logUser = () => {
  console.log("hello");
  console.log("hii");
};

const AddUser = () => {
  const newNumber = 100;
  console.log(newNumber);
  logUser();
  console.log(99);
};
AddUser();

// refactoring

const logGreeting = () => {
  console.log("hi");
  console.log("hello");
};

const numFun = () => {
  console.log("Dorgi");
  logGreeting();
  console.log("mesi");
  console.log(2334);
};

numFun();

const numFun2 = () => {
  console.log(2334);
  console.log("Rgoi");
  console.log("wesli");
  logGreeting();
};

numFun2();

// early return / stop function execution

const checkValidity = (number) => {
  if (number > 50) {
    console.log("Denied");
    return;
  }
  console.log("Aproved");
};

checkValidity(30);
