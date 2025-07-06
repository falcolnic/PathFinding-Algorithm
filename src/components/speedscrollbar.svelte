<script lang="ts" context="module">
  import { sortingSpeed } from "../variables/stores";
  import { scrollbarMax, scrollbarMin, scrollbarStep, scrollbarValue } from "../variables/stores";
    let sortingSpeedScrollbar:HTMLInputElement;
    export { sortingSpeedScrollbar };

    function changeSortingSpeed():void {
        sortingSpeed.update(value => sortingSpeedScrollbar.value);
    }
    document.addEventListener('keydown', (event) => {
    if (event.code === "Space") {
      sortingSpeed.update(value => "9000");
    }
    if(event.code === "Enter") {
        sortingSpeed.update(value => sortingSpeedScrollbar.value);
    }
  });
</script>
<div>
  <label id="labelFaster" class="h4">faster</label> <input on:change={changeSortingSpeed} bind:this={sortingSpeedScrollbar} type="range" min={scrollbarMin} max={scrollbarMax} step={scrollbarStep} value={scrollbarValue}/><label id="labelSlower" class="h4">slower</label>
</div>

<style>
    div{
        margin: 20px;
    }
    #labelSlower {
        margin-left: 10px;
    }
    #labelFaster{
        margin-right: 10px;
    }
</style>
