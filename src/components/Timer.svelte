<script lang="ts">
    import { sortDuration, isCurrentlySorting, sortingSpeed } from "../variables/stores";

    $: formattedDuration = $sortingSpeed ? 
        (parseInt($sortingSpeed) > 100 ? 
            parseFloat($sortDuration).toFixed(1) : 
            parseFloat($sortDuration).toFixed(3)) : 
        $sortDuration;
</script>

<div class="timer-display">
    <div class="h5">
        {#if $isCurrentlySorting}
            <span class="sorting-indicator">⏱️ Sorting...</span>
        {:else}
            <span>Sort Duration:</span>
        {/if}
        <span class="time">{formattedDuration}s</span>
    </div>
</div>
<style>
    .timer-display {
        margin: 20px;
        padding: 10px;
        background-color: #f8f9fa;
        border-radius: 5px;
        text-align: center;
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    label {
        font-weight: bold;
        color: #495057;
        margin: 0;
    }
    
    .time {
        font-family: 'Courier New', monospace;
        font-size: 1.2em;
        margin-left: 10px;
        color: #007bff;
    }
    
    .sorting-indicator {
        color: #28a745;
        animation: pulse 1s infinite;
    }
    
    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.6; }
        100% { opacity: 1; }
    }
</style>