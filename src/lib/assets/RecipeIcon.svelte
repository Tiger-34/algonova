<script>
    //properties set by parent
    let { name, description, ingredients, cook_time, image_url} = $props();
</script>

<div id="parent">
    <!-- Recipe image -->
    <div id="image_div"> 
        <img src={image_url} alt={name}>
    </div>

    <div id="overview">
        <div id="ingredients">
            {#each ingredients as ingredient}
                <div class="ingredient_info">
                    <p>{ingredient[0]}</p>
                    <p>-</p>
                    <p>{ingredient[1]}</p>
                </div>
            {/each}
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
        width: 50%;
    }
        .ingredient_info {
            display: flex;
            justify-content: space-around;

            color: rgb(75, 75, 75);

            font-size: small;
        }
</style>

