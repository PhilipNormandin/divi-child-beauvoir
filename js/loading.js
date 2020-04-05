"use strict";

/*
* Pixelvars Loading class constructor
*/
function PixelvarsLoading () {

    // check browser for transition event support
    this.transitionEvent = this.whichTransitionEvent();
    // this.pageOverlayElement = document.getElementById("page-overlay");
}

/*
* Method to check transition events support,
* it also allow us to get the correct transition event name for each known browser
*/
PixelvarsLoading.prototype.whichTransitionEvent = function() {

    //  hack used in bootstrap to perform detection by creaing an empty div
    var el = document.createElement("div")

    // transition event names for each browser, you can add more
    var transEndEventNames = {
        WebkitTransition : "webkitTransitionEnd",
        MozTransition    : "transitionend",
        OTransition      : "oTransitionEnd otransitionend",
        transition       : "transitionend"
    }

    // test each event name  to get  the right one for this browser then return it
    for (var name in transEndEventNames) {
        if (el.style[name] !== undefined) {
            return transEndEventNames[name];
        }
    }

    // if no event compatible with this browser, we always return false
    return false
}

// instantiate our loading class
var pixelvarsPageLoading = new PixelvarsLoading();

// get the overlay div, and store it in a property, so we can reuse it later
pixelvarsPageLoading.pageOverlayElement = document.getElementById("page-overlay");

// if there is no event compatibility with this browser, let's hide loading layer
if(pixelvarsPageLoading.transitionEvent == false) {
    // hide element
    pixelvarsPageLoading.pageOverlayElement.style.visibility = "hidden";
    // show a warn message on the browser console
    console.warn("Transitions not supported by browser");
}

// event trigger when everything is loaded
window.onload = function() {

    // check for loading class availability
    if (pixelvarsPageLoading.pageOverlayElement.className.match(/\bloading\b/)) {

        // jQuery( "#page-overlay.loading::before" ).attr("style", "opacity:0");

        setTimeout(function() {
            pixelvarsPageLoading.pageOverlayElement.className = pixelvarsPageLoading.pageOverlayElement.className.replace(/\bloading\b/, "loaded");

            /* Ajoute un effet scroll à l'ouverture de certaines pages --> https://easings.net/en
            ------------------------------------------------------------------------------------- */
            jQuery( document ).ready( function( $ ) {

                setTimeout( function() {

                    if ($(window).width() > 1365) {
                        if ( $( "#page-header" ).hasClass( "scroll2Top" ) ) {
                            // alert( $( window ).scrollTop() );
                            if ( $( window ).scrollTop() == 0 ) {
                                $( 'html' ).animate( {
                                    scrollTop: $( '#page-header.scroll2Top' ).offset().top
                                }, 600, 'easeInOutCubic');
                            }
                        }
                    }
                }, 1400);
            });
        }, 300);
    }
}
