const promises = [
  new Promise((resolve) => setTimeout(resolve, getRandomTime())),
  new Promise((resolve) => setTimeout(resolve, getRandomTime())),
  new Promise((resolve) => setTimeout(resolve, getRandomTime())),
  new Promise((resolve) => setTimeout(resolve, getRandomTime())),
  new Promise((resolve) => setTimeout(resolve, getRandomTime())),
];

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = `The first promise resolved with result: ${result}`;
  })
  .catch((error) => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = `All promises rejected: ${error}`;
  });

function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
}

