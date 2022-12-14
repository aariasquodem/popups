$( document ).ready(function() {
    if(document.cookie.indexOf("accept_terms" + "=") >= 0){
        $('#disabled').hide();
    };
    $('#popup a.absolute-link').addClass('dynamic-class');
    $('body header').css('z-index', '8');
});

$('#exit').on('click', function(){
    $('#disabled').hide();
    document.cookie = `accept_terms=true; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;
    $('body header').css('z-index', '99');
});