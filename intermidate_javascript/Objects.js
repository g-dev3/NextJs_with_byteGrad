// Object

const user = {
  name:"Robin",
  age:7,
  email:'example.com',
  hobbies:['running','sleeping'],
  adress:{
    village:'Jepali',
    district:'jodhpur',
    state:'Rajasthan',
    Country:'India'
  }
}

// Object in object

// property name is sometimes same as property value

const input={
  value:'Gopal',
  valuep:'1234'
}

const username = input.value;
const password = input.valuep;

const newUser = {
  username:username,
  password:password
}

// passing object as argument to function

function logUser(user){
  console.log(user.email)
}

logUser(user)