<?php

declare(strict_types=1);

// Register plugin helpers.
require template_path('includes/plugins/plate.php');

require get_template_directory().'/post-types/dogs.php';

require get_template_directory().'/taxonomies/dogGroups.php';


add_action('rest_api_init', 'dog_cpt');
function dog_cpt() {
    $args = [
        'public' => true,
        'show_in_rest' => true,
        'label' => 'dog'
    ];
    register_post_type('dog', $args);
};


function my_rest_dog($data, $post, $request) {
    $_data = $data->data;
    $fields = get_fields($post->ID);
    foreach ($fields as $key => $value) {
        $_data[$key] = get_field($key, $post->ID);
    }
    $data->data = $_data;
    return $data;
};

add_filter('rest_prepare_dog', 'my_rest_dog', 10, 3);

// Set theme defaults.
add_action('after_setup_theme', function () {
    // Disable the admin toolbar.
    show_admin_bar(false);

    // Add post thumbnails support.
    add_theme_support('post-thumbnails');

    // Add title tag theme support.
    add_theme_support('title-tag');

    // Add HTML5 theme support.
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'widgets',
    ]);

    // Register navigation menus.
    register_nav_menus([
        'navigation' => __('Navigation', 'wordplate'),
    ]);
});

// Enqueue and register scripts the right way.
add_action('wp_enqueue_scripts', function () {
    wp_deregister_script('jquery');

    // wp_enqueue_style('wordplate', mix('styles/app.css'));

    // wp_register_script('wordplate', mix('scripts/app.js'), '', '', true);
    // wp_enqueue_script('wordplate');
});

// Remove JPEG compression.
add_filter('jpeg_quality', function () {
    return 100;
}, 10, 2);
