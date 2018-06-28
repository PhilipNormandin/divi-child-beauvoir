<?php
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

// set_post_thumbnail_size( 1175, 522, true );

// add_image_size( 'event-featured-image', '1175', '522', [ "center", "center" ] );

// add_filter( 'image_size_names_choose', 'my_custom_sizes' );
// function my_custom_sizes( $sizes ) {
// return array_merge( $sizes, array(
// 'event-featured-image' => __( 'Event Featured Image' )
// ) );
// }

// function polylang_flags_shortcode() {
//     ob_start();
//     pll_the_languages(array('show_flags'=>1,'show_names'=>0));
//     $flags = ob_get_clean();
//     return '<ul class="polylang-flags">' . $flags . '</ul>';
// }
// add_shortcode('POLYLANG', 'polylang_flags_shortcode');

?>
