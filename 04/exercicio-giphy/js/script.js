$(document).ready(function(){


    $('#btn-busca').click(function(e){
        //previne que o form tente enviar algo e mude a url.
        e.preventDefault();
        $('.area-gif').html("");
        //o resto vai aqui
        let valor = $('#campo-busca').val();

        $.ajax({
            url:`https://api.giphy.com/v1/gifs/search?api_key=QUk1C6kBUlITMlUZ6FLs7VAGJkz55YIy&q=${valor}&limit=25&`,
            type:'GET',
            success: function(gifs){
                let arrayDeGifs = gifs.data;
                $(arrayDeGifs).each(function(){
                    //para cirar elementos no jquery chamamos a tag diretamente na variavel
                    const container = $('<div>').attr('class', 'gif')
                    const gif = $('<img>').attr('src', this.images.fixed_width.url);
                    container.append(gif);
                    $('#exibe-busca').find('.area-gif').append(container);
                });

            },
            error:function(req){
                const errorImage = $('<img>').attr('src', `https://http.cat/${req.status}`);
                $('.area-gif').append(errorImage);
            }
        });
    });
});