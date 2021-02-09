console.log ("Your index.js file is loaded correctly!");

  $("#about").on("click", function pageRedirect() {
    window.open('https://paresmayra.myportfolio.com/', '_blank'); 
  }


  $(".blockquote").on("click", function pageRedirect() {
    window.open('https://paresmayra.myportfolio.com/', '_blank'); 
  }

function pageRedirect(){}

  $("#about").on('click', 'a', function(e){ 
    e.preventDefault(); 
    var url = $(this).attr('https://paresmayra.myportfolio.com/'); 
    window.open(url, '_blank');
});

function(e){}
