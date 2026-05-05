<script>
    //properties set by parent
    let { name, description, ingredients, cook_time, image_url } = $props();

    let inner_ingredients = $derived.by(() => {
        if (ingredients.length > 3) {
            return [ingredients[0],ingredients[1],ingredients[2]]
        } else {
            return ingredients
        }
    });
</script>

<div id="parent">
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
    </div>

</div>

<style>
    #parent {
        width: 200px;
        height: 300px;

        box-shadow: 6px 10px 20px;

        border-radius: 10px;

        display: flex;
        flex-direction: column;

        overflow: hidden;

        color: rgb(75, 75, 75);

        font-size: small;
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

        display: flex;
        align-items: center;
        justify-content: center;
    }
        #cook_time {
            display: block;

            text-align: center;
        }
</style>

