const slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let indexs = 0;
 //отслежуе активный слайд
const activeSlide = n =>{  //передаю параметр n активный слайд , и в якого е n добавляе active ,а в всех остальный убирае 
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n =>{  //передаю параметр n активный слайд , и в якого е n добавляе active ,а в всех остальный убирае 
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () =>{
    if(indexs == slides.length - 1){
        indexs = 0;  
        activeSlide(indexs); //передаю index ,який переходить в n и меняе номер ативного слайда
        activeDot(indexs);
    }else{
        indexs++;
        activeSlide(indexs);
        activeDot(indexs);
    }
}
const prevSlide = ()=>{
    if(indexs == 0){
        indexs = slides.length - 1
        activeSlide(indexs);
        activeDot(indexs);
    }else{
        indexs--;
        activeSlide(indexs);
        activeDot(indexs);
    }
}

dots.forEach((item,indexDot)=>{
    item.addEventListener('click',() =>{  //после клика передае значение те саме шо и в index
        indexs=indexDot;
        activeSlide(indexs);
        activeDot(indexs);
    })
});