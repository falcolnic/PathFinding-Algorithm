import { colors, sortingSpeed, barColorWhileSwapping } from "../variables/stores";
import { endSorting, getBarsWhichArentNull, playSortSound, refreshBars, startTimer } from "./algo-utils";

let color:string;
colors.subscribe(value => {
    color = value;
});
let sortSpeed;
sortingSpeed.subscribe(value => {
    sortSpeed = value;
});

export async function bubbleSort() {
    let barsToSortArray:HTMLDivElement[] = getBarsWhichArentNull();
    refreshBars();
    startTimer();
    let swapped:boolean;
    do {
        swapped = false;
        for(let i = 0; i < barsToSortArray.length-1; i++) {
            const firstBar:HTMLDivElement = barsToSortArray[i];
            const secondBar:HTMLDivElement = barsToSortArray[i+1];
            const heightFirstBar:string = firstBar.style.height;
            const heightSecondBar:string = secondBar.style.height;
            if(parseInt(heightFirstBar) > parseInt(heightSecondBar)) {
                secondBar.style.height = heightFirstBar;
                firstBar.style.height = heightSecondBar;
                console.log(secondBar.style.height + " changed with " + firstBar.style.height);
                secondBar.style.background = barColorWhileSwapping;
                firstBar.style.background = color;
                swapped = true;
                await new Promise(resolve => setTimeout(resolve, sortSpeed));
            } else {
                barsToSortArray.map((bar) => {
                    bar.style.background = color;
                });
            }
        }
        playSortSound();
    } while(swapped);
    endSorting();
}


