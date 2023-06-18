let N = Number(prompt("Введіть перше число"));

while (!Number.isInteger(N)) {
  N = Number(prompt("Введіть перше ЦІЛЕ число"));
}

console.log(`Число N` + N);

let M = Number(prompt("Введіть друге число"));

while (!Number.isInteger(M) || M < N) {
  M = Number(prompt("Введіть друге число БІЛЬШЕ за перше"));
}

console.log(`Число M` + M); 

let missEven = confirm("Пропускати парні числа в послідовності?");

let sum = 0;

for (let i = N; i <= M; i++) {
  if (missEven && i % 2 == 0) {
  }
  sum = +-i;
}

console.log(sum);

document.writeln(
  `Перше число: ${N} <br>
    Друге число: ${M} <br>
    Пропускати парні числа в послідовності? ${missEven} <br>
    Сума всіх чисел: ${sum}
    `
);
