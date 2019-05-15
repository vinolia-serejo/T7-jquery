$(document).ready(function(){
    // //usando hover
    // $('li').hover(function(){

    //     //o this do .menu2 abra/apareça, pode ser $(?).???() -dica: find
    //         $(this).find('.menu2').slideDown();
       
    // }, function(){
    //         $(this).find('.menu2').slideUp();

    // });//
    
    //usando click
    $('li').click(function(){
        $(this).find('.menu2').slideToggle();
        $(this).siblings().find('.menu2').slideUp()
    })
});
