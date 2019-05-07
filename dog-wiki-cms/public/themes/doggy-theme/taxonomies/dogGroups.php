<?php

declare(strict_types=1);

add_action('init', function () {
    register_extended_taxonomy('dogGroup', ['dog'], [
        'hierarchical' => true,
        'labels' => [
            'add_new_item' => __('Add New DogGroup'),
            'edit_item' => __('Edit DogGroup'),
            'name' => __('DogGroups'),
            'search_items' => __('Search DogGroups'),
            'singular_name' => __('DogGroup'),
        ],
        'show_admin_column' => true,
    ]);
});
