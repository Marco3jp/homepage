$('.index-contents').hover(
    function(){
        $(this).children('ul').stop().slideToggle();
        $(this).children('ul').addClass("animated fadeIn");
    },
    function(){
        $(this).children('ul').stop().slideToggle();
        $(this).children('ul').removeClass("animated fadeIn");
    }
);
