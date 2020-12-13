function fetchData() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(resolve("OK"), 1000);
    } catch (error) {
      reject(error);
    }
  });
}
module.exports = fetchData;
