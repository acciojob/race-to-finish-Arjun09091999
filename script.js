window.promises = [];
function getRandomTime() {
  return Math.floor(Math.random() * 5) * 1000 + 1000; // Random time between 1 and 5 seconds
}

function createPromise() {
  return new Promise((resolve) => {
    const time = getRandomTime();
    setTimeout(() => {
      resolve(`Promise resolved after ${time / 1000} seconds`);
    }, time);
  });
}

const promises = Array.from({ length: 5 }, createPromise);
const outputDiv = document.getElementById("output");

Promise.any(promises)
  .then((result) => {
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.error(error);
  });


// Do not change the code above this
// add your promises to the array `promises`
