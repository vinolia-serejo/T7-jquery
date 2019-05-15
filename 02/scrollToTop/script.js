$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.scrollToTop').fadeIn();
        }else
            $('.scrollToTop').fadeOut();
    })
    $('a').click(function(event){
        //existe um hash? --checagem
        if(this.hash !== ''){
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 3000, function(){
                //coloca na url do navegador
                window.location.hash = hash;
            });
            
        };

    });
});

