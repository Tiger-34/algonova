// @ts-nocheck
export let recipes = $state({
    info: [],
    current_id: 1,
});

export let isOverlayOpen = $state({value: false});

export let adding_info = $state({
    new_recipe_info: {
        id: recipes.current_id,
        name: "",
        description: [],
        ingredients: [],
        cook_time: 0,
        image_url: ""
    }
});

export let currently_showing = $state({
    value:
        {id: 1,
        name: "",
        description: [],
        ingredients: [],
        cook_time: 0,
        image_url: ""
    }});

export let showing_icons = $state({value: true});