<?php
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

// Allow SVG uploads
function allow_svgimg_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'allow_svgimg_types');


//* https://www.elegantthemes.com/blog/divi-resources/how-to-add-animation-effects-to-sectionsrows-in-divi
//* http://jeremycookson.com/how-to-add-scrolling-animations-in-wordpress/

    //* Enqueue Animate.CSS and WOW.js
    add_action( 'wp_enqueue_scripts', 'sk_enqueue_scripts' );
    function sk_enqueue_scripts() {
    	// wp_enqueue_style( 'animate', get_stylesheet_directory_uri() . '/css/animate.min.css' );
    	wp_enqueue_script( 'wow', get_stylesheet_directory_uri() . '/js/wow.min.js', array(), '', true );
    }

    //* Enqueue script to activate WOW.js
    add_action('wp_enqueue_scripts', 'sk_wow_init_in_footer');
    function sk_wow_init_in_footer() {
    	add_action( 'print_footer_scripts', 'wow_init' );
    }

    //* Add JavaScript before </body>
    function wow_init() { ?>
    	<script type="text/javascript">
    		new WOW().init();
    	</script>
    <?php }

    //======================================================================
    // SEARCH QUERY SHORTCODE
    // Create a shortcode for search query to return on search results pages
    //======================================================================
    add_shortcode( 'add_search_query', 'gq_add_search_query' );
    function gq_add_search_query() {
    	return apply_filters( 'get_search_query', get_query_var( 's' ) );
    }

?>
