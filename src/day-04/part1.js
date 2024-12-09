const {readInput} = require('../file')

const getTestInput = () => readInput(`${__dirname}/test-input.txt`, {keepEmptyLines: true})

const getInput = () => readInput(`${__dirname}/input.txt`, {keepEmptyLines: true})

const main = data => {
  let count = 0
  const map = data.map(l => l.split(''))
  const yMax = map.length - 1
  const xMax = map[0].length
  for (let y = 0; y < yMax; y++) {
    for (let x = 0; x < xMax; x++) {
      const c = map[y][x]
      if (c === 'X') {
        // vertical
        if (y + 3 < yMax && map[y + 1][x] === 'M' && map[y + 2][x] === 'A' && map[y + 3][x] === 'S') {
          count++
          console.log('vertical', y, x)
        }

        // vertical backwards
        if (y - 3 >= 0 && map[y - 1][x] === 'M' && map[y - 2][x] === 'A' && map[y - 3][x] === 'S') {
          count++
          console.log('vertical backwards', y, x)
        }

        // horizontal
        if (x + 3 < xMax && map[y][x + 1] === 'M' && map[y][x + 2] === 'A' && map[y][x + 3] === 'S') {
          count++
          console.log('horizontal', y, x)
        }

        // horizontal backwards
        if (x - 3 >= 0 && map[y][x - 1] === 'M' && map[y][x - 2] === 'A' && map[y][x - 3] === 'S') {
          count++
          console.log('horizontal backwards', y, x)
        }

        // diagonal (down - right)
        if (
          x + 3 < xMax &&
          y + 3 < yMax &&
          map[y + 1][x + 1] === 'M' &&
          map[y + 2][x + 2] === 'A' &&
          map[y + 3][x + 3] === 'S'
        ) {
          count++
          console.log('diagonal down right', y, x)
        }

        // diagonal (down - left)
        if (
          x - 3 >= 0 &&
          y + 3 < yMax &&
          map[y + 1][x - 1] === 'M' &&
          map[y + 2][x - 2] === 'A' &&
          map[y + 3][x - 3] === 'S'
        ) {
          count++
          console.log('diagonal down left', y, x)
        }

        // diagonal backwards (up - left)
        if (
          x - 3 >= 0 &&
          y - 3 >= 0 &&
          map[y - 1][x - 1] === 'M' &&
          map[y - 2][x - 2] === 'A' &&
          map[y - 3][x - 3] === 'S'
        ) {
          count++
          console.log('diagonal backwards up left', y, x)
        }

        // diagonal backwards (up - right)
        if (
          x + 3 < xMax &&
          y - 3 >= 0 &&
          map[y - 1][x + 1] === 'M' &&
          map[y - 2][x + 2] === 'A' &&
          map[y - 3][x + 3] === 'S'
        ) {
          count++
          console.log('diagonal backwards up right', y, x)
        }
      }
    }
  }

  return count
}

module.exports = {
  getInput,
  getTestInput,
  main
}
