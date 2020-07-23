<?php


/* Enqueue Scripts
----------------------- */
// https://digwp.com/2016/01/include-styles-child-theme/
// http://geoffgraham.me/wordpress-load-files-on-specific-pages/
function beauvoir_enqueue_scripts() {

    // Page d'accueil
    if ( is_page( array( 'accueil', 'home' ) ) ) {
        wp_enqueue_style( 'beauvoir-accueil', get_stylesheet_directory_uri() .'/css/beauvoir-accueil.css' );
        wp_enqueue_style( 'beauvoir-evenements-liste', get_stylesheet_directory_uri() .'/css/beauvoir-evenements-liste.css' );
        wp_enqueue_style( 'falkor-blurb', get_stylesheet_directory_uri() .'/css/my-falkor-blurb.css' );
    }

    // page d'article
    if ( is_singular( 'post' ) ) {
        wp_enqueue_style( 'beauvoir-articles', get_stylesheet_directory_uri() .'/css/beauvoir-articles.css' );
    }

    // page des résultats de recherche
    if ( is_search() ) {
        wp_enqueue_style( 'beauvoir-resultats-recherche', get_stylesheet_directory_uri() .'/css/beauvoir-resultats-recherche.css' );
    }

    // page 404
    if ( is_404() ) {
        wp_enqueue_style( 'beauvoir-404', get_stylesheet_directory_uri() .'/css/beauvoir-404.css' );
    }

    // En-Tête du site
    wp_enqueue_style( 'beauvoir-header', get_stylesheet_directory_uri() .'/css/beauvoir-header.css' );
    wp_enqueue_style( 'beauvoir-header-mobile', get_stylesheet_directory_uri() .'/css/beauvoir-header-mobile.css' );

    // Pied de page du site
    wp_enqueue_style( 'falkor-footers', get_stylesheet_directory_uri() .'/css/my-falkor-footers.css' );
    wp_enqueue_style( 'beauvoir-footer', get_stylesheet_directory_uri() .'/css/beauvoir-footer.css' );

    // Page ÉVÉNEMENTS
    if ( is_page( array( 'evenements', 'events', 'eventi' ) ) ) {
        wp_enqueue_style( 'beauvoir-evenements-calendrier', get_stylesheet_directory_uri() .'/css/beauvoir-evenements-calendrier.css' );
        wp_enqueue_style( 'beauvoir-evenements-liste', get_stylesheet_directory_uri() .'/css/beauvoir-evenements-liste.css' );
    }

    // page NOUS JOINDRE
    if ( is_page( array( 'nous-joindre', 'contact-us', 'contattaci', 'contact-rf' ) ) ) {
        wp_enqueue_style( 'beauvoir-nous-joindre', get_stylesheet_directory_uri() .'/css/beauvoir-nous-joindre.css' );
        wp_enqueue_style( 'falkor-contact-forms', get_stylesheet_directory_uri() .'/css/my-falkor-contact-forms.css' );
        wp_enqueue_script( 'falkor-script-contact-form', get_stylesheet_directory_uri() . '/js/falkor-script-contact-form.js', array( 'jquery' ), '', true );
    }

    // page NOTRE BLOGUE
    if ( is_page( array( 'notre-blogue', 'our-blog', 'il-nostro-blog' ) ) ) {
        wp_enqueue_style( 'beauvoir-blogue-et-archives', get_stylesheet_directory_uri() .'/css/beauvoir-blogue-et-archives.css' );
    }

    // page d'archive
    if ( is_archive() ) {
        wp_enqueue_style( 'beauvoir-blogue-et-archives', get_stylesheet_directory_uri() .'/css/beauvoir-blogue-et-archives.css' );
    }

    // Animations
    wp_enqueue_style( 'mes-animations', get_stylesheet_directory_uri() .'/css/my-animate.css' );
    wp_enqueue_style( 'beauvoir-animations', get_stylesheet_directory_uri() .'/css/beauvoir-animations.css' );

}
add_action( 'wp_enqueue_scripts', 'beauvoir_enqueue_scripts' );


// Load child textdomain
function beauvoir_lang_setup() {

    load_child_theme_textdomain( 'divi-child-beauvoir' );

    load_child_theme_textdomain( 'divi-child-beauvoir', get_stylesheet_directory() . '/lang' );
    load_child_theme_textdomain( 'Divi', get_stylesheet_directory() . '/languages/Divi' );
    load_child_theme_textdomain( 'et_builder', get_stylesheet_directory() . '/languages/et_builder' );

}
add_action( 'after_setup_theme', 'beauvoir_lang_setup' );


/* Shortcodes
------------------------------------------------------------------------*/


/**
 * Check first if Polylang plugin is actived
 */
if ( is_plugin_active('polylang/polylang.php') ) {

    // echo 'plugin is active';

    /**
    * Create shortcode which add Polylang language switcher
    *
    * Just add the following shortcode : [polylang_switcher]
    */
    function add_polylang_language_switcher() {
        pll_the_languages(array('hide_if_no_translation'=>1,'hide_current'=>1));
    }
    add_shortcode( 'polylang_switcher', 'add_polylang_language_switcher' );
}


/* Add Loading Spinner
------------------------------------------------------------------------*/
// https://www.pixelvars.com/wordpress-manually-add-loading-spinner-to-your-site-without-using-plugin/


// read our loading style file, and put it at the top of the page content inside the head
function pixelvars_loading_inline_style() {

    if ( ! is_admin_bar_showing() ) {
        ?>
        <style><?php echo @file_get_contents( get_stylesheet_directory() . '/css/loading.css')?></style>
        <?php
    } else {
        ?>
        <style>#page-overlay{display: none!important;}</style>
        <?php
    }

}
add_action( 'wp_head', 'pixelvars_loading_inline_style', 3 );


// add our loading.js to wordpress scripts
function pixelvars_child_enqueue_scripts() {

    if ( ! is_admin_bar_showing() ) {
        wp_enqueue_script( "pixelvars-loading", trailingslashit( get_stylesheet_directory_uri() ) . "js/loading.js", array( 'jquery' ), '', true );
    }

}
add_action( "wp_enqueue_scripts", "pixelvars_child_enqueue_scripts" );


// add noscript tag, if javascript is disabled on the browser
function pixelvars_add_noscript_filter($tag, $handle, $src) {
    // this filter will run for every enqueued script
    // we need to check if the handle is equals the script
    if ( "pixelvars-loading" === $handle ) {
        $noscript = "<noscript>";
        $noscript .= "<style>#page-overlay{display: none!important;}</style>";
        $noscript .= "</noscript>";
        $tag = $tag . $noscript;
     }
    return $tag;
}
add_filter( "script_loader_tag", "pixelvars_add_noscript_filter", 10, 3 );
