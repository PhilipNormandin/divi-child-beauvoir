/* Divi Child Beauvoir - JavaScript utilisé à l'ouverture des pages HISTOIRE DU SANCTUAIRE, CHAPELLE DE PIERRES, MARCHE ÉVANGÉLIQUE ... */


/* Récupère les légendes des images et formate le html
------------------------------------------------------------------------ */

(function ($) {
    // $(document).ready(function () {
        // $(document).bind('ready ajaxComplete', function () {
            $( ".et_pb_image_wrap" ).each(function () {
                var my_title = $(this).find( "img" ).attr( "title" );
                if ( typeof my_title !== "undefined" ) {
                    $(this).addClass( "with-figcaption" );
                    // $(this).parent().parent().parent().addClass( "figure-with-figcaption" );
                    $(this).append( "<figcaption>" + my_title + "</figcaption>" );
                    $(this).children().wrapAll( "<figure></figure>" );
                }
            });
        // });
    // });
})(jQuery);




// (function ($) {
//     $(document).ready(function () {
//         // $(document).bind('ready ajaxComplete', function () {
//             $( ".et_pb_image_wrap" ).each(function () {
//                 var my_title = $(this).find( "img" ).attr( "title" );
//                 if ( typeof my_title !== "undefined" ) {
//                     $(this).addClass( "with-figcaption" );
//                     $(this).parent().parent().parent().addClass( "figure-with-figcaption" );
//                     $(this).append( "<figcaption>" + my_title + "</figcaption>" );
//                     $(this).children().wrapAll( "<figure></figure>" );
//                 }
//             });
//         // });
//     });
// })(jQuery);
