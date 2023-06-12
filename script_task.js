let priceApple = 15.678;
let priceSalo = 123.965;
let priceCheese = 90.2345;

console.log('Ціна яблук: ' + priceApple);
console.log('Ціна сала: ' + priceSalo);
console.log('Ціна сиру: ' + priceCheese);

let maxPrice = Math.max(priceApple, priceSalo, priceCheese);
console.log('Найбільша вартість: ' + maxPrice);

let minPrice = Math.min(priceApple, priceSalo, priceCheese);
console.log('Найменша вартість: ' + minPrice);

let sum = priceApple + priceSalo + priceCheese;
console.log('Сумарна вартість: ' + sum);

//відкиньте копійки у всіх товарів
let truncPriceApple = Math.trunc(priceApple); 
let truncPriceSalo = Math.trunc(priceSalo);
let truncPriceCheese = Math.trunc(priceCheese);

let truncSum = truncPriceApple + truncPriceSalo + truncPriceCheese;
console.log('Сумарна вартість без копійок: ' + truncSum);

let ceilSum = Math.ceil(sum/100)*100; //округлена сума в більшу сторону
console.log('Округлена сума до сотень у більшу сторону: ' + ceilSum);

let floorSum = Math.floor(sum/100)*100; //округлена сума в меншу сторону
console.log('Округлена сума до сотень у меншу сторону: ' + floorSum); 

let checkNumber = Boolean(floorSum%2);
console.log('Чи є округлена сума до сотень у меншу сторону парним числом? ' + checkNumber);

let rest = 500 - sum;
console.log('Сума решти без округлення, якщо клієнт платить 500 грн.: ' + sum);

let averageSum = Math.ceil((sum/3)*100)/100;
console.log('Середнє значення цін: ' + averageSum);

const min = 5;
const max = 15;
let randomDiscount = Math.ceil((max-min)*Math.random() + min);
console.log('Випадкова знижка становить: ' + randomDiscount);

let finalSum = Math.ceil(((sum*((100-randomDiscount)*0.01))*100))/100;
console.log('Фінальна сума з урахуванням знижки: ' + finalSum);

let pureProfit = Math.ceil((sum/2-(randomDiscount*sum*0.01))*100)/100;
console.log('Чистий прибуток: ' + pureProfit);

let advancedText = 
`Найбільша вартість: ${maxPrice}
Найменша вартість: ${minPrice}
Сумарна вартість: ${sum}
Сумарна вартість без копійок: ${truncSum}
Округлена сума до сотень у більшу сторону: ${ceilSum}
Округлена сума до сотень у меншу сторону: ${floorSum}
Чи є округлена сума до сотень у меншу сторону парним числом? ${checkNumber}
Сума решти без округлення, якщо клієнт платить 500 грн: ${rest}
Середнє значення цін: ${averageSum}
Випадкова знижка становить: ${randomDiscount}
Фінальна сума з урахуванням знижки: ${finalSum}
Чистий прибуток: ${pureProfit}`;
console.log(advancedText);

document.write(advancedText);







