import { apiKey } from "./secrets";

// let myArr = [1, 2, 3, 4, 5];

// let eachRes = myArr.forEach((item, index) => {
//   console.log(item);
// });

// let mapRes = myArr.map((item, index) => {
//   console.log(item);
//   return item * item;
// });

// console.log("\n");
// console.log(eachRes);
// console.log(mapRes);

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((e) => console.log(e));

const fetch = require("node-fetch");

const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

async function GetWeatherData() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
