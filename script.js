'use script' ;
// Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута.
// После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст инпута, 
// затем поредактируйте текст в инпуте
//  и еще раз нажмите на кнопку. Убедитесь в том, что выведется новый текст инпута. 

// let input = document.querySelector('#elem') ;
// let btn = document.querySelector('#btn') ;
// let p = document.querySelector('#p') ;

// btn.addEventListener('click' , () => 
// {
//     p.textContent += input.value + " || ";
// }) ;

// Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст. 

// let input = document.querySelector('#elem') ;
// let btn = document.querySelector('#btn') ;
// let p = document.querySelector('#p') ;

// btn.addEventListener('click' , () => 
// {
// input.value = "Hello User";
// }) ;
// input.addEventListener('click' , () => { input.value = ""; }) ;

// Даны два инпута и кнопка. В первый инпут пользователем вводится число.
//  По нажатию на кнопку запишите во второй инпут квадрат введенного числа. 

// let input = document.querySelector('#elem') ;
// let input1 = document.querySelector('#elem1') ;
// let btn = document.querySelector('#btn') ;
// let p = document.querySelector('#p') ;

// btn.addEventListener('click' , () => 
// {
// input1.value = input.value **2 ;
// }) ;
// input.addEventListener('click' , () => { input.value = ""; }) ;

// Даны два инпута и кнопка. По нажатию на кнопку запишите в 
// первый инпут значение второго инпута, а во второй инпут - значение первого.
//  Ваш код должен работать универсально, для любых значений инпутов.

// let input = document.querySelector('#elem') ;
// let input1 = document.querySelector('#elem1') ;
// let btn = document.querySelector('#btn') ;
// let p = document.querySelector('#p') ;

// btn.addEventListener('click' , () => 
// {
// let a = input.value ;
// let b = input1.value ;

// input1.value = a ;
// input.value = b;
// }) ;

// Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа.
//  По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац. 
// let input = document.querySelector('#elem') ;
// let input1 = document.querySelector('#elem1') ;
// let input2 = document.querySelector('#elem2') ;
// let input3 = document.querySelector('#elem3') ;
// let input4 = document.querySelector('#elem4') ;
// let btn = document.querySelector('#btn') ;
// let p = document.querySelector('#p') ;

// btn.addEventListener('click' , () => 
// {
//     let sum = 0 ;
// let arr = [ input , input1 , input2 , input3 , input4] ;
// for (let k of arr)
// {
//     sum += Number(k.value);
// }
// let res =Math.trunc( sum / arr.length ) ;
// p.textContent = res ;
// }) ;

// Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2. 

// let elem = document.querySelector('#elem');

// elem.addEventListener('focus', function() {
// 	elem.value = 1 ;
// });

// elem.addEventListener('blur', function() {
// 	elem.value = 2 ;
// });

// Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа. 
// let elem = document.querySelector('#elem');
// let p = document.querySelector('#p');

// elem.addEventListener('blur', function() {
// 	p.textContent = elem.value ;
// });

// Дан инпут, в котором изначально есть какой-то текст.
//  По получению фокуса инпутом очистите содержимое этого инпута. 

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	elem.value = '' ;
// });

// Дан див:
// <div id="elem" class="content no-gap"></div>

// Дана также кнопка. По нажатию на кнопку прочитайте и 
// выведите на экран значение атрибута class нашего дива. 
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');

// btn.addEventListener('click' , () => 
// {
// elem.textContent = elem.className ;

// }) ;


// Дан див:
// <div id="elem"></div>

// Дана также кнопка. По нажатию на кнопку запишите в атрибут 
// class нашего дива какой-нибудь класс. 

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');

// btn.addEventListener('click' , () => 
// {
//     elem.className = 'OPA _PA_PA_PA'
// elem.textContent = elem.className ;

// }) ;

// Дан див с несколькими CSS классами, записанными через пробел:
// <div id="elem" class="aaa bbb ccc"></div>

// Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива. 

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click' , () => 
// {
//     elem.textContent = elem.className.split(' ');
// });

// Дан следующий код:
// <img id="image" src="avatar.png">
// let image = document.querySelector('#image');
// console.log(image.src);

// Переделайте приведенный выше код так, чтобы вместо введения переменной 
// image использовалась цепочка. 

// let btn = document.querySelector('.btn');
// btn.addEventListener('click' , () => 
// {
//     document.querySelector('#image').src = './dino.png' ;
// });