$( document ).ready(function() {
    if(document.cookie.indexOf(window.location.pathname + "=") >= 0){
        $('#disabled').hide();
    };
    $('body header').css('z-index', '8');
});

$('#exit').on('click', function(){
    $('#disabled').hide();
    document.cookie = `${window.location.pathname}=true; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;
    $('body header').css('z-index', '99');
});