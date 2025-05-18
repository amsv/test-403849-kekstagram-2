const getRandomNumber = (from, to, decimals) => {
  // Проверка на неотрицательные числа
  if (from < 0 || to < 0 || decimals < 0) {
    return NaN;
  }

  // Проверка, что decimals является целым числом
  if (!Number.isInteger(decimals)) {
    return NaN;
  }

  // Если "от" больше чем "до", меняем их местами
  if (from > to) {
    [from, to] = [to, from];
  }

  // Генерация случайного числа
  const result = from + Math.random() * (to - from);

  // Округление до нужного количества знаков
  return Number(result.toFixed(decimals));
};

const getRandomInteger = (from, to) => {
  // Проверка на неотрицательные числа
  if (from < 0 || to < 0) {
    return NaN;
  }

  // Проверка, что числа целые
  if (!Number.isInteger(from) || !Number.isInteger(to)) {
    return NaN;
  }

  // Если "от" больше чем "до", меняем их местами
  if (from > to) {
    [from, to] = [to, from];
  }

  // Генерация случайного целого числа
  return Math.floor(from + Math.random() * (to - from + 1));
};

const checkStringLength = (string, maxLength) => {
  if (typeof string !== 'string' || typeof maxLength !== 'number' || maxLength < 0) {
    return false;
  }
  return string.length <= maxLength;
};

export { getRandomNumber, getRandomInteger, checkStringLength };
