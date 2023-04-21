// Перменная блока кнопок
let buttons = document.querySelector('.buttons');
// Переменная кнопок
let btn = document.querySelectorAll('span');
// Перменная показатель чисел
let value = document.getElementById('value');

for(let i=0; i<btn.length; i++){
    // Функция нажатии кнопок
    btn[i].addEventListener('click', function(){
        if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML);
        } else{
            if(this.innerHTML == "Clear"){
                value.innerHTML = "";
            } else{
                value.innerHTML += this.innerHTML;
            }
        }
    })
}