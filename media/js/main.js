window.onload = function(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 0,
        freeMode: true,
        loop: true,
        loopedSlides: 5,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
     });
};

// if (document.images) {
//     this.img = new Image();
//     this.img.src = 
//     "./images/gallery_back.jpg",
//     "./images/change01.jpg",
//     "./images/change02.jpg",
//     "./images/change03.jpg",
//     "./images/change04.jpg",
//     "./images/change05.jpg";
// }

 
$('.gallery .grid li').hover(function(){ 

    if($(this).hasClass('gallery01')){
        $('.gallery').css('background','url(./images/change01.jpg) center/cover no-repeat');
        $('.gallery01 img').css('filter', 'grayscale(0%)'); 
    } 
    
    else if($(this).hasClass('gallery02')){
        $('.gallery').css('background','url(./images/change02.jpg) center/cover no-repeat');
        $('.gallery02 img').css('filter', 'grayscale(0%)'); 
    }
    
    else if($(this).hasClass('gallery03')){
        $('.gallery').css('background','url(./images/change03.jpg) center/cover no-repeat');
        $('.gallery03 img').css('filter', 'grayscale(0%)'); 
    }

    else if($(this).hasClass('gallery04')){
        $('.gallery').css('background','url(./images/change04.jpg) center/cover no-repeat');
        $('.gallery04 img').css('filter', 'grayscale(0%)'); 
    }
    
    else if ($(this).hasClass('gallery05')){
        $('.gallery').css('background','url(./images/change05.jpg) center/cover no-repeat');
        $('.gallery05 img').css('filter', 'grayscale(0%)'); 
    

}
},function(){

    if($(this).hasClass('gallery01')){

        $('.gallery01 img').css('filter', 'grayscale(100%)'); 
    } 
    
    else if($(this).hasClass('gallery02')){
   
        $('.gallery02 img').css('filter', 'grayscale(100%)'); 
    }
    
    else if($(this).hasClass('gallery03')){
   
        $('.gallery03 img').css('filter', 'grayscale(100%)'); 
    }

    else if($(this).hasClass('gallery04')){
   
        $('.gallery04 img').css('filter', 'grayscale(100%)'); 
    }
    
    else if ($(this).hasClass('gallery05')){

        $('.gallery05 img').css('filter', 'grayscale(100%)');
    

}
}); 


 