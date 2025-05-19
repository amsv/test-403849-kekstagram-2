import { getRandomNumber, getRandomInteger, checkStringLength } from './utils.js';

const DESCRIPTIONS = [
  'Закат на пляже',
  'Горы в облаках',
  'Уютное кафе',
  'Город ночью',
  'Пикник в парке',
  'Друзья на вечеринке',
  'Путешествие по Европе',
  'Семейный ужин',
  'Вид с балкона',
  'Утренняя пробежка',
  'Кот на подоконнике',
  'Собака в парке',
  'Чашка кофе',
  'Книжный магазин',
  'Рассвет в горах',
  'Велопрогулка',
  'Морское побережье',
  'Лесная тропа',
  'Праздничный салют',
  'Детская площадка',
  'Романтический ужин',
  'Зимний лес',
  'Осенний парк',
  'Весенний сад',
  'Летний дождь'
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const COMMENT_NAMES = [
  'Артём', 'Мария', 'Иван', 'София', 'Дмитрий', 'Алина', 'Максим', 'Екатерина', 'Андрей', 'Ольга'
];

// Генерация уникальных чисел в диапазоне
const createUniqueRandomArray = (min, max) => {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  for (let i = arr.length - 1; i > 0; i--) {
    const j = getRandomInteger(0, i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Генерация случайного сообщения (одно или два предложения)
const getRandomMessage = () => {
  const count = getRandomInteger(1, 2);
  const messages = [];
  while (messages.length < count) {
    const msg = COMMENT_MESSAGES[getRandomInteger(0, COMMENT_MESSAGES.length - 1)];
    if (!messages.includes(msg)) {
      messages.push(msg);
    }
  }
  return messages.join(' ');
};

// Генерация одного комментария
const usedCommentIds = new Set();
const generateComment = () => {
  let id;
  do {
    id = getRandomInteger(1, 1000);
  } while (usedCommentIds.has(id));
  usedCommentIds.add(id);
  return {
    id,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomMessage(),
    name: COMMENT_NAMES[getRandomInteger(0, COMMENT_NAMES.length - 1)]
  };
};

// Генерация массива комментариев для фото
const generateComments = () => {
  const count = getRandomInteger(0, 10);
  return Array.from({ length: count }, generateComment);
};

// Генерация массива фотографий
const generatePhotos = () => {
  const ids = createUniqueRandomArray(1, 25);
  return ids.map((id, idx) => ({
    id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[idx % DESCRIPTIONS.length],
    likes: getRandomInteger(15, 200),
    comments: generateComments()
  }));
};

const photos = generatePhotos();
console.log(photos);
