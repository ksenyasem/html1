/**Напишите страницу и поле ввода возраста с кнопкой.
 *  В консоль по нажатии кнопки надо вывести "Школьник",
 *  если в поле ввода больше 7.  Для самых умных - на страницу.
 */


function check() {
    console.log(high.value)
    console.log(high.valueAsNumber)
//как и у number и range можно попросить  сразу отдать число
    if (high.valueAsNumber >= 90){
        if (high.valueAsNumber >= 140 ){
            if (high.valueAsNumber > 170 ){
                console.log('черная горка')
            } else
                console.log('красная горка')
        } else 
            console.log('зелёная горка')
    }else{  // не больше 90
        console.log('нельзя')
    }  
}

