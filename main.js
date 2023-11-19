//Створити масив, довжину та елементи якого задає користувач.
const array = [];
const arrayLength = prompt('Задайте довжину массива:');
console.log(`довжина массива: ${arrayLength}`)

for(let i = 0; i < arrayLength; i ++){
    array.push(prompt(`Введіть ${i+1} елемент масиву:`))
}
console.log(`массив після ініціалізації користувачем: [${array}]`)

//Відсортувати масив за зростанням.
array.sort((a, b) => a - b);
console.log(`Відсортований массив: ${array}`);

const newArr = [...array];

//Видалити елементи з масиву з 2 по 4 (включно!).
const deletedArray = array.splice(2,3); 
console.log(`Видалені елементи з 2 по 4 (індекси): ${deletedArray}`)
console.log(`массив після видалених елементів (індексів): ${array}`)

//Видалити елементи з масиву з 2 по 4
const deletedNewArray= newArr.splice(1,3);
console.log(`Видалені елементи з 2 по 4: ${deletedNewArray}`)
console.log(`массив після видалених елементів: ${newArr}`)
