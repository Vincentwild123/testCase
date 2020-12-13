const fetchData = require("./fetchData.js");
test("async test", function () {
  setTimeout((data) => {
    expect(data).toBeUndefined();
  }, 2000);
});
test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBeUndefined();
      done();
    } catch (error) {
      done(error);
    }
  }
  setTimeout(callback, 2000);
});
//promise
test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("OK");
  });
});
//async/await
test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});
