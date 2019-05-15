$(document).ready(function(){
    $('#animate').click(function(){
        console.log('mel')
        $('#content').animate({ 'height':'200px'}, 'slow');
    })
})