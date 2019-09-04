<?php


// load Roboto Font from npm node modules
function beauvoir_load_font_npm() {
    ?>
        <style>
        @font-face {
            font-family: myRoboto;
            src: url("<?php echo get_stylesheet_directory_uri() . '/node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff2'; ?>") format('woff2'),
            url("<?php echo get_stylesheet_directory_uri() . '/node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff'; ?>") format('woff');
            font-weight: 400;
            font-style: normal;
        }
        @font-face {
            font-family: myRoboto-Regular;
            src: url("<?php echo get_stylesheet_directory_uri() . '/node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff2'; ?>") format('woff2'),
            url("<?php echo get_stylesheet_directory_uri() . '/node_modules/roboto-fontface/fonts/roboto/Roboto-Regular.woff'; ?>") format('woff');
        }
        @font-face {
            font-family: myRoboto;
            src: url("<?php echo get_stylesheet_directory_uri() . '/node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff2'; ?>") format('woff2'),
            url("<?php echo get_stylesheet_directory_uri() . '/node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff'; ?>") format('woff');
            font-weight: 500;
            font-style: normal;
        }
        @font-face {
            font-family: myRoboto-Medium;
            src: url("<?php echo get_stylesheet_directory_uri() . '/node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff2'; ?>") format('woff2'),
            url("<?php echo get_stylesheet_directory_uri() . '/node_modules/roboto-fontface/fonts/roboto/Roboto-Medium.woff'; ?>") format('woff');
        }
        @font-face {
            font-family: myRoboto;
            src: url("<?php echo get_stylesheet_directory_uri() . '/node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff2'; ?>") format('woff2'),
            url("<?php echo get_stylesheet_directory_uri() . '/node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff'; ?>") format('woff');
            font-weight: 700;
            font-style: normal;
        }
        @font-face {
            font-family: myRoboto-Bold;
            src: url("<?php echo get_stylesheet_directory_uri() . '/node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff2'; ?>") format('woff2'),
            url("<?php echo get_stylesheet_directory_uri() . '/node_modules/roboto-fontface/fonts/roboto/Roboto-Bold.woff'; ?>") format('woff');
        }
        </style>
    <?php
}
// add_action( 'wp_head', 'beauvoir_load_font_npm' );


// load Roboto Font from https://google-webfonts-helper.herokuapp.com/fonts/roboto?subsets=latin
function beauvoir_load_font() {
    ?>
        <style>
        @font-face {
            font-family: myRoboto;
            src: url("<?php echo get_stylesheet_directory_uri() . '/fonts/roboto/roboto-v18-latin-regular.woff2'; ?>") format('woff2'),
            url("<?php echo get_stylesheet_directory_uri() . '/fonts/roboto/roboto-v18-latin-regular.woff'; ?>") format('woff');
            font-weight: 400;
            font-style: normal;
        }
        @font-face {
            font-family: myRoboto-Regular;
            src: url("<?php echo get_stylesheet_directory_uri() . '/fonts/roboto/roboto-v18-latin-regular.woff2'; ?>") format('woff2'),
            url("<?php echo get_stylesheet_directory_uri() . '/fonts/roboto/roboto-v18-latin-regular.woff'; ?>") format('woff');
        }
        @font-face {
            font-family: myRoboto;
            src: url("<?php echo get_stylesheet_directory_uri() . '/fonts/roboto/roboto-v18-latin-500.woff2'; ?>") format('woff2'),
            url("<?php echo get_stylesheet_directory_uri() . '/fonts/roboto/roboto-v18-latin-500.woff'; ?>") format('woff');
            font-weight: 500;
            font-style: normal;
        }
        @font-face {
            font-family: myRoboto-Medium;
            src: url("<?php echo get_stylesheet_directory_uri() . '/fonts/roboto/roboto-v18-latin-500.woff2'; ?>") format('woff2'),
            url("<?php echo get_stylesheet_directory_uri() . '/fonts/roboto/roboto-v18-latin-500.woff'; ?>") format('woff');
        }
        @font-face {
            font-family: myRoboto;
            src: url("<?php echo get_stylesheet_directory_uri() . '/fonts/roboto/roboto-v18-latin-700.woff2'; ?>") format('woff2'),
            url("<?php echo get_stylesheet_directory_uri() . '/fonts/roboto/roboto-v18-latin-700.woff'; ?>") format('woff');
            font-weight: 700;
            font-style: normal;
        }
        @font-face {
            font-family: myRoboto-Bold;
            src: url("<?php echo get_stylesheet_directory_uri() . '/fonts/roboto/roboto-v18-latin-700.woff2'; ?>") format('woff2'),
            url("<?php echo get_stylesheet_directory_uri() . '/fonts/roboto/roboto-v18-latin-700.woff'; ?>") format('woff');
        }
        </style>
    <?php
}
// add_action( 'wp_head', 'beauvoir_load_font' );


