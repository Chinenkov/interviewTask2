function ok() {

    //Сюда запихнем результат
    let result = "";

    //Получаем позицию
    const perem = document.getElementById("inp").value;

    //Проверяем на корректность
    if (perem.length != 2) {
        return alert("Неверные данные");
    }

    const charOne = perem.charAt(0).toUpperCase();
    const charTwo = +perem.charAt(1);

    if (!parseInt(charTwo) || charTwo > 8 || charTwo < 1) {
        return alert("Неверные данные"); 
    }

    if (charOne != "A" && charOne != "B" && charOne != "C" && charOne != "D" && charOne != "E" && charOne != "F" && charOne != "G" && charOne != "H") {
        return alert("Неверные данные");
    }

    //Считаем позиции
    const letterPosition = getNumberOfLetter(charOne);
    let firstIt = true;
    
    //Гоняем ходы по циклу. Две клетки в одну сторону и две в другую
    for (let i = -2; i < 3; i++) {

        //Исключаем выходы за доску
        if (letterPosition + i > 0 && letterPosition + i < 9 && i != 0) {

            //Так же, но уже по вертикали
            for (let j = -2; j < 3; j++) {

                //Исключаем выходы за доску и диагональ
                if (charTwo + j > 0 && charTwo + j < 9 && j != 0 && Math.abs(i) != Math.abs(j)) {
                    
                    //Проверка на первую запись
                    if (firstIt) {
                        result = getLetterOfNumber(letterPosition + i) + (charTwo + j);
                        firstIt = false;
                    } else {
                        result = result + ", " + getLetterOfNumber(letterPosition + i) + (charTwo + j);
                    }  

                }

            }
            

        }

    }

    //Выводим все ходы, которые собрали в цикле
    return alert("Возможные варианты хода: \n\n" + result);

}

//Функция определения позиции буквы
function getNumberOfLetter(let){

    const startPos = 'A'.charCodeAt(0);
    const currentPos = let.charCodeAt(0);
    return currentPos - startPos + 1;

}

//Функция определения буквы по позиции
function getLetterOfNumber(num) {

    const startPos = 'A'.charCodeAt(0);
    const currentPos = startPos + num - 1;
    return String.fromCharCode(currentPos);

}
