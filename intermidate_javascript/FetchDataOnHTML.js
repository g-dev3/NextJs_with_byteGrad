fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((user) => {
      // const userName = `<li>${user.name}</li>`;
      // document.querySelector("ul").innerHTML += userName;

      // const userName = user.name;
      // let li = document.createElement("li");
      // li.textContent = userName;
      // document.querySelector("ul").appendChild(li);

      // const li = document.createElement('li')
      // li.textContent = user.name
      // document.querySelector('ul').insertAdjacentElement('beforeend', li)

      const li = `<li>${user.name}</li>`;
      document.querySelector("ul").insertAdjacentHTML("beforeend", li);
    });
  })
  .catch((error) => {
    console.log(`Your error is ${error}`);
  });
