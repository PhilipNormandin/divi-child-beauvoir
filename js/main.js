/* Divi Child Beauvoir - Main JavaScript */


/* Si une page est raffraichie, retour au début
------------------------------------------------------------------------ */

jQuery( document ).ready( function( $ ) {

    if ($( window ).scrollTop() > 600) {
        $( window ).scrollTop(0);
    }

});


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

        if ( xhr.responseText == '{"success":"success"}' ) {
            $( "#newsletter-form .et_bloom_form_header h2" ).addClass("subscribed");
        }
    });

});


/* Active/Désactive animation lorsqu'on clique sur un blurb (sommaire dans la page Histoire du Sanctuaire)
https://www.elegantthemes.com/blog/divi-resources/
how-to-toggle-divi-transform-properties-on-click-with-jquery
------------------------------------------------------------------------ */

jQuery( document ).ready( function( $ ) {

    $( '.transform_target' ).click( function() {
        $( '#toc .et_pb_row' ).toggleClass( 'toggle-transform-animation' );
    });

    // referme le sommaire lorsqu'on clique sur un lien
    $( '#toc a' ).click( function() {
        setTimeout( function() {
            $( '#toc .et_pb_row' ).toggleClass(' toggle-transform-animation' );
        }, 1200);
    });

});


/* https://divibooster.com/remove-the-leading-zero-on-countdown-module-days/
------------------------------------------------------------------------ */

jQuery( function( $ ){

	var olddays = $( '.et_pb_countdown_timer .days .value' );

	// Clone the days and hide the original.
	// - Wraps new days element in a span to prevent Divi from updating it
	olddays.each( function(){
		var oldday = $(this);
		oldday.after(oldday.clone());
		oldday.next().wrap('<span></span>');
	}).hide();

	// Update the clone each second, removing the trailing zero
	(function update_days() {
		olddays.each(function(){
			var oldday = $(this);
			var days = oldday.html();
			if (days.substr(0,1) == '0') { days = days.slice(1); }
			oldday.next().find('.value').html(days);
		});
		setTimeout(function(){ update_days(); }, 1000);
	})()

});
