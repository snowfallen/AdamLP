const animItems = document.querySelectorAll('.anim-items');
var y = window.scrollY,
    x = window.scrollX;
if(animItems.length > 0){
    window.addEventListener('scroll',animOnScroll);
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffSet = offset(animItem).top;
            const     animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight>window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
                console.log('11');
            }
            if((y > animItemOffSet - animItemPoint) && y < (animItemOffSet+ animItemHeight )){
                animItem.classList.add('active')
                console.log('1');
            }else{
                animItem.classList.remove('active')
                console.log('0');
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = x|| document.documentElement.scrollLeft,
        scrollTop = y|| document.documentElement.scrollTop;
        return{
            top: rect.top + scrollTop ,
            left: rect.left + scrollLeft
        }
    }
}

    
/*setTimeout(()=>{
    animOnScroll()
},500)*/