/* Divi Child Beauvoir - JavaScript utilisé à l'ouverture des pages HISTOIRE DU SANCTUAIRE, CHAPELLE DE PIERRES, MARCHE ÉVANGÉLIQUE ... */


/* Récupère les légendes des images et formate le html
------------------------------------------------------------------------ */

(function ($) {
    // $(document).ready(function () {
        // $(document).bind('ready ajaxComplete', function () {
            $( ".et_pb_image_wrap" ).each(function () {
                var img_alt = $(this).find( "img" ).attr( "alt" );
                if ( typeof my_alt_img !== "undefined" ) {
                    // $(this).addClass( "with-figcaption" );
                    // $(this).parent().parent().parent().addClass( "figure-with-figcaption" );
                    $(this).append( "<figcaption>" + img_alt + "</figcaption>" );
                    $(this).children().wrapAll( "<figure></figure>" );
                }
            });
        // });
    // });
})(jQuery);
