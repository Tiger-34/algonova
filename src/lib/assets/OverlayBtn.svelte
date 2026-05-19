<script>
    import { isOverlayOpen } from "./shared.svelte";
</script>


<!-- svelte-ignore a11y_consider_explicit_label -->
<button on:click={() => {isOverlayOpen.value = !isOverlayOpen.value}}>
    <div></div>
</button>

<style>

    button {
        height: 40px;
        width: 40px;

        background-color: #ffffff;

        border: 0px solid #ffffff;
        border-radius: 50%;

        cursor: pointer;
    }
        button:hover {
            background-color: #cacaca;
        }
        button:active {
            background-color: #ababab;
        }

    div:after {
        font-size: xx-large;

        content: "\002b";

        margin: auto;
    }
</style>