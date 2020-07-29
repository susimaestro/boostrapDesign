const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});(function(){

    /*SCROLL HOME*/
sr.reveal('.hi',{}); 
sr.reveal('.filters',{delay: 200}); 
sr.reveal('.projects',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

    'use strict';


    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top':'100%'});

    });

})(jQuery);