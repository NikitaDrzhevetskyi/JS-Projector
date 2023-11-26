'use strict'

const userNames = [
  'Петро',
  'Емма',
  'Петро',
  'Емма',
  'Марта',
  'Яна',
  'Василь',
  'Антон',
  'Олена',
  'Емма',
]

function filterUnique(array) {
  let setUsers = new Set(array)
  return [...setUsers]
}

console.log(filterUnique(userNames))
