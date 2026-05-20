<script>
    import { isOverlayOpen } from "./shared.svelte";
</script>

<button 
    aria-label="Add new recipe"
    title="Add new recipe"
    onclick={() => {isOverlayOpen.value = !isOverlayOpen.value}}
    class:open={isOverlayOpen.value}
>
    +
</button>

<style>
    button {
        height: 48px;
        width: 48px;

        background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
        border: none;
        border-radius: 50%;

        cursor: pointer;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        
        font-size: 28px;
        font-weight: 300;
        color: #333;
        
        outline: none;
        position: relative;
        overflow: hidden;
    }
    
    button:hover {
        background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
    }

    button:focus-visible {
        box-shadow: 0 0 0 3px rgba(100, 150, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.12);
    }
    
    button:active {
        background: linear-gradient(135deg, #e8e8e8 0%, #f0f0f0 100%);
        transform: translateY(1px);
    }

    button.open {
        transform: rotate(45deg);
    }
</style>