// Short circuiting with &&

const price = 1000;

if (price > 500 && price < 2000) {
  console.log("hello");
}

price > 500 && console.log("hello world");

