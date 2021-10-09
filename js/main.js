const   burger = document.querySelector('.container-header__burger'),
    menuBurger = document.querySelector('.container-header__burger-menu'),
    arrows     = document.querySelectorAll('.arrow-line'),
    arrowLeft  = document.querySelector('#arrow-left'),
    arrowRigth = document.querySelector('#arrow-rigth'),
    burgerLine = document.querySelectorAll('.burger-line');

let index = 1,
   indexA = 1;

burger.addEventListener('click',menuActive)

 function menuActive (){
    if(index===1){ 
        console.log('index=1');
        burgerCross();
        menuBurger.classList.add('active');
        index = 0;
    }else if(index===0){
        console.log('index=0');
        burgerBack()
        menuBurger.classList.remove('active');
        index++;
    }
}

for (let arrow of arrows){
    arrow.addEventListener('click', arrowRot)
}

function arrowRot() {
    if(indexA===1){
         console.log(indexA);
         arrowLeft.style.transform = 'rotate(135deg)';
         arrowRigth.style.transform = 'rotate(-135deg)';
         indexA  = 1;
         setTimeout(menuActive , 300)
         setTimeout(semiSecond, 700)
    }else if(indexA===0){
         arrowRigth.style.transform = 'rotateZ(-45deg)';
         arrowLeft.style.transform = 'rotateZ(45deg)';
         console.log(indexA); 
         indexA++;
    }
} 

const semiSecond = () => {
    arrowRigth.style.transform = 'rotateZ(-45deg)';
    arrowLeft.style.transform = 'rotateZ(45deg)';
}

function burgerCross() {
    burgerLine[1].style.width ='0';
    setTimeout(()=>{
     burgerLine[0].style.transform = 'rotateZ(45deg) translate(-4px ,-4px)';
     burgerLine[2].style.transform = 'rotateZ(-45deg) ';
    },200)
 }
 
 function burgerBack() {  
     burgerLine[0].style.transform = 'rotateZ(0deg)translate(0 ,0)';
     burgerLine[2].style.transform = 'rotateZ(0deg)';
     setTimeout(()=>{
         burgerLine[1].style.width ='22.5px';
     },300)
 }