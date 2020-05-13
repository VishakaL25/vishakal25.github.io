"use strict";


jQuery(document).ready(function ($) {

    $('#main-nav a.nav-link[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        /* $('.home-main-content').removeClass('move-out');
        $('#main-nav').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible'); */
        $(this).parents('#main-nav').find(".navbar-toggler").trigger("click");
        $('body,html').animate(
                {'scrollTop': target.offset().top},
        900
                );
    });

});
