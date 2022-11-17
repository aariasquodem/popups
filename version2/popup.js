$( document ).ready(function() {
    if(document.cookie.indexOf("accept_terms" + "=") >= 0){
        $('#disabled').hide();
    };
});

$('#exit').on('click', function(){
    $('#disabled').hide();
    document.cookie = `accept_terms=true; expires=${new Date(new Date().getTime()+1000*60*60*24*365).toGMTString()}; path=/`;
});