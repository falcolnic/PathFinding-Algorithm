<script lang="ts" context="module">
  import { bubbleSort } from "../algorithms/bubble-sort";
  import { insertionSort } from "../algorithms/insertion-sort";
  import { selectionSort } from "../algorithms/selection-sort";
  import { colors } from "../variables/stores";
  import { generateBars } from "./bars.svelte";

  export let buttonCreateBars: HTMLButtonElement | null = null;
  export let buttonBubbleSort: HTMLButtonElement | null = null;
  export let buttonInsertionSort: HTMLButtonElement | null = null;
  export let buttonSelectionSort: HTMLButtonElement | null = null;

  function createCertainAmountOfBars():void{
    let userInput: string | null = prompt("Please enter a number:");
    if (userInput !== null && isFinite(+userInput) && userInput !== "") {
      generateBars(+userInput);
    } else if (userInput == null) {
      alert("Process canceled!");
    }
    else {
      alert("Invalid input!");
    }
  }
</script>

<button bind:this={buttonCreateBars} class="btn btn-primary" on:click={createCertainAmountOfBars} style="background: {$colors}; border-color: {$colors};">Create bars</button>
<button bind:this={buttonBubbleSort} class="btn btn-secondary" on:click={bubbleSort}>Bubble Sort</button>
<button bind:this={buttonInsertionSort} class="btn btn-secondary" on:click={insertionSort}>Insertion Sort</button>
<button bind:this={buttonSelectionSort} class="btn btn-secondary" on:click={selectionSort}>Selection Sort</button>

<style>
  button {
    margin: 20px;
  }
</style>