<script lang="ts" context="module">
    import type { Bars } from "../types/interfaces";
    import { colors, barsStore, maxHeight, minHeight } from "../variables/stores";
    let bars:Bars = [];
    export let barAsDivElements:HTMLDivElement[] = [];
    function calcHowManyBarsFit():number {
        return Math.round((window.innerWidth-20)/29);
    }

    export function generateBars(numberOfBars:number):void {
        bars = [];
        for(let i:number = 0; i < numberOfBars; i++) {
            bars = [...bars, {height:generateRandomHeight(), id:i}];
        }
        barsStore.set(bars);
    }

    export function generateRandomHeight():number {
        return Math.floor(Math.random() * maxHeight) + minHeight;
    }
    generateBars(calcHowManyBarsFit());
</script>

{#each $barsStore as bar}
<div class="barContainer">
    <div bind:this={barAsDivElements[bar.id]} id="{bar.id.toString()}" class="bar" style="background-color: {$colors}; height: {bar.height}px;"></div>
</div>
{/each}

<style>
    .barContainer{
        display: inline-block;
        padding-top: 5%;
    }
    .bar {
        width: 9px;
        padding-top: 8px;
        margin-left: 20px;
    }
</style>
