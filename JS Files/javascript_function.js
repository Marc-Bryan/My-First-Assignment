const arr = [    "Web Developer",    "Refocus",   "Web Developer",    "Web Developer",    "Refocus",    "Awesome",];

const countarr = countStrings(arr);

console.log(countarr);

function countStrings(strings) {
    const countObj = {};
    for (let i = 0; i < strings.length; i++) {
      const s = strings[i];
      if (countObj[s]) {
        countObj[s]++;
      } else {
        countObj[s] = 1;
      }
    }
    return countObj;
  }
  