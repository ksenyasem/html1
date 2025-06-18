function add_kid() {
    let age = 2025 - year.valueAsNumber;
    console.log('Возраст = ' + age)
    let dannie = imya.value + age;
    console.log(dannie);

    let li = document.createElement('li')
  kids.appendChild(li)
  console.log(imya.value)
  console.log(dannie)
 li.textContent = dannie
}