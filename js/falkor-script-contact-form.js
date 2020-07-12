/* Divi Child Beauvoir - JavaScript de Falkor - Contact Form */

(function($) {

    $('.et_pb_section .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]):not([data-type="radio"])').each(function() {
        $(this).find('textarea').insertBefore($(this).find('label'));
        $(this).find('input').insertBefore($(this).find('label'));
    });


    $(' .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) input,  .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) textarea').focus(function() {
        $(this).parent("p").addClass("focus");
    });

    $(' .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) input,  .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) textarea').blur(function() {
        if ($(this).val()) {
            $(this).parent().addClass("filled");
        } else {
            $(this).parent().removeClass("filled");
        }
        $(this).parent("p").removeClass("focus");
    });

})(jQuery);

// Détecte les champs remplis (suite à un rafraichissement de la page)
jQuery( document ).ready( function( $ ) {
    $(' .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) input, .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) textarea').each(function() {
        if ($(this).val()) {
            $(this).parent().addClass("filled");
        }
    });
});
