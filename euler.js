performance = window.performance

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
        i++;
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

console.log(nine(process.argv[2]))
