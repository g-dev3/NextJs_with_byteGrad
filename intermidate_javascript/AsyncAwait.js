/*

// GET 
const button = document.querySelector(".button");
const clickHandler = ()=>{
  fetch('https://jsonplaceholder.typicode.com/users').then(
    res=>{
      if(!res.ok){
        console.log('There was a Problem');
        return
      }
      return res.json()
    }
  ).then(
    data=>{
      console.log(data[1].name)
    }
  ).catch(
    error=>{
      console.log(`Your error is ${error}`);
      
    }
  )

}
button.addEventListener("click", clickHandler);

*/

/*

// POST
const button = document.querySelector(".button");
const newUser = {
  name: "gdev",
  job: "software",
};

const clickHandler = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();
    if (!res.ok) {
      console.log(data.description);
      return;
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
button.addEventListener("click", clickHandler);

*/

/* 

// PUT
const button = document.querySelector(".button");
const newUser = {
  name: "gdev",
  job: "software",
};

const clickHandler = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();
    if (!res.ok) {
      console.log(data.description);
      return;
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
button.addEventListener("click", clickHandler);

*/

// DELETE
const button = document.querySelector(".button");
const newUser = {
  name: "gdev",
  job: "software",
};

const clickHandler = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2", {
      method: "DELETE"
    });
    const data = await res.json();
    if (!res.ok) {
      console.log(data.description);
      return;
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
button.addEventListener("click", clickHandler);