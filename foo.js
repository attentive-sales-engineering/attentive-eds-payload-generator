// const foo = 'products[0].foo.bar[1].baz'
const foo = 'product.foo.bar.baz'
const data = {}
console.log(foo)

let fooSplit = foo.split('.')
console.log(fooSplit)
let count = 0
let current = ''
let fooKey
// let fooVal
// let fooArrayName
// let fooArrayIndex
fooSplit.forEach(word => {
  console.log('word:', word)
  current += word
  console.log('CURRENT BEFORE:', current)
  if (data[current]) {
    console.log('TRUE:', data[current])
  } else {
    data[current] = {}
    console.log('FALSE - created:', data[current])
  }
  console.log('DATA:', data)
  fooKey = 'data.' + current
  console.log('FOOKEY BEFORE:', fooKey)
  fooKey: 1
  console.log('FOOKEY AFTER:', fooKey)
  data[current] = 1
  current += '.'
  console.log('CURRENT AFTER:', current)
})
data[current] = 1
console.log('DATA:', data)

// if (word.match(/\[\w+]/)) {
//   fooArrayName = word.replace(/\[\w+]/, '')
//   console.log('fooArrayName:', fooArrayName)
//   fooArrayIndex = word.match(/\[\w+]/).toString()
//   console.log('fooArrayIndex:', fooArrayIndex)
//   if (
//     typeof fooArrayName != 'undefined' &&
//     fooArrayName.length != undefined
//   ) {
//     // no array, create one
//   } else {
//     // array already exists, just add to it
//   }
//   fooKey = fooEnvVar.replaceAll(/[{}]/g, '')
//   Object.entries(path).forEach(entry => {
//     const [key, value] = entry
//     console.log(`${key}: ${value}`)
//     if (key == fooKey) {
//       console.log('key == fooKey')
//       fooVal = value
//       fooSplit[count] = word.replace(/\{\{\w+}}/, fooVal)
//     }
//   })
// }
// count += 1

// split on dots
// keep track of current path
// If string ends with [x], set element = array
// else element = prop
// set key to the current path
// set value to current value
