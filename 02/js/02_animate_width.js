$(document).ready(function(){
    $('#animate').click(function(){
        console.log('mel')
        $('#content').animate({ 'width':'60%'}, 'fast');
    })
})