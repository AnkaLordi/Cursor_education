const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", 
                "Теорія автоматів", 
                "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//розподілити по парах
function maleFemale() {
    const pair = [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]],
    ];
    return pair;
}

const pair = maleFemale();
console.log('Розділіть студентів на пари (хлопець + дівчина): ', maleFemale());

//розподілити по темах
function getTheme(themes, pair) {
    const topics = [];
    for (let i = 0; i < themes.length; i++) {
        topics.push(pair[i].concat(themes[i]))
    }
    return topics;
}

const topics = getTheme(themes, pair);
console.log('Працюють над темою: ', topics);

//розставити оцінки
function getMarks(students, marks) {
    const eachMark = [];
    for (let i = 0; i<marks.length; i++) {
        eachMark.push([students[i], marks[i]]);
    }
    return eachMark;
}

const eachMark = getMarks(students, marks);
console.log('Оцінка студента: ', eachMark);

//випадкова оцінка парі
function pairMark(themes) {
    const commonMark = [];
    for (let i = 0; i < themes.length; i++) {
        let randomPoint = Math.floor(Math.random() * 5) + 1;
        commonMark.push([themes[i], randomPoint]);
    }
    return commonMark;
}

const commonMark = pairMark(topics);
console.log('Випадкова оцінка парі від 1 до 5: ', commonMark);
