function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// создание массива
let array = []
for (i=0;i<200;i++) {
    array[i] = getRandomInt(1000)
}
// Создание функции сериализации
function seriliz (arr) {
    return JSON.stringify(arr).replace(/\[|\]/g,'')
}
console.log(seriliz(array))

let array1=seriliz(array)
// cоздание функции десериализации
function deseriliz (str) {
    str = `[${str}]`
    console.log(JSON.parse(str))
}
deseriliz (array1)