<?php
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
       get_stylesheet_directory_uri() . '/style.css',
       array( $parent_style ),
       wp_get_theme()->get('Version')
   );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

// function polylang_flags_shortcode() {
//     ob_start();
//     pll_the_languages(array('show_flags'=>1,'show_names'=>0));
//     $flags = ob_get_clean();
//     return '<ul class="polylang-flags">' . $flags . '</ul>';
// }
// add_shortcode('POLYLANG', 'polylang_flags_shortcode');

?>
