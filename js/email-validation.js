/* Divi Child Beauvoir - Contact Form Scripts */


/* =========================================
        Animation du formulaire
========================================= */


(function($) {

    $(` .et_pb_section .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]):not([data-type="radio"]) `).each(function() {
        $(this).find('textarea').insertBefore($(this).find('label'));
        $(this).find('input').insertBefore($(this).find('label'));
    });

    $(` .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) input,
        .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) textarea `).focus(function() {
        $(this).parent("p").addClass("focus");
    });

    $(` .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) input,
        .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) textarea `).blur(function() {
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
    $(` .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) input,
        .et_pb_contact .et_pb_contact_form  p:not([data-type="checkbox"]) textarea `).each(function() {
        if ($(this).val()) {
            $(this).parent().addClass("filled");
        }
    });
});


/* =========================================
         Validation du formulaire
========================================= */


jQuery( document ).ready( function( $ ) {

    // alert(myGlobalObject.templateUrl);

    // get the client language
    var my_language = document.documentElement.lang;

    // set custom error messages and thank you heading
    var custom_error_message_empty_field_array = ["Ce champ est requis", "This field is required", "Questo campo è richiesto"];
    var custom_error_message_empty_field = "";
    var custom_error_message_invalid_email_array = ["Adresse courriel non valide", "Invalid email address", "Indirizzo email non valido"];
    var custom_error_message_invalid_email = "";
    var thank_you_heading = "";
    switch ( my_language ) {
        case "fr-FR":
            custom_error_message_empty_field = custom_error_message_empty_field_array[0];
            custom_error_message_invalid_email = custom_error_message_invalid_email_array[0];
            thank_you_heading = "Merci";
            break;
        case "en-GB":
            custom_error_message_empty_field = custom_error_message_empty_field_array[1];
            custom_error_message_invalid_email = custom_error_message_invalid_email_array[1];
            thank_you_heading = "Thank you";
            break;
        case "it-IT":
            custom_error_message_empty_field = custom_error_message_empty_field_array[2];
            custom_error_message_invalid_email = custom_error_message_invalid_email_array[2];
            thank_you_heading = "Grazie";
            break;
        default:
            custom_error_message_empty_field = custom_error_message_empty_field_array[0];
            custom_error_message_invalid_email = custom_error_message_invalid_email_array[0];
            thank_you_heading = "Merci";
    }

    // add image which will appear with thank you message
    var thanks_image = myGlobalObject.templateUrl + "/images/bird-1320792_640.png";
    // var form_width = document.getElementById("formulaire-colonne").offsetWidth;;
    // var form_height = document.getElementById("formulaire-colonne").offsetHeight;

    // var form_width = $("#formulaire-colonne").css("width");
    // var form_height = $("#formulaire-colonne").css("height");

    $( "#my-contact-form" ).ajaxSuccess( function() {
        // $("#formulaire-colonne").css("width", form_width);
        // $("#formulaire-colonne").css("height", form_height);
        // $( "#formulaire-colonne h2" ).attr("style", "opacity:0");
        $( "#formulaire-colonne h2" ).fadeTo("fast", 0);
        $( ".et_pb_contact_form_container" ).append( "<img src=" + thanks_image + ">" );
        setTimeout( function() {
            $( "#formulaire-colonne h2" ).text(thank_you_heading);
            // $( "#formulaire-colonne h2" ).attr("style", "opacity:1");
            $( "#formulaire-colonne h2" ).fadeTo("fast", 1);
        }, 200);
    });

    $( document ).ajaxComplete( function( event, xhr, settings ) {



        // if ( settings.url.includes("/nous-joindre/") ) {
        //
        // }
    });

    // add span elements which serve to print error messages
    $( ".et_pb_contact_field_0" ).append( "<span id='name_field' class='my_custom_error_message'></span>" );
    $( ".et_pb_contact_field_1" ).append( "<span id='email_field' class='my_custom_error_message'></span>" );
    $( ".et_pb_contact_field_2" ).append( "<span id='message_field' class='my_custom_error_message'></span>" );


    // Email Validation
    // Use the regex defined in the HTML5 spec for input[type=email] validation
    // (see https://www.w3.org/TR/2016/REC-html51-20161101/sec-forms.html#email-state-typeemail)
    var et_email_reg_html5 = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    var $et_contact_container = $('.et_pb_contact_form_container');

    if ($et_contact_container.length) {

        $et_contact_container.each(function() {

            var $this_contact_container = $(this);
            var $et_contact_form        = $this_contact_container.find('form');

            $et_contact_form.submit(function(event) {

                // event.preventDefault();

                var $this_contact_form = $(this);

                if (true === $this_contact_form.data('submitted')) {
                    // Previously submitted, do not submit again
                    return;
                }

                var $this_inputs            = $this_contact_form.find('input[type=text], .et_pb_checkbox_handle, .et_pb_contact_field[data-type="radio"], textarea, select');
                var this_et_contact_error   = false;

                $this_inputs.removeClass('et_contact_error');
                $this_inputs.removeClass('invalid_email');

                $this_inputs.each(function() {

                    var $this_el      = $(this);
                    var $this_wrapper = false;
                    var this_val      = $this_el.val();
                    var this_label    = $this_el.siblings('label:first').text();
                    var field_type    = typeof $this_el.data('field_type') !== 'undefined' ? $this_el.data('field_type') : 'text';
                    var required_mark = typeof $this_el.data('required_mark') !== 'undefined' ? $this_el.data('required_mark') : 'not_required';
                    var unchecked     = false;

                    // erase text that might be added previously
                    $this_el.siblings( ".my_custom_error_message" ).text("");

                    // add error message for the field if it is required and empty
                    if ('required' === required_mark && ('' === this_val || true === unchecked)) {

                        if (false === $this_wrapper) {

                            // add my custom error message
                            $this_el.siblings( ".my_custom_error_message" ).text( custom_error_message_empty_field );

                        }

                        this_et_contact_error = true;
                    }

                    // add error message if email field is not empty and fails the email validation
                    if ('email' === field_type) {

                        // remove trailing/leading spaces and convert email to lowercase
                        var processed_email = this_val.trim().toLowerCase();
                        var is_valid_email  = et_email_reg_html5.test(processed_email);

                        if ('' !== processed_email && this_label !== processed_email && ! is_valid_email) {

                            this_et_contact_error = true;

                            if (! is_valid_email) {

                                // add new specific class for CSS
                                $this_el.addClass('invalid_email');

                                // add my custom error message
                                $this_el.siblings( ".my_custom_error_message" ).text( custom_error_message_invalid_email );

                            }
                        }
                    }
                });

                // there is no error, the form can be transmitted
                if (! this_et_contact_error) {

                    // $( "#formulaire-colonne h2" ).attr("style", "opacity:0.2");
                    $( "#formulaire-colonne h2" ).fadeTo("fast", 0.2);

                    setTimeout( function() {

                        // add class to et_pb_contact_form_container which serve to show success message
                        $( ".et_pb_contact_form_container" ).addClass('email_transmitted');
                        $( "body" ).addClass('email_transmitted');

                    }, 1000);

                }

            });
        });
    }
});