// Autoriser les fichiers SVG
// function wpc_mime_types($mimes) {
// 	$mimes['svg'] = 'image/svg+xml';
// 	return $mimes;
// }
// add_filter('upload_mimes', 'wpc_mime_types');


/* WOW script's Setup
------------------------------------------------------------------------*/

//* https://www.elegantthemes.com/blog/divi-resources/how-to-add-animation-effects-to-sectionsrows-in-divi
//* http://jeremycookson.com/how-to-add-scrolling-animations-in-wordpress/


/**
 * Enqueue Animate.CSS and WOW.js
 */
function sk_enqueue_scripts() {
    // wp_enqueue_style( 'animate', get_stylesheet_directory_uri() . '/css/animate.min.css' );
    wp_enqueue_script( 'wow', get_stylesheet_directory_uri() . '/js/wow.min.js', array(), '', true );
}
// add_action( 'wp_enqueue_scripts', 'sk_enqueue_scripts' );


/**
 * Enqueue script to activate WOW.js
 */
function sk_wow_init_in_footer() {
    add_action( 'print_footer_scripts', 'wow_init' );
}
// add_action( 'wp_enqueue_scripts', 'sk_wow_init_in_footer' );


/**
 * Add JavaScript before </body>
 */
function wow_init() { ?>
    <script type="text/javascript">
    new WOW().init();
    </script>
<?php }


// Enqueue javascript - Custom Scrollbar
function beauvoir_visitor_enqueue_scripts() {

    // si c'est un visiteur
    if ( ! is_user_logged_in() ) {

		// https://github.com/idiotWu/smooth-scrollbar
        wp_enqueue_script( 'smooth-scrollbar', get_stylesheet_directory_uri() . '/node_modules/smooth-scrollbar/dist/smooth-scrollbar.js', array( 'jquery' ), "", true );

		// https://github.com/inuyaksa/jquery.nicescroll
        wp_enqueue_script( 'beauvoir-nicescroll', get_stylesheet_directory_uri() . '/js/jquery.nicescroll.js', array( 'jquery' ), "", true );

		// https://vuejs.org/
		// https://github.serafin.io/vuebar/?ref=madewithvuejs.com#start
        wp_enqueue_script( 'beauvoir-vuejs', get_stylesheet_directory_uri() . '/node_modules/vue/dist/vue.js', array(), "", false );
        wp_enqueue_script( 'beauvoir-vuebarjs', get_stylesheet_directory_uri() . '/node_modules/vuebar/vuebar.js', array(), "", false );

        wp_enqueue_script( 'beauvoir-init-custom-scrollbar', get_stylesheet_directory_uri() . '/js/init-custom-scrollbar.js', array( 'jquery' ), "", true );
    }

}
add_action( 'wp_enqueue_scripts', 'beauvoir_visitor_enqueue_scripts' );

