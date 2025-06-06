
function start1() {
  console.log(imya.value, ', привет!');
}

function start2(){
    let age = 2025 - year.valueAsNumber;
    console.log(age)
}

function start3() {
  let perimetr = 4* side.valueAsNumber;
  console.log(perimetr)
}

function start4() {
    let area = Math.PI * radius.valueAsNumber ** 2;
    console.log(area);
}
function start5() {
    let speed = distance.valueAsNumber / hours.valueAsNumber;
    console.log(speed);
}

function start6() {
    const rate = 0.92;
    let euro = usd.valueAsNumber * rate;
    console.log(euro);
}

function start7(){
    let flashSizeGb = flash.valueAsNumber; 
    let flashSizeMb = flashSizeGb * 1024;
    let fileSizeMb = 820;
    let fileCount = Math.floor(flashSizeMb / fileSizeMb);
    console.log(fileCount);
}

function start8(){
    let money = wallet.valueAsNumber; 
    let price = chocolate.valueAsNumber; 
    let count = Math.floor(money / price);
    let change = money % price;
    console.log("Шоколадок: " + count);
    console.log("Сдача: " + change);
}
function start9(){
    let number = num.valueAsNumber; 
    let a = number % 10;
    let b = Math.floor((number % 100) / 10);
    let c = Math.floor(number / 100);
    let reversed = a * 100 + b * 10 + c;
    console.log(reversed);
}

function start10() {
    let result = evencheck.valueAsNumber % 2 === 0 && "Чётное" || "Нечётное";
    console.log(result);
}