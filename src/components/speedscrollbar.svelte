<script lang="ts" context="module">
  import { sortingSpeed } from "../variables/stores";
  import { scrollbarMax, scrollbarMin, scrollbarStep, scrollbarValue } from "../variables/stores";
    let sortingSpeedScrollbar:HTMLInputElement;
    export { sortingSpeedScrollbar };

    function changeSortingSpeed():void {
        sortingSpeed.update(() => sortingSpeedScrollbar.value);
    }
    document.addEventListener('keydown', (event) => {
    if (event.code === "Space") {
      sortingSpeed.update(() => "9000");
    }
    if(event.code === "Enter") {
        sortingSpeed.update(() => sortingSpeedScrollbar.value);
    }
  });
</script>

<div>
  <label id="labelFaster" class="h4" for="speed-range">faster</label>
  <input
    id="speed-range"
    on:change={changeSortingSpeed}
    bind:this={sortingSpeedScrollbar}
    type="range"
    min={scrollbarMin}
    max={scrollbarMax}
    step={scrollbarStep}
    value={scrollbarValue}
  />
  <label id="labelSlower" class="h4" for="speed-range">slower</label>
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
