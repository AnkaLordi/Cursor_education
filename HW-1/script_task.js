const priceApple = 15.678;
const priceSalo = 123.965;
const priceCheese = 90.2345;

console.log("Ціна яблук: " + priceApple);
console.log("Ціна сала: " + priceSalo);
console.log("Ціна сиру: " + priceCheese);

const maxPrice = Math.max(priceApple, priceSalo, priceCheese);
console.log("Найбільша вартість: " + maxPrice);

const minPrice = Math.min(priceApple, priceSalo, priceCheese);
console.log("Найменша вартість: " + minPrice);

const sum = priceApple + priceSalo + priceCheese;
console.log("Сумарна вартість: " + sum);

//відкиньте копійки у всіх товарів
const truncPriceApple = Math.trunc(priceApple);
const truncPriceSalo = Math.trunc(priceSalo);
const truncPriceCheese = Math.trunc(priceCheese);

const truncSum = truncPriceApple + truncPriceSalo + truncPriceCheese;
console.log("Сумарна вартість без копійок: " + truncSum);

const ceilSum = Math.ceil(sum / 100) * 100; //округлена сума в більшу сторону
console.log("Округлена сума до сотень у більшу сторону: " + ceilSum);

const floorSum = Math.floor(sum / 100) * 100; //округлена сума в меншу сторону
console.log("Округлена сума до сотень у меншу сторону: " + floorSum);

const checkNumber = floorSum % 2 === 0 ? true : false;
console.log(
  "Чи є округлена сума до сотень у меншу сторону парним числом? " + checkNumber
);

const rest = 500 - sum;
console.log("Сума решти без округлення, якщо клієнт платить 500 грн.: " + rest);

const averageSum = Math.ceil((sum / 3) * 100) / 100;
console.log("Середнє значення цін: " + averageSum);

const min = 5;
const max = 15;
const randomDiscount = Math.ceil((max - min) * Math.random() + min);
console.log("Випадкова знижка становить: " + randomDiscount);

const finalSum = Math.ceil(sum * ((100 - randomDiscount) * 0.01) * 100) / 100;
console.log("Фінальна сума з урахуванням знижки: " + finalSum);

const pureProfit =
  Math.ceil((sum / 2 - randomDiscount * sum * 0.01) * 100) / 100;
console.log("Чистий прибуток: " + pureProfit);

const advancedText = `Найбільша вартість: ${maxPrice} <br>
Найменша вартість: ${minPrice} <br>
Сумарна вартість: ${sum} <br>
Сумарна вартість без копійок: ${truncSum} <br>
Округлена сума до сотень у більшу сторону: ${ceilSum} <br>
Округлена сума до сотень у меншу сторону: ${floorSum} <br>
Чи є округлена сума до сотень у меншу сторону парним числом? ${checkNumber} <br>
Сума решти без округлення, якщо клієнт платить 500 грн: ${rest} <br>
Середнє значення цін: ${averageSum} <br>
Випадкова знижка становить: ${randomDiscount} <br>
Фінальна сума з урахуванням знижки: ${finalSum} <br>
Чистий прибуток: ${pureProfit}`;
console.log(advancedText);

document.write(advancedText);
