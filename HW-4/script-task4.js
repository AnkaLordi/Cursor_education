const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// розподілити по парах
function maleFemale() {
  const males = [students[0], students[1], students[4]];
  const females = [students[2], students[3], students[5]];
  const pairs = [];
  for (let i = 0; i < males.length; i++) {
    pairs.push([males[i], females[i]]);
  }
  return pairs;
}

const pairs = maleFemale();
console.log('Розділіть студентів на пари (хлопець + дівчина): ', pairs);

// розподілити по темах
function getTheme(pairs, themes) {
  const topics = [];
  for (let i = 0; i < themes.length; i++) {
    const pair = pairs[i];
    const theme = themes[i];
    topics.push(pair.concat(theme));
  }
  return topics;
}

const topics = getTheme(pairs, themes);
console.log('Працюють над темою: ', topics);

// розставити оцінки
function getMarks(students, marks) {
  const eachMark = [];
  for (let i = 0; i < marks.length; i++) {
    const student = students[i];
    const mark = marks[i];
    eachMark.push([student, mark]);
  }
  return eachMark;
}

const eachMark = getMarks(students, marks);
console.log('Оцінка студента: ', eachMark);

// випадкова оцінка парі
function pairMark(topics) {
  const randomMark = [];
  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i];
    const randomPoint = Math.floor(Math.random() * 5) + 1;
    randomMark.push(topic.concat(randomPoint));
  }
  return randomMark;
}

const randomMark = pairMark(topics);
console.log('Випадкова оцінка парі від 1 до 5: ', randomMark);
