const {readInput} = require('../file')

const getTestInput = () => readInput(`${__dirname}/test-input.txt`, {keepEmptyLines: true})

const getInput = () => readInput(`${__dirname}/input.txt`, {keepEmptyLines: true})

const isSafe = record => {
  let increasing
  for (let index = 1; index < record.length; index++) {
    const prev = record[index - 1]
    const current = record[index]
    const step = prev - current

    if (step === 0 || Math.abs(step) > 3) {
      return false
    }

    const inc = step > 0
    if (typeof increasing === 'undefined') {
      increasing = inc
    } else if (inc !== increasing) {
      return false
    }
  }
  return true
}

const main = data => {
  const safeRecords = []
  for (let index = 0; index < data.length - 1; index++) {
    const records = data[index].split(' ').map(d => parseInt(d))

    if (isSafe(records)) {
      safeRecords.push(records)
    }
  }

  console.log(safeRecords.length)
  return safeRecords.length
}

module.exports = {
  getInput,
  getTestInput,
  main
}
