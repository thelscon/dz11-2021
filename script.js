'use strict' ;

const h1 = document.createElement ( 'h1' ) ;
h1.textContent = 'Игорь Довганюк' ;

const p = document.createElement ( 'p' ) ;
p.textContent = 'Задача: создать страницу с элементами <h1>, <p>, <input> и <button> без использования html,'
                + 'а лишь используя методы объекта window.document. В заголовке <h1> должны быть ваше имя и фамилия,'
                + 'в <p> - текст задания, которое вы сейчас выполняете. В <input> можно что-то ввести,'
                + 'если нажать на кнопку то будет выведен alert c введенным в поле значением и после закрытия alert\'а поле будет очищаться.' ;

const input = document.createElement ( 'input' ) ;
input.type = 'text' ;

const button = document.createElement ( 'button' ) ;
button.textContent = 'Кнопка Alert' ;
button.addEventListener ( 'click' , () => {
    if ( input.value ) {
        alert ( input.value ) ;
        input.value = '' ;
    }
    else {
        alert ( 'Ничего не введено' ) ;
    }
} )

document.body.prepend ( h1 , p , input , button ) ;

