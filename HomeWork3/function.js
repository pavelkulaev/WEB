function showName(names = 'Иван'){
    alert(`тебя зовут ${names}`);
}

let test = prompt("Введите свое имя: ");
if (test == '')
    showName();
else
    showName(test);