function three(num) {
  var primes = []
  isPrime = true
  sqrt = Math.sqrt(num)
  for (i = 2; i < sqrt; i++) {
    if (num % i == 0) {
      for (var j = 2; j < i/2; j++) {
        if (j % i == 0) {
          isPrime = false
        }
      }
      if (isPrime) {
        num = num / i
        primes.push(i)
      }
    }
  }
  primes.forEach(element => console.log(element))
}

function four(max) {
  result = [0,0,1001]
  outer:
  for (i = max; i > max / 10 + 1; --i) {
    for (j = max; j >= i; --j) {
      prod = i * j
      dorp = reverse(prod)
      if (dorp === prod && prod > result[2])
        result = [i, j, prod]
    }
  }
  console.log(`i = ${result[0]}, j = ${result[1]}, prod = ${result[2]}`)
}
function reverse(num) {
  return parseInt(String(num).split("").reverse().join(""))
}

function five(max) {
  total = 1;
  for (i = 1; i <= max; i++) {
    //console.log(`${total} % ${i} = ${total % i}`)
    if (total % i != 0) {
      total = total * multiple(i)
    }
  }
  console.log(total)
}
function multiple(input) {
  for (i = 2; i <= 20; i++) {
    if (input % i === 0) {
      output = i
      break
    }
  }
  return output
}

function six(num) {
  sum = 0
  square = 0
  for (i = 1; i <= num; i++) {
    sum += i*i
    square += i
  }
  console.log(square*square - sum)
}

function seven(num) {
  i = 2
  var primes = [i]
  whileloop: while (primes.length < num) {
    for (j = 0; j < primes.length; j++) {
      if (i % primes[j] == 0) {
        i++
        continue whileloop
      }
    }
    primes.push(i)
    i++
  }
  console.log(primes[num - 1])
}

function eight(num) {
  var number = "731671765313306249192251196744265747423553491949349698352031277450632623957831801698480186947885184385861560789112949495459501737958331952853208805511" +
               "125406987471585238630507156932909632952274430435576689664895044524452316173185640309871112172238311362229893423380308135336276614282806444486645238749" +
               "303589072962904915604407723907138105158593079608667017242712188399879790879227492190169972088809377665727333001053367881220235421809751254540594752243" +
               "525849077116705560136048395864467063244157221553975369781797784617406495514929086256932197846862248283972241375657056057490261407972968652414535100474" +
               "821663704844031998900088952434506585412275886668811642717147992444292823086346567481391912316282458617866458359124566529476545682848912883142607690042" +
               "242190226710556263211111093705442175069416589604080719840385096245544436298123098787992724428490918884580156166097919133875499200524063689912560717606" +
               "0588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"
  total = 1
  for (i = 0; i < number.length; i++) {
    runningTotal = 1;
    for (j = i; j < (parseInt(i) + parseInt(num)); j++) {
      runningTotal *= number[j]
    }
    if (runningTotal > total) {
      total = runningTotal
    }
  }
  console.log(total)
}

function nine(num) {
  for (i = 1; i < num; i++) {
    for (j = i + 1; j < num; j++) {
      for (k = j + 1; k < num; k++) {
        if (Math.pow(i,2) + Math.pow(j,2) === Math.pow(k,2)) {
          if (i + j + k == num) {
            return i*j*k
          }
        }
      }
    }
  }
}

function ten(num) {
  i = 2
  var primes = [i]
  var total = 2;
  whileloop: while (i < num) {
    for (j = 0; j < primes.length; j++) {
      if (i % primes[j] == 0) {
        i++
        continue whileloop
      }
    }
    primes.push(i)
    total += i
    i++
  }
  return total
}

function eleven() {
  rows = [[08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
          [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
          [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
          [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
          [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
          [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
          [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
          [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
          [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
          [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
          [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
          [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
          [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
          [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
          [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
          [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
          [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
          [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
          [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
          [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]]
  max = 0;

  right: rows.forEach(row => {
    for (i = 0; i < row.length - 3; i++) {
      total = row[i] * row[i+1] * row[i+2] * row[i+3]
      if (total > max) {
        max = total
        //console.log(`${row[i]} * ${row[i+1]} * ${row[i+2]} * ${row[i+3]}`)
      }
    }
  })
  
  down: for (i = 0; i < rows.length; i++) {
    for (j = 0; j < rows.length - 3; j++) {
      total = rows[j][i] * rows[j+1][i] * rows[j+2][i] * rows[j+3][i]
      if (total > max) {
        max = total
        //console.log(`${rows[j][i]} * ${rows[j+1][i]} * ${rows[j+2][i]} * ${rows[j+3][i]}`)
      }
    }
  }

  diagonalRight: for (i = 0; i < rows.length - 3; i++) {
    for (j = 0; j < rows.length - 3; j++) {
      total = rows[j][i] * rows[j+1][i+1] * rows[j+2][i+2] * rows[j+3][i+3]
      if (total > max) {
        max = total
        //console.log(`${rows[j][i]} * ${rows[j+1][i+1]} * ${rows[j+2][i+2]} * ${rows[j+3][i+3]}`)
      }
    }
  }

  diagonalLeft: for (i = 1; i < rows.length - 4; i++) {
    for (j = 1; j < rows.length - 4; j++) {
      total = rows[rows.length-(j)][rows.length-(i)] * rows[rows.length-(j+1)][rows.length-(i+1)] * rows[rows.length-(j+2)][rows.length-(i+2)] * rows[rows.length-(j+3)][rows.length-(i+3)]
      if (total > max) {
        max = total
        //console.log(`${rows[rows.length-(j)][rows.length-(i)]} * ${rows[rows.length-(j+1)][rows.length-(i+1)]} * ${rows[rows.length-(j+2)][rows.length-(i+2)]} * ${rows[rows.length-(j+3)][rows.length-(i+3)]}`)
      }
    }
  }

  return max
}

console.log(eleven(process.argv[2]))
