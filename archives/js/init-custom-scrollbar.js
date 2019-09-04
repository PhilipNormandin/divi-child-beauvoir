// Init Custom Scrollbar with NiceScroll
(function($){
    $(document).ready(
        function() {
            $("body").niceScroll({
                cursorcolor:		"#999",
                cursorwidth: 		"12px",
                cursorborder: 		"0px solid #000",
                cursorborderradius: "6px",
                scrollspeed: 		120,
                mousescrollstep:    20,
                autohidemode: 		true,
                background: 		'#ddd',
                hidecursordelay: 	400,
                cursorfixedheight: 	false,
                cursorminheight: 	20,
                enablekeyboard: 	true,
                horizrailenabled: 	true,
                bouncescroll: 		false,
                smoothscroll: 		true,
                hwacceleration:     true,
                iframeautoresize: 	true,
                touchbehavior: 		false,
                zindex: 100000
            });
        }
    );
})(jQuery);