// Custom Divi Builder Settings
function et_single_settings_meta_box( $post ) {
	$post_id = get_the_ID();

	wp_nonce_field( basename( __FILE__ ), 'et_settings_nonce' );

	$page_layout = get_post_meta( $post_id, '_et_pb_page_layout', true );

	$side_nav = get_post_meta( $post_id, '_et_pb_side_nav', true );

	$project_nav = get_post_meta( $post_id, '_et_pb_project_nav', true );

	$post_hide_nav = get_post_meta( $post_id, '_et_pb_post_hide_nav', true );
	$post_hide_nav = $post_hide_nav && 'off' === $post_hide_nav ? 'default' : $post_hide_nav;

	$show_title = get_post_meta( $post_id, '_et_pb_show_title', true );

	$is_builder_active = 'on' === get_post_meta( $post_id, '_et_pb_use_builder', true );

	if ( is_rtl() ) {
		$page_layouts = array(
            'et_left_sidebar'    => esc_html__( 'Left Sidebar', 'Divi' ),
			'et_right_sidebar'   => esc_html__( 'Right Sidebar', 'Divi' ),
            'et_no_sidebar'      => esc_html__( 'No Sidebar', 'Divi' ),
		);
	} else {
		$page_layouts = array(
			'et_right_sidebar'   => esc_html__( 'Right Sidebar', 'Divi' ),
			'et_left_sidebar'    => esc_html__( 'Left Sidebar', 'Divi' ),
            'et_no_sidebar'      => esc_html__( 'No Sidebar', 'Divi' ),
		);
	}

	// Fullwidth option available for default post types only. Not available for custom post types.
	if ( ! et_builder_is_post_type_custom( $post->post_type ) ) {
		$page_layouts['et_full_width_page'] = esc_html__( 'Fullwidth', 'Divi' );
        // $page_layouts = array_merge( array( 'et_full_width_page' => esc_html__( 'Fullwidth', 'Divi' ) ), $page_layouts );
	}

	if ( 'et_full_width_page' === $page_layout && ( ! isset( $page_layouts['et_full_width_page'] ) || ! $is_builder_active ) ) {
		$page_layout = 'et_no_sidebar';
	}

	$layouts = array(
		'light' => esc_html__( 'Light', 'Divi' ),
		'dark'  => esc_html__( 'Dark', 'Divi' ),
	);
	$post_bg_color  = ( $bg_color = get_post_meta( $post_id, '_et_post_bg_color', true ) ) && '' !== $bg_color
		? $bg_color
		: '#ffffff';
	$post_use_bg_color = get_post_meta( $post_id, '_et_post_use_bg_color', true )
		? true
		: false;
	$post_bg_layout = ( $layout = get_post_meta( $post_id, '_et_post_bg_layout', true ) ) && '' !== $layout
		? $layout
		: 'light'; ?>

	<p class="et_pb_page_settings et_pb_page_layout_settings">
		<label for="et_pb_page_layout" style="display: block; font-weight: bold; margin-bottom: 5px;"><?php esc_html_e( 'Page Layout', 'Divi' ); ?>: </label>

		<select id="et_pb_page_layout" name="et_pb_page_layout">
		<?php
		foreach ( $page_layouts as $layout_value => $layout_name ) {

            global $pagenow;

            if ( ( $pagenow == 'post-new.php' ) && ! $is_builder_active ) {
                if ( $layout_value == 'et_no_sidebar' ) {
                    $page_layout ='et_no_sidebar';
                }
            }

			printf( '<option value="%2$s"%3$s%4$s>%1$s</option>',
				esc_html( $layout_name ),
				esc_attr( $layout_value ),
				selected( $layout_value, $page_layout, false ),
				'et_full_width_page' === $layout_value && ! $is_builder_active ? ' style="display: none;"' : ''
			);
		} ?>
		</select>
	</p>
	<p class="et_pb_page_settings et_pb_side_nav_settings" style="display: none;">
		<label for="et_pb_side_nav" style="display: block; font-weight: bold; margin-bottom: 5px;"><?php esc_html_e( 'Dot Navigation', 'Divi' ); ?>: </label>

		<select id="et_pb_side_nav" name="et_pb_side_nav">
			<option value="off" <?php selected( 'off', $side_nav ); ?>><?php esc_html_e( 'Off', 'Divi' ); ?></option>
			<option value="on" <?php selected( 'on', $side_nav ); ?>><?php esc_html_e( 'On', 'Divi' ); ?></option>
		</select>
	</p>
	<p class="et_pb_page_settings">
		<label for="et_pb_post_hide_nav" style="display: block; font-weight: bold; margin-bottom: 5px;"><?php esc_html_e( 'Hide Nav Before Scroll', 'Divi' ); ?>: </label>

		<select id="et_pb_post_hide_nav" name="et_pb_post_hide_nav">
			<option value="default" <?php selected( 'default', $post_hide_nav ); ?>><?php esc_html_e( 'Default', 'Divi' ); ?></option>
			<option value="no" <?php selected( 'no', $post_hide_nav ); ?>><?php esc_html_e( 'Off', 'Divi' ); ?></option>
			<option value="on" <?php selected( 'on', $post_hide_nav ); ?>><?php esc_html_e( 'On', 'Divi' ); ?></option>
		</select>
	</p>

<?php if ( 'post' === $post->post_type ) : ?>
	<p class="et_pb_page_settings et_pb_single_title" style="display: none;">
		<label for="et_single_title" style="display: block; font-weight: bold; margin-bottom: 5px;"><?php esc_html_e( 'Post Title', 'Divi' ); ?>: </label>

		<select id="et_single_title" name="et_single_title">
			<option value="on" <?php selected( 'on', $show_title ); ?>><?php esc_html_e( 'Show', 'Divi' ); ?></option>
			<option value="off" <?php selected( 'off', $show_title ); ?>><?php esc_html_e( 'Hide', 'Divi' ); ?></option>
		</select>
	</p>

	<p class="et_divi_quote_settings et_divi_audio_settings et_divi_link_settings et_divi_format_setting et_pb_page_settings">
		<label for="et_post_use_bg_color" style="display: block; font-weight: bold; margin-bottom: 5px;"><?php esc_html_e( 'Use Background Color', 'Divi' ); ?></label>
		<input name="et_post_use_bg_color" type="checkbox" id="et_post_use_bg_color" <?php checked( $post_use_bg_color ); ?> />
	</p>

	<p class="et_post_bg_color_setting et_divi_format_setting et_pb_page_settings">
		<input id="et_post_bg_color" name="et_post_bg_color" class="color-picker-hex" type="text" maxlength="7" placeholder="<?php esc_attr_e( 'Hex Value', 'Divi' ); ?>" value="<?php echo esc_attr( $post_bg_color ); ?>" data-default-color="#ffffff" />
	</p>

	<p class="et_divi_quote_settings et_divi_audio_settings et_divi_link_settings et_divi_format_setting">
		<label for="et_post_bg_layout" style="font-weight: bold; margin-bottom: 5px;"><?php esc_html_e( 'Text Color', 'Divi' ); ?>: </label>
		<select id="et_post_bg_layout" name="et_post_bg_layout">
	<?php
		foreach ( $layouts as $layout_name => $layout_title )
			printf( '<option value="%s"%s>%s</option>',
				esc_attr( $layout_name ),
				selected( $layout_name, $post_bg_layout, false ),
				esc_html( $layout_title )
			);
	?>
		</select>
	</p>
<?php endif;

if ( 'project' === $post->post_type ) : ?>
	<p class="et_pb_page_settings et_pb_project_nav" style="display: none;">
		<label for="et_project_nav" style="display: block; font-weight: bold; margin-bottom: 5px;"><?php esc_html_e( 'Project Navigation', 'Divi' ); ?>: </label>

		<select id="et_project_nav" name="et_project_nav">
			<option value="off" <?php selected( 'off', $project_nav ); ?>><?php esc_html_e( 'Hide', 'Divi' ); ?></option>
			<option value="on" <?php selected( 'on', $project_nav ); ?>><?php esc_html_e( 'Show', 'Divi' ); ?></option>
		</select>
	</p>
<?php endif;
}


//======================================================================
// SEARCH QUERY SHORTCODE
// Create a shortcode for search query to return on search results pages
//======================================================================
// add_shortcode( 'add_search_query', 'gq_add_search_query' );
// function gq_add_search_query() {
//     return apply_filters( 'get_search_query', get_query_var( 's' ) );
// }
