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

//* Enqueue Animate.CSS and WOW.js
//* https://www.elegantthemes.com/blog/divi-resources/how-to-add-animation-effects-to-sectionsrows-in-divi
add_action( 'wp_enqueue_scripts', 'sk_enqueue_scripts' );
function sk_enqueue_scripts() {
// wp_enqueue_style( 'animate', get_stylesheet_directory_uri() . '/css/animate.min.css' );
// wp_enqueue_script( ‘wow’, get_stylesheet_directory_uri() . ‘/js/wow.min.js’, array(), ”, true );
}

?>
