/* Divi Child Beauvoir - Main JavaScript */


/* Si une page est raffraichie, retour au début
------------------------------------------------------------------------ */

jQuery( document ).ready( function( $ ) {

    if ($( window ).scrollTop() > 600) {
        $( window ).scrollTop(0);
    }

});


/* Ajuste vitesse animation retour au début
------------------------------------------------------------------------ */

// jQuery( document ).ready( function( $ ) {
//
//     var scroll_top_btn = $('.et_pb_scroll_top');
//
//     scroll_top_btn.click(function(e) {
//         e.preventDefault();
//         var doc_scroll = $( window ).scrollTop();
//         $('html, body').animate({scrollTop:0}, doc_scroll);
//     });
//
// });


/* Préserve fonction des flèches dans les champs de formulaire
  (le plugin The Grid prend le contrôle des touches gauche et droite, ce qui pose problème
   si le client veut les utiliser pour déplacer le curseur dans un champ)
------------------------------------------------------------------------ */

jQuery( document ).ready( function( $ ) {

    $('input').keydown(function(e){
        if(e.keyCode == '37' || e.keyCode == '39'){
            e.stopPropagation();
        }
    });

});


/* Capture la confirmation d'abonnement à l'infolettre (pour ajuster le layout)
------------------------------------------------------------------------ */

jQuery( document ).ready( function( $ ) {

    $( document ).ajaxComplete( function( event, xhr, settings ) {

        // alert(xhr.responseText);

        if ( xhr.responseText == '{"success":"success"}' ) {
            $( "#bulletin-column .et_pb_promo_description > h2" ).addClass("subscribed");
        }
    });

    // $("#bulletin-column form").bind('ajax:complete', function() {
    //     $( "#bulletin-column .et_pb_promo_description > h2" ).addClass("subscribed");
    // });

});
