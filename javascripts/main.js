console.log('This would be the main JS file.');

$(document).ready(function(){
  $('#the-link').on('click', function(e){
    e.preventDefault();
    if(window.optimizelySingleForm) {
      console.log('VARIATION!');
    } else {
      console.log('DEFAULT ACTION');
    }
  });
})
