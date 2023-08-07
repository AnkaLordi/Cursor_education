const students = [
    {
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
        }
    }, 
    
    {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
        }
    }, 
    
    {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
        }
    }];

//Task 1

function getSubjects(student) {
    const subjects = Object.keys(student.subjects);

    const formatSubj = subjects.map(function(subject) {
        let modifiedSubj = subject.replace('_', ' '); //замінила _ на пробіл
        modifiedSubj = modifiedSubj.charAt(0).toUpperCase() + modifiedSubj.slice(1); //перша літера велика
        return modifiedSubj;
    });

    return formatSubj;
}

const listOfSubjects = getSubjects(students[0]);
console.log('Список предметів студента: ', listOfSubjects);

//Task 2

function getAverageMark (student) {
    const marks = Object.values(student.subjects).flat();
    let sum = 0;

    for (let i = 0; i<marks.length; i++) {
        sum += marks[i];
    }

    const average = sum / marks.length;

    return average.toFixed(2);
}

console.log('Середня оцінка студента: ', getAverageMark(students[0]));

//Task 3

function getStudentInfo(student) {
    const studentInfo = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    };

    return studentInfo;
}

console.log('Інформація про студента: ', getStudentInfo(students[0]));

//Task 4

function getStudentsNames(student) {
    const sortedNames = students.map(function(student) {
        return student.name;
    });

    return sortedNames.sort();
}

console.log('Імена студентів в алфавітному порядку: ', getStudentsNames(students));

//Task 5

function getBestStudent(students) {
    let bestMark = 0;
    let bestName = "";

    for (const student of students) {
        const averageMark = +getAverageMark(student);

        if (averageMark > bestMark) {
            bestMark = averageMark;
            bestName = student.name;
        }
    }

    return bestName;
}

console.log('Найкращий студент: ', getBestStudent(students));



//Task 6

const text = prompt('Введіть досліджуване слово');

function calculateWordLetters(text) {
    const calc = {};

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];

        if (calc[letter]) {
            calc[letter]++
        } else {
            calc[letter] = 1;
        }
    }

    return calc;

}

const result = calculateWordLetters(text);
console.log(result);