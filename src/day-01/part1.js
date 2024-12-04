const {readInput} = require('../file')

const getTestInput = () => readInput(`${__dirname}/test-input.txt`, {keepEmptyLines: true})

const getInput = () => readInput(`${__dirname}/input.txt`, {keepEmptyLines: true})

const main = data => {
  const list1 = []
  const list2 = []
  for (let index = 0; index < data.length - 1; index++) {

    const [el1, el2] = data[index].split("   ")
    // console.log(data[index].split(/\s*/));

    list1.push(parseInt(el1))
    list2.push(parseInt(el2))
  }

  list1.sort()
  list2.sort()

  // console.log(list1);
  // console.log(list2);


  let distance = 0
  for (let index = 0; index < list1.length; index++) {
    const el1 = list1[index]
    const el2 = list2[index]
    // console.log(Math.abs(el1 - el2));

    distance += Math.abs(el1 - el2)
  }

  console.log(distance)
  return distance
}

module.exports = {
  getInput,
  getTestInput,
  main
}
