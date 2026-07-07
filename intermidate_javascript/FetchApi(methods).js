const newuser = {
  name: "jon",
  lastnam: "deo",
};

// POST 

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(newuser),
})
  .then((res) => {
    if (!res.ok) {
      console.log("Problem");
      return;
    }
    return res.json();
  })
  .then((data) => {
    console.log("success");
  })
  .catch((error) => {
    console.log(`Your Error ${error}`);
  });


// GET

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    if (!res.ok) {
      console.log("Problem");
      return;
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`Your Error ${error}`);
  });

// PUT 

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(newuser),
})
  .then((res) => {
    if (!res.ok) {
      console.log("Problem");
      return;
    }
    return res.json();
  })
  .then((data) => {
    console.log("success");
  })
  .catch((error) => {
    console.log(`Your Error ${error}`);
  });

  // DELETE

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
  
})
  .then((res) => {
    if (!res.ok) {
      console.log("Problem");
      return;
    }
    return res.json();
  })
  .then((data) => {
    console.log("success");
  })
  .catch((error) => {
    console.log(`Your Error ${error}`);
  });