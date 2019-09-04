/* Si une page est raffraichie, retour au début
------------------------------------------------------------------------ */

jQuery( document ).ready( function( $ ) {

    if ($( window ).scrollTop() > 600) {
        $( window ).scrollTop(0);
    }

});
