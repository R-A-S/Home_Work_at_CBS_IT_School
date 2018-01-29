/*jshint esversion: 6 */
addEventListener(
  'message',
  function(e) {
    const array = new Array(100);
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * (100 - 1)) + 1;
      postMessage(e.data);
      console.log(i);
    }
  },
  true
);
