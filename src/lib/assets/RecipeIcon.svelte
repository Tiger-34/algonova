<script>
// @ts-nocheck

    import { currently_showing, recipes, showing_icons } from "./shared.svelte";

    import { fade } from "svelte/transition";
    
    let self_inx = $derived.by(() => {
        return recipes.info.map((current) => current.id).indexOf(id)
    });
    
    //properties set by parent
    let { id, name, description, ingredients, cook_time, image_url } = $props();

    let inner_ingredients = $derived.by(() => {
        if (ingredients.length > 3) {
            return [ingredients[0],ingredients[1],ingredients[2]]
        } else {
            return ingredients
        }
    });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onclick={() => {showing_icons.value = false; currently_showing.value = recipes.info[self_inx];}} id="parent" transition:fade>
    <!-- Recipe image -->
    <div id="image_div"> 
        <img src={image_url} alt={name}>
    </div>

    <div id="overview">
        <div id="ingredients">
            {#each inner_ingredients as ingredient}
                <div class="ingredient_info">
                    <p>{ingredient[0]}</p>
                    <p>-</p>
                    <p>{ingredient[1]}</p>
                </div>
            {/each}

            {#if ingredients.length > 3}
                <div>
                    <p id="and_more_p">A {ingredients.length - 3} {(ingredients.length - 3 == 1 ? "ďalší":"ďalších")}...</p>
                </div>
            {/if}
        </div>

        <div id="info_divisor"></div>

        <div id="other_info">
            <p id="cook_time">{cook_time} min.</p>
        </div>

        <div id="editndelete_parent">
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <img onclick={() => {currently_showing.value = recipes.info[self_inx]}} class="edit_icon" alt="Upraviť" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAUVBMVEX///8AAAB/f39HR0cxMTH39/ft7e37+/vIyMgbGxtra2v09PQREREmJiYJCQm7u7vT09OZmZlfX1+wsLB2dnY8PDyOjo5UVFTg4OCmpqY6OjrZ8ydbAAACw0lEQVR4nO3c2W6rMBSFYUMzNUMzdEjb93/Qk1OlBGMbY1yLtdD6r3rX/VVFGCS2MUoppZRSSimllFJKKTWn6nrqCf6muqpmIbk5ZiH5ccxAcnfQSxoHuaTloJZYDmJJx0ErcRykEo+DUuJ1EEoCDjpJ0EEm6XFQSXodRJKIg0ayfopBWCRLSeCSBKXl4ydqSb1YNT8zS273j1lIfu6DM5Dc7+f0kuZcQi5pna+oJdY5kVjSOe/SSpxzO6nE8/xBKfE+RxFKAs+DSRIESPC5NkEC7UiQgDsGS+AdAyUEjkESCscACYkjKqFxRCREjl4JlaNHQuYISugcAQmhwyuhdHgkpA5HQuvoSIgdlmQ94fy/jXZYkunLcEBJshxAkkwHjCTbcZMs47+meH/gYL5/yFEoOeQokRxylEgOOUokhxwlkkOOEskhR4nkkKNEcshRIjnkKJEccpRIDjlKJIccJZJDjhIN2AdA4Rj05RCFI1+C4siV4DjyJEiOHAmEY5P0rSCuw2zTvnqEdZhF4vebqI5dlfolKqbDHKs8CYrjfsgaLYFxmPvYIyU4DrOvMiRAjlMz1AgJkMOcH2MlS5Ac5tIaLFEC5TCH9mh0+wAerezhyPYBtHrtjEe1D6DdW3dAon0AVu/OiDT7AKzWL+6QJPsA7Da+MSn2AXT68P7BCfYBdLv6/3Xg9wE4Pfsh6PsAnD4DDvB9AG5fQQjyPgBP2zAEdx+Ar0UPBHUfgK9dnwN0H4C3Yz8EcR+Av7TtRbgOE38KBNsHEGofhaB8sd3fKe7gkJzjDA7JJa7gkBziiP+O7WbqQSOtoob9U33cTT1mvO4LFLvD5XyaesKBOS9Qfnt5f3uFvy5auS9Qbj1fPzbItz5P7guUxfbrc+qpRmS9QCG5rL01L1CILmtvV8LL2ts332WtlFJKKaWUUkoppZRSWf0Dn7ImZ7FjAmEAAAAASUVORK5CYII=">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <img onclick={() => recipes.info.splice(self_inx, 1)} class="edit_icon" alt="Odstrániť" src="data:image/png;base64,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">
        </div>
    </div>

</div>

<style>
    #parent {
        width: 200px;
        height: 300px;

        position: relative;

        box-shadow: 6px 10px 20px;

        border-radius: 10px;

        display: flex;
        flex-direction: column;

        overflow: hidden;

        color: rgb(75, 75, 75);

        font-size: small;

        margin-top: 10px;
    }
        #parent:hover {
            background-color: #f3f3f3;
        }

    #image_div {
        overflow: hidden;

        width: 100%;
        height: 40%;
    }

    #overview {
        display: flex;

        height: 60%;
    }

    #ingredients {
        width: 48.5%;
    }
        .ingredient_info {
            display: flex;
            justify-content: space-around;

            color: rgb(75, 75, 75);

            font-size: small;
        }
        #and_more_p {
            font-style: italic;
            text-align: center;
            font-size: x-small;
        }

    #info_divisor {
        width: 1px;
        height: 70%;

        margin: auto;

        background-color: #909090;

        opacity: 0.7;
    }

    #other_info {
        width: 48.5%;
        height: 80%;

        display: flex;
        align-items: center;
        justify-content: center;
    }
        #cook_time {
            display: block;

            text-align: center;
        }

    #editndelete_parent {
        width: 48.5%;
        height: 15%;

        position: absolute;
        bottom: 0;
        right: 0;
        
        display: flex;
        justify-content: right;
        align-items: end;
    }
        .edit_icon {
            width: auto;
            height: 50%;

            cursor: pointer;
        }
</style>

