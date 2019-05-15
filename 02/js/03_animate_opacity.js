$(document).ready(function(){
    $('#animate').click(function(){
        console.log('mel')
        $('#content').animate({ 'opacity':'0.2'}, 'slow');
    })
})