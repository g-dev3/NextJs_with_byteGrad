const button = document.querySelector(".button");

const clickHandle = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    const data = await res.json();
    if (!res.ok) {
      console.log("There was a problem");
      return;
    }
    console.log(data.title);
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener("click", clickHandle);
