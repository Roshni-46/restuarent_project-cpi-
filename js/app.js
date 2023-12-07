let plusBtn = document.querySelector('.plus-btn')
let minusBtn = document.querySelector('.minus-btn')
let num = document.querySelector('.num')
let plusBtn2 = document.querySelector('.plus-btn2')
let minusBtn2 = document.querySelector('.minus-btn2')
let num2 = document.querySelector('.num2')



let a = 0;
let b = 0;


plusBtn.onclick = function(){
    a++;
    num.value = a;
   
}
minusBtn.onclick = function(){
    a--;
    num.value = a;
}

plusBtn2.onclick = function(){
    b++;
    num2.value = b;
   
}
minusBtn2.onclick = function(){
    b--;
    num2.value = b;
}


