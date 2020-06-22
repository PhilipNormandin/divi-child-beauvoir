<?php


/* Enqueue Scripts
----------------------- */
// https://digwp.com/2016/01/include-styles-child-theme/
// http://geoffgraham.me/wordpress-load-files-on-specific-pages/
function beauvoir_enqueue_scripts() {

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

}
add_action( 'wp_enqueue_scripts', 'beauvoir_enqueue_scripts' );


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
