//  Workshop N4
// 1. 2 წამში დაბეჭდოს "გამარჯობა"
function sayHello() {
  setTimeout(() => {
    console.log("გამარჯობა");
  }, 2000);
}

// 2. setInterval 5-დან 1-მდე, ბოლოს "done"
function countdown() {
  let count = 5;
  let interval = setInterval(() => {
    console.log(count);
    count--;
    if (count === 0) {
      console.log("done");
      clearInterval(interval);
    }
  }, 1000);
}

// 3. doTask(task, callback)
function doTask(task, callback) {
  setTimeout(() => {
    callback(`დავალება შესრულებულია: ${task}`);
  }, 1000);
}

// 4. random შემოწმება
function checkTask() {
  return Math.random() > 0.4 ? "შესრულებულია" : "შესასრულებელია";
}

// 5. სამი პრომისი რიგით
function steps() {
  function step(msg, time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(msg);
        resolve();
      }, time);
    });
  }

  step("ნაბიჯი 1", 1000)
    .then(() => step("ნაბიჯი 2", 1000))
    .then(() => step("ნაბიჯი 3", 1000));
}

// 6. წამოიღე ერთი პოსტი
function fetchPost1() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => console.log("Post 1:", data));
}

// 7. Promise.all /posts/1 და /posts/2
function fetchPosts() {
  Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((r) => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts/2").then((r) => r.json()),
  ]).then((results) => {
    console.log("Post 1 და 2:", results);
  });
}

// 8. ქალაქის ტემპერატურა
function getWeather(city) {
  fetch(`https://wttr.in/${city}?format=j1`)
    .then((res) => res.json())
    .then((data) => {
      console.log(
        `${city} ტემპერატურა:`,
        data.current_condition[0].temp_C,
        "°C"
      );
    });
}

// 9. randomuser.me API
function getRandomUser() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      const user = data.results[0];
      console.log("სახელი:", user.name.first, user.name.last);
      console.log("ქვეყანა:", user.location.country);
    });
}

/* ======= გამოყენების მაგალითები ======= */
sayHello();
countdown();
doTask("ვარჯიში", console.log);
console.log(checkTask());
steps();
fetchPost1();
fetchPosts();
getWeather("kutaisi");
getRandomUser();
