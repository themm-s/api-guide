import { getData, postData } from "./main.js";

const sendDataButton = document.querySelector('.sendData');
const getDataButton = document.querySelector('.getData');

sendDataButton.addEventListener('click', postData);
getDataButton.addEventListener('click', getData);