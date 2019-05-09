<?php

declare(strict_types=1);

add_action("init", function () {
    register_extended_post_type("dog", [
        "has_archive" => true,
        "labels" => [
            "add_new_item" => __("Add New Dogs"),
            "edit_item" => __("Edit Dogs"),
            "name" => __("Dogs"),
            "search_items" => __("Search Dogs"),
            "singular_name" => __("Dog"),
        ],
        "supports" => [
            "title",
            "editor",
            "thumbnail",
            "excerpt"
        ],
        "menu_icon" => "dashicons-plus-alt",
        "menu-position" => 20,
        "public" => true,
    ]);
});
