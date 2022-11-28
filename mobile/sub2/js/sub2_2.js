var start2X, end2X;
    
$('.intro img').on('touchstart mousedown',function(e){
  e.preventDefault();
       
  start2X=e.pageX || e.originalEvent.touches[0].pageX;
 
});
    
$('.intro img').on('touchend mouseup',function(e){   
 e.preventDefault();
       
 end2X=e.pageX || e.originalEvent.changedTouches[0].pageX;

 if(start2X<end2X) {
    $('.drYou').css('display','none');
    $('.marketO').css('display','block');
}else{      
   
   $('.marketO').css('display','none');
   $('.drYou').css('display','block');
} 
 });