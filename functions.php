<?php


/* Child theme's Setups
------------------------------------------------------------------------*/


/**
 * Load SVG Support file.
 */
require_once( get_stylesheet_directory(). '/includes/class-svg-mime-type.php' );


// Load Natalya font from https://fonts.adobe.com/
function beauvoir_load_natalya_font() {

    if ( is_page( array( 'nous-joindre', 'contact-us', 'contattaci', 'nous-joindre-anglais' ) )  ) {
        ?>
        <link rel="stylesheet" href="https://use.typekit.net/erd1ahk.css">
        <style>
        @font-face {
            font-family: natalya,sans-serif;
            font-weight: 400;
            font-style: normal;
        }
        @font-face {
            font-family: natalya-alternate-one,sans-serif;
            font-weight: 400;
            font-style: normal;
        }
        @font-face {
            font-family: natalya-alternate-two,sans-serif;
            font-weight: 400;
            font-style: normal;
        }
        </style>
        <?php
    }
}
add_action( 'wp_head', 'beauvoir_load_natalya_font' );


// Enqueue styles and javascript for child theme
// @ https://digwp.com/2016/01/include-styles-child-theme/
// @ http://geoffgraham.me/wordpress-load-files-on-specific-pages/
function beauvoir_enqueue_scripts() {

    // enqueue parent styles
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    // enqueue child styles
    // wp_enqueue_style( 'child-theme', get_stylesheet_directory_uri() .'/style.css', array('parent-theme') );

    // add Lato font
    wp_enqueue_style( 'lato', 'https://fonts.googleapis.com/css?family=Lato:400,700' );

    // page ACCUEIL
    if ( is_page( array( 'accueil', 'home', 'pagina-iniziale', 'accueil-anglais', 'accueil-italien' ) ) ) {
        wp_enqueue_style( 'beauvoir-accueil', get_stylesheet_directory_uri() .'/css/beauvoir-accueil.css' );
        wp_enqueue_style( 'beauvoir-evenements-liste', get_stylesheet_directory_uri() .'/css/beauvoir-evenements-liste.css' );
        wp_enqueue_style( 'falkor-blurb', get_stylesheet_directory_uri() .'/css/my-falkor-blurb.css' );
    }

    // page ÉVÉNEMENTS
    if ( is_page( array( 'evenements', 'events', 'eventi' ) ) ) {
        wp_enqueue_style( 'beauvoir-evenements-calendrier', get_stylesheet_directory_uri() .'/css/beauvoir-evenements-calendrier.css' );
        wp_enqueue_style( 'beauvoir-evenements-liste', get_stylesheet_directory_uri() .'/css/beauvoir-evenements-liste.css' );
    }

    // page HORAIRES
    if ( is_page( array( 'horaires', 'schedules', 'orari' ) ) ) {
        wp_enqueue_style( 'beauvoir-horaires', get_stylesheet_directory_uri() .'/css/beauvoir-horaires.css' );
        wp_enqueue_style( 'falkor-content', get_stylesheet_directory_uri() .'/css/my-falkor-content.css' );
    }

    // page NOTRE BLOGUE
    if ( is_page( array( 'notre-blogue', 'our-blog', 'il-nostro-blog' ) ) ) {
        wp_enqueue_style( 'beauvoir-blogue-et-archives', get_stylesheet_directory_uri() .'/css/beauvoir-blogue-et-archives.css' );
    }

    // page NOUS JOINDRE
    if ( is_page( array( 'nous-joindre', 'contact-us', 'contattaci' ) ) ) {
        wp_enqueue_style( 'beauvoir-nous-joindre', get_stylesheet_directory_uri() .'/css/beauvoir-nous-joindre.css' );
        wp_enqueue_style( 'falkor-contact-forms', get_stylesheet_directory_uri() .'/css/my-falkor-contact-forms.css' );
        wp_enqueue_script( 'falkor-script-contact-form', get_stylesheet_directory_uri() . '/js/my-falkor-script-contact-form.js', array( 'jquery' ), '', true );
        wp_enqueue_script( 'email-validation', get_stylesheet_directory_uri() . '/js/email-validation.js', array( 'jquery' ), '', true );
    }

    // pages HISTOIRE DU SANCTUAIRE, CHAPELLE DE PIERRES, MARCHE ÉVANGÉLIQUE ...
    if ( is_page( array( 'histoire-du-sanctuaire--old',
                         'entrer-dans-la-chapelle-de-pierres', 'entrer-dans-la-chapelle-de-pierres-italien', 'entrer-dans-la-chapelle-de-pierres-anglais',
                         'mission-et-spiritualite', 'mission-et-spiritualite-italien', 'mission-et-spiritualite-anglais',
                         'vivre-la-marche-evangelique', 'vivre-la-marche-evangelique-italien', 'vivre-la-marche-evangelique-anglais',
                         'admirer-la-beaute-de-la-nature', 'admirer-la-beaute-de-la-nature-italien', 'admirer-la-beaute-de-la-nature-anglais',
                         'fraternite-mariste', 'fraternite-mariste-italien', 'fraternite-mariste-anglais',
                         'legion-des-petites-ames', 'legion-des-petites-ames-italien', 'legion-des-petites-ames-anglais',
						 'locaux-disponibles', 'location-de-salles-italien', 'location-de-salles-anglais',
                         'magasin', 'magasin-italien', 'magasin-anglais',
                         'notre-cafeteria', 'cafeteria-italien', 'cafeteria-anglais',
                         'etre-ecoute-accompagne', 'etre-ecoute-accompagne-italien', 'etre-ecoute-accompagne-anglais',
                         'faire-un-pelerinage-au-sanctuaire', 'faire-un-pelerinage-au-sanctuaire-italien', 'faire-un-pelerinage-au-sanctuaire-anglais',
                         'adoration', 'prendre-un-temps-adoration-italien', 'prendre-un-temps-adoration-anglais' ) ) ) {
        wp_enqueue_style( 'beauvoir-ajustements-pages', get_stylesheet_directory_uri() .'/css/beauvoir-ajustements-pages.css' );
        wp_enqueue_script( 'ajustements-pages-script', get_stylesheet_directory_uri() . '/js/ajustements-pages-script.js', array( 'jquery' ), '', true );
    }

    // pages temporaires pour clean-up
    if ( is_page( array( 'histoire-clean-up',
                         'histoire-du-sanctuaire', 'histoire-du-sanctuaire-italien', 'histoire-du-sanctuaire-anglais' ) ) ) {
        wp_enqueue_style( 'beauvoir-ajustements-pages_cleanup', get_stylesheet_directory_uri() .'/css/beauvoir-ajustements-pages_cleanup.css' );
    }

    // page GALERIE DE PHOTOS et autres pages contenant des images affichées avec The Grid
    if ( is_page( array( 'albums-photo', 'photo-gallery', 'galleria-fotografica',
                         'locaux-disponibles', 'location-de-salles-italien', 'location-de-salles-anglais',
                         'vivre-la-marche-evangelique', 'vivre-la-marche-evangelique-italien', 'vivre-la-marche-evangelique-anglais',
                         'admirer-la-beaute-de-la-nature', 'admirer-la-beaute-de-la-nature-italien', 'admirer-la-beaute-de-la-nature-anglais' ) ) ||
         is_singular( 'photo_album' ) ) {
        wp_enqueue_style( 'beauvoir-galerie-albums', get_stylesheet_directory_uri() .'/css/beauvoir-galerie-albums.css' );
    }

    // page d'album photo
    if ( is_singular( 'photo_album' ) ) {
        wp_enqueue_style( 'beauvoir-album-photo', get_stylesheet_directory_uri() .'/css/beauvoir-album-photo.css' );
    }

    // page NOTRE ÉQUIPE
    if ( is_page( array( 'notre-equipe', 'our-team', 'il-nostro-team' ) ) ) {
        wp_enqueue_style( 'beauvoir-equipe', get_stylesheet_directory_uri() .'/css/beauvoir-equipe.css' );
    }

    // page d'article
    if ( is_singular( 'post' ) ) {
        // wp_enqueue_style( 'beauvoir-articles', get_stylesheet_directory_uri() .'/css/beauvoir-articles.css' );
    }

    // page d'archive
    if ( is_archive() ) {
        wp_enqueue_style( 'beauvoir-blogue-et-archives', get_stylesheet_directory_uri() .'/css/beauvoir-blogue-et-archives.css' );
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

    // Animations
    wp_enqueue_style( 'mes-animations', get_stylesheet_directory_uri() .'/css/my-animate.css' );
    wp_enqueue_style( 'beauvoir-animations', get_stylesheet_directory_uri() .'/css/beauvoir-animations.css' );

    // JavaScript pour l'ensemble du site
    wp_enqueue_script( 'main-script', get_stylesheet_directory_uri() . '/js/main.js', array( 'jquery' ), '', true );

    // Some data to share with JavaScript
    wp_localize_script(
        'email-validation',
        'myGlobalObject',
        array(
            'templateUrl' => get_stylesheet_directory_uri(),
        )
    );

}
add_action( 'wp_enqueue_scripts', 'beauvoir_enqueue_scripts' );


// Disable new divi crazy crap code for CPT
// From: https://www.diviframework.com/2018/08/08/divi-custom-post-types-default-css/
function disable_cptdivi()
{
	remove_action( 'wp_enqueue_scripts', 'et_divi_replace_stylesheet', 99999998 );
}
add_action('init', 'disable_cptdivi');


// Load child textdomain
function beauvoir_lang_setup() {

    load_child_theme_textdomain( 'divi-child-beauvoir' );

    // load_child_theme_textdomain( 'divi-child-beauvoir', get_stylesheet_directory() . '/lang' );
    // load_child_theme_textdomain( 'Divi', get_stylesheet_directory() . '/languages/Divi' );
    // load_child_theme_textdomain( 'et_builder', get_stylesheet_directory() . '/languages/et_builder' );

}
add_action( 'after_setup_theme', 'beauvoir_lang_setup' );


// Load some jQuery code
function beauvoir_load_some_jquery_code() {

    // si c'est la page des résultats de recherche
    if ( is_search() ) {
        $search_placeholder = __( 'Search again ...', 'divi-child-beauvoir' );
        ?>
        <script>
        jQuery( document ).ready( function( $ ) {

            $( "#search-form input.et_pb_s" ).attr( "placeholder", "<?php echo $search_placeholder; ?>" );

        });
        </script>
        <?php
    }
}
add_action( 'wp_head', 'beauvoir_load_some_jquery_code' );


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


/* Shortcodes
------------------------------------------------------------------------*/


/**
 * Get the full name of an author
 *
 * @return string
 */
function get_full_author_name() {
    $fname = get_the_author_meta( 'first_name' );
    $lname = get_the_author_meta( 'last_name' );
    $full_name = '';

    if( empty( $fname ) ){
        $full_name = $lname;
    } elseif( empty( $lname ) ){
        $full_name = $fname;
    } else {
        //both first name and last name are present
        $full_name = "{$fname} {$lname}";
    }

    return $full_name;
}


/**
 * Create shortcode which add title to author archive page
 *
 * Just add the following shortcode : [titre_archive_auteur]
 */
function show_author_archive_title() {
    $string_to_translate = __( 'Posts from', 'divi-child-beauvoir' );
    $author_name = get_full_author_name();
    $return_string = $string_to_translate . ' ' . $author_name;
    return $return_string;
}
add_shortcode( 'titre_archive_auteur', 'show_author_archive_title' );


/**
 * Create shortcode which add about title above author bio
 *
 * Just add the following shortcode : [titre_bio_auteur]
 */
function show_author_bio_title() {
    $string_to_translate = __( 'About', 'divi-child-beauvoir' );
    $author_name = get_full_author_name();
    $return_string = $string_to_translate . ' ' . $author_name;
    return $return_string;
}
add_shortcode( 'titre_bio_auteur', 'show_author_bio_title' );


/**
 * Create shortcode which get author bio
 *
 * Just add the following shortcode : [bio_auteur]
 */
function show_author_bio() {
    return get_the_author_meta( 'description' );
}
add_shortcode( 'bio_auteur', 'show_author_bio' );


/**
 * Create shortcode which add Read More
 *
 * Just add the following shortcode : [lire_la_suite]
 */
function show_read_more_link() {
    return __( 'Read more', 'divi-child-beauvoir' );
}
add_shortcode( 'lire_la_suite', 'show_read_more_link' );


/**
 * Create shortcode which add the date of publication of the post
 *
 * Just add the following shortcode : [date_de_publication]
 */
function show_date_of_publication() {
    $string_to_translate = __( 'Published on', 'divi-child-beauvoir' );
    $date_of_publication = get_the_date();
    $return_string = $string_to_translate . ' ' . $date_of_publication;
    return $return_string;
}
add_shortcode( 'date_de_publication', 'show_date_of_publication' );


/**
 * Create shortcode which add the article author's name with link to author's archive
 *
 * Just add the following shortcode : [nom_auteur]
 */
function show_article_author_name() {
    $string_to_translate = __( 'By', 'divi-child-beauvoir' );
    $author_name = get_full_author_name();
    $author_archive_url = get_author_posts_url( get_the_author_meta( 'ID' ) );
    // $html_link_to_author_archive = '<a href="' . $author_archive_url . '">' . $author_name . '</a>';
    $html_link_to_author_archive = '<span class="author">' . $author_name . '</span>';
    $return_string = $string_to_translate . ' ' . $html_link_to_author_archive;
    return $return_string;
}
add_shortcode( 'nom_auteur', 'show_article_author_name' );


/**
 * Create shortcode which add title to search results page
 *
 * Just add the following shortcode : [search_results_title]
 */
function show_search_results_title() {
    return __( 'Search results', 'divi-child-beauvoir' );
}
add_shortcode( 'search_results_title', 'show_search_results_title' );


/**
 * Create shortcode which add a report of the search results
 *
 * Just add the following shortcode : [search_results_report]
 */
function show_search_results_report() {
    global $wp_query;
    $search_results_number = $wp_query->found_posts;
    $search_results_report = '';

    if ( $search_results_number == 0 ) {
        $search_results_report = __( 'No results found for', 'divi-child-beauvoir' );
    } else {
        $search_results_report = sprintf( _n( '%d result found for', '%d results found for', $search_results_number, 'divi-child-beauvoir' ), $search_results_number );
    }

    $client_search_query = get_search_query( false );
    $return_string = '<p id="search-results-report_string">' . $search_results_report . ' ' . '<span id="search-query">"' . $client_search_query . '"</span></p>';

    $help_sentence = __( "Sorry, we couldn't find any results matching your search. Please try again with different keywords.", 'divi-child-beauvoir' );
    if ( $search_results_number == 0 ) {
        $return_string .= '<p id="help-sentence_string">' . $help_sentence . '</p>';
    }

    return $return_string;
}
add_shortcode( 'search_results_report', 'show_search_results_report' );


/**
 * Create shortcode which add help sentence to search results page
 *
 * Just add the following shortcode : [search_results_help_sentence]
 */
function show_search_results_help_sentence() {
    return __( "Sorry, we couldn't find any results matching your search. Please try again with different keywords.", 'divi-child-beauvoir' );
}
add_shortcode( 'search_results_help_sentence', 'show_search_results_help_sentence' );


/**
 * Create shortcode which add title to 404 page
 *
 * Just add the following shortcode : [404_page_title]
 */
function show_404_page_title() {
    return __( 'Page not found', 'divi-child-beauvoir' );
}
add_shortcode( '404_page_title', 'show_404_page_title' );


/**
 * Create shortcode which add sorry sentence to 404 page
 *
 * Just add the following shortcode : [404_sorry_sentence]
 */
function show_404_sorry_sentence() {
    return __( 'We are sorry, the page you requested could not be found.', 'divi-child-beauvoir' );
}
add_shortcode( '404_sorry_sentence', 'show_404_sorry_sentence' );


/**
 * Create shortcode which add home page link to 404 page
 *
 * Just add the following shortcode : [404_home_page_link]
 */
function show_404_home_page_link() {
    $link_url = get_home_url();
    $link_text = __( 'Back to Home Page', 'divi-child-beauvoir' );
    $return_string = '<a href="' . $link_url . '">' . $link_text . '</a>';

    return $return_string;
}
add_shortcode( '404_home_page_link', 'show_404_home_page_link' );


/**
 * Create shortcode which add contact sentence to 404 page
 *
 * Just add the following shortcode : [404_contact_sentence]
 */
function show_404_contact_sentence() {
    $return_string = __( "If you find a link on our site that does not work, please let us know by writing to the email address", 'divi-child-beauvoir' );
    // $return_string .= ' ' . '<a id="admin-email" href="mailto:admin@sanctuairedebeauvoir.qc.ca">admin@sanctuairedebeauvoir.qc.ca</a>.';
    return $return_string;
}
add_shortcode( '404_contact_sentence', 'show_404_contact_sentence' );


/**
 * Create shortcode which add search query
 *
 * Just add the following shortcode : [client_search_query]
 */
function show_client_search_query() {
    return get_search_query( false );
}
// add_shortcode( 'client_search_query', 'show_client_search_query' );


/**
 * Create shortcode which add photo albums page link
 *
 * Just add the following shortcode : [photo_albums_page_link]
 *
 * https://stackoverflow.com/questions/29118772/how-to-determine-the-current-language-of-a-wordpress-page-when-using-polylang
 */
function show_photo_albums_page_link() {

    $link_url = null;
    $link_text = __( 'See All Albums', 'divi-child-beauvoir' );

    if ( pll_current_language() == 'en' ) {
        $link_url = get_permalink( get_page_by_path( 'photo-albums' ) );
    } else {
        $link_url = get_permalink( get_page_by_path( 'albums-photo' ) );
    }

    $return_string = '<a href="' . $link_url . '">' . $link_text . '</a>';

    return $return_string;
}
add_shortcode( 'photo_albums_page_link', 'show_photo_albums_page_link' );


/**
 * Create shortcode which add Our blog page link
 *
 * Just add the following shortcode : [our_blog_page_link]
 */
function show_our_blog_page_link() {

    $link_url = null;
    $link_text = __( 'See All Articles', 'divi-child-beauvoir' );

    if ( pll_current_language() == 'en' ) {
        $link_url = get_permalink( get_page_by_path( 'our-blog' ) );
    } else {
        $link_url = get_permalink( get_page_by_path( 'notre-blogue' ) );
    }

    $return_string = '<a href="' . $link_url . '">' . $link_text . '</a>';

    return $return_string;
}
add_shortcode( 'our_blog_page_link', 'show_our_blog_page_link' );


/* Image size and compression
------------------------------------------------------------------------*/
// https://astucesdivi.com/taille-images-de-divi/
// https://www.eleganttweaks.com/divi/divi-rules-thumbnail-images/


// Remove image size from Divi - Bloom - Search Layout Injector
// From : https://gist.github.com/felixhirschfeld/8843935858f1d17bb4f25e021b573b66
function beauvoir_remove_image_sizes() {

	// remove_image_size( 'et-pb-post-main-image' );
	// remove_image_size( 'et-pb-post-main-image-fullwidth' );
	// remove_image_size( 'et-pb-portfolio-image' );
	remove_image_size( 'et-pb-portfolio-module-image' );
	remove_image_size( 'et-pb-portfolio-image-single' );
	// remove_image_size( 'et-pb-gallery-module-image-portrait' );
	remove_image_size( 'et-pb-post-main-image-fullwidth-large' );

    remove_image_size( 'bloom_image' );

    remove_image_size( 'sb_search_li_150_square' );
    remove_image_size( 'sb_search_li_250_square' );
    remove_image_size( 'sb_search_li_350_square' );
    remove_image_size( 'sb_search_li_150_wide' );
    remove_image_size( 'sb_search_li_250_wide' );
    remove_image_size( 'sb_search_li_350_wide' );
}
add_action( 'after_setup_theme', 'beauvoir_remove_image_sizes', 11 );


// Custom image size for Blog and Gallery Module
// from: http://www.agentwp.com/change-image-sizes-for-elegantthemes-in-child-theme
function beauvoir_change_featured_size( $image_sizes ) {

    unset( $image_sizes['400x250'] );
    $image_sizes['720x450'] = 'et-pb-post-main-image';

    unset( $image_sizes['400x284'] );
    $image_sizes['600x400'] = 'et-pb-portfolio-image';

    unset( $image_sizes['400x516'] );
    $image_sizes['500x750'] = 'et-pb-gallery-module-image-portrait';

    return $image_sizes;
}
add_filter( 'et_theme_image_sizes', 'beauvoir_change_featured_size' );


// Disable WP extra image
// From: https://perishablepress.com/disable-wordpress-responsive-images/
function beauvoir_customize_image_sizes( $sizes ) {

	unset( $sizes['medium_large'] ); // 768px
	return $sizes;
}
add_filter( 'intermediate_image_sizes_advanced', 'beauvoir_customize_image_sizes' );


// Disable WP srcset on frontend
// From: https://perishablepress.com/disable-wordpress-responsive-images/
function disable_wp_responsive_images() {

    if ( ! is_admin() ) {
        return 1;
    }
}
add_filter( 'max_srcset_image_width', 'disable_wp_responsive_images' );


// Add image sizes
add_image_size( 'my_search_result_image', 150, 125, true );


// Change WP JPEG Image Compression
// from: https://www.wpbeginner.com/wp-tutorials/how-to-increase-or-decrease-wordpress-jpeg-image-compression/
// add_filter('jpeg_quality', function($arg){return 90;});
// from: https://wordpress.org/support/topic/quality-thumbnail-100/
function set_editor_image_quality( $quality, $image_mime_type ) {
	return 90;
}
add_filter( 'wp_editor_set_quality', 'set_editor_image_quality', 10, 2 );


/* Filters
------------------------------------------------------------------------*/


function beauvoir_custom_excerpt_length( $length ) {
    return 10;
}
// add_filter( 'excerpt_length', 'beauvoir_custom_excerpt_length', 999 );


/* Enable Gutenberg on CPT
------------------------------------------------------------------------*/

// function enable_gutenberg_please( $args, $post_type ) {
//
// 	if ( 'class' === $post_type ) {
//
// 		// Add additional CPT options.
// 		$events_args = array(
//     		'show_in_rest' => true,
// 		);
//
// 		// Merge args together.
// 		return array_merge( $args, $events_args );
//
// 	} elseif ( 'photo_album' === $post_type ||
//                     'sermon' === $post_type ||
//                     'member' === $post_type ) {
//
// 		// Add additional CPT options.
// 		$events_args = array(
//     		'show_in_rest' => true,
//             'supports' => array('title', 'thumbnail', 'editor', 'excerpt')
// 		);
//
// 		// Merge args together.
// 		return array_merge( $args, $events_args );
//
// 	}
//
// 	return $args;
//
// }

function enable_gutenberg_please( $args, $post_type ) {

	if ( 'class' === $post_type ) {

		// Add additional CPT options.
		$events_args = array(
    		'show_in_rest' => true,
		);

		// Merge args together.
		return array_merge( $args, $events_args );

	}

	return $args;

}
add_filter( 'register_post_type_args', 'enable_gutenberg_please', 10, 2 );


?>
