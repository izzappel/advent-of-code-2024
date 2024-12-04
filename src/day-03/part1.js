const {readInput} = require('../file')

const getTestInput = () => readInput(`${__dirname}/test-input.txt`, {keepEmptyLines: true})

const getInput = () => readInput(`${__dirname}/input.txt`, {keepEmptyLines: true})

const multiply = mul => {
  const regex1 = /mul\((?<n1>\d{1,3}),(?<n2>\d{1,3})\)/

  const group = regex1.exec(mul)
  return parseInt(group.groups.n1) * parseInt(group.groups.n2)
}

const main = data => {
  const validMuls = []
  for (let index = 0; index < data.length - 1; index++) {
    validMuls.push(...data[index].match(/(?<mul>mul\(\d{1,3},\d{1,3}\))/gm))
  }

  const r = []
  for (let idx = 0; idx < validMuls.length; idx++) {
    const result = multiply(validMuls[idx])
    r.push(result)
  }

  console.log(validMuls, r)
  const sum = r.reduce((acc, d) => acc + d, 0)
  return sum
}

module.exports = {
  getInput,
  getTestInput,
  main
}
