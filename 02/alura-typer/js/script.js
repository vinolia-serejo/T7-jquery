$(document).ready(function(){
    let qtdPalavras = $('.fraseCorreta').text().split(' ').length;
    console.log(qtdPalavras);
    $('.qtdPalavras').html(qtdPalavras);

    $('.campo-digitação').on('input', function(){
        $('.texto-digitado').text( $(this).val());
    })
})