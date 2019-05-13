//Javascript
// var lis = document.querySelectorAll('li');
// for(i=0 ; i < lis.length; i++){
//     lis[i].textContent = "batata"
// }

//jquery
// $('button').text('batatinhas');

// chamando funcao


//usa para carregar documento
// function mudaTextoli(){
//     $('li').text('batatao');
// }
// $(document).ready(function(){
//     alert('tem batatao');
//     mudaTextoli();
// });

function mudaTextoli(){
      if ($('li').length > 0){
          console.log('lista')
      };
    }
    $(document).ready(function(){
        alert('tem batatao');
        mudaTextoli();
    });