// Event Loop

const timeout = setTimeout(() => {
  console.log("After TimeOut");
}, 2500);
clearTimeout(timeout);

const interval = setInterval(() => {
  console.log("After timeOut");
}, 1000);
clearInterval(interval);

const delay = (callback, wait = 1000) => {
  setTimeout(callback, wait);
};

delay(() => {
  console.log("After 2 seconds");
}, 2000);

const delay = (wait = 500) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve();
      reject("Что то пошло не так. Повторите попытку");
    }, wait);
  });
  return promise;
};

delay(1000)
  .then(() => {
    console.log("after 2 secs");
  })
  .catch((err) => console.error("Error:", err))
  .finally(() => console.log("Finally"));

const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]));

getData().then((data) => console.log(data));

async function aSyncExample() {
  try {
    await delay(3000);
    const data = await getData();
    console.log("Data", data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Finally");
  }
}

aSyncExample();
