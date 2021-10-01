const ERROR_MESSAGE = new Error('Невозможно разобрать входные данные');
const MAX_COMMENT_COUNT = 6;
const MAX_MESSAGE_COUNT = 6;
const MAX_NAME_COUNT = 6;
const MAX_LIKE_COUNT = 2000;
const MIN_LIKE = 0;
const RANDOM_LIKE = 0;
const MAX_PHOTOCARD_AMOUNT = 25;
let min = 1;
let max = 10;

const MESSAGE_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


const getRandomPositiveInt = (min, max) =>
  min >= 0 && min < max
    ? ~~(min + Math.random() * (max - min + 1))
    : null



const getRandomElFromArr = (arr) =>
  arr.length
    ? arr.splice(getRandomInt(0, arr.length), 1)
    : null

// getRandomElFromArr(MESSAGE_ARRAY) = () => getRandomPositiveInt(min, max);

// Первое задание. Получение целого числа + условия.

// Вызывает случайное число
// let randomNumber;
// function getRandomInt(MIN, MAX) {
//   MIN >= 0, MIN < MAX
// 	return true ? randomNumber = Math.floor(Math.random() * (MAX - MIN)) + MIN
//   : null
// }
// getRandomInt()

// const TEXT_VALUE = 'Строка - но не сто сорок символов';
// const LENGTH_NUMBER = TEXT_VALUE.length;
// 
// function getLength (inspectedLine, maxLength) {
//   if (LENGTH_NUMBER <= maxLength) {
//     return true;
//   } else {
//     return false;
//   }
// }

//     function createRandomMessage(MAX_MESSAGE_COUNT) {
//   let randomMessageArrays = [];
//   let messageIndex = 0;
//   for (let messageCount = 0; messageCount < MAX_MESSAGE_COUNT; messageCount++) {
//     messageIndex = Math.floor(Math.random()*MESSAGE_ARRAY.length);
//     randomMessageArrays.push(MESSAGE_ARRAY[messageIndex]);
//     return randomMessageArrays.toString();
//   }
// }

function createRandomMessage(MIN, MAX_MESSAGE_COUNT) {
    let randomMessageArrays = [];
    let messageIndex = 0;
    getRandomPositiveInt(MIN, MAX_MESSAGE_COUNT);
}
