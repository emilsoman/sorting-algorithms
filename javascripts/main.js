console.log('This would be the main JS file.');

$(document).ready(function(){
  $('#the-link').on('click', function(e){
    e.preventDefault();
    console.log('DEFAULT ACTION');
  });
})
