/**
 * @param {number} millis
 * @return {Promise}
 */

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

// Example 1
let t1 = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t1); // 100
});

// Example 2
async function example() {
  const t2 = Date.now();
  await sleep(200);
  console.log(Date.now() - t2); // 200
}
example();