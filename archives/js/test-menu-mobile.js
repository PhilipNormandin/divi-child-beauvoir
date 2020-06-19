
(function($) {
    function setup_collapsible_submenus() {
        // mobile menu
        $('#primary-menu-bv .et_mobile_nav_menu .menu-item-has-children > a').after('<span class="menu-closed"></span>');
        $('#primary-menu-bv .et_mobile_nav_menu .menu-item-has-children > a').each(function() {
            $(this).next().next('.sub-menu').toggleClass('hide');
        });
      	$('#primary-menu-bv .et_mobile_nav_menu .menu-item-has-children > a').on('click', function(event) {
            event.preventDefault();
        });
        $('#primary-menu-bv .et_mobile_nav_menu .menu-item-has-children > a + span').on('click', function(event) {
            event.preventDefault();
            $(this).toggleClass('menu-open');
            $(this).next('.sub-menu').toggleClass('hide');
        });
    }

    $(window).load(function() {
        setTimeout(function() {
            setup_collapsible_submenus();
        }, 700);
    });

})(jQuery);
