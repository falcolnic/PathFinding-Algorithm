import { colors, sortingSpeed, barColorWhileSwapping } from "../variables/stores";
import { endSorting, getBarsWhichArentNull, refreshBars, startTimer } from "./algo-utils";

let color:string;
colors.subscribe(value => {
    color = value;
})

let sortSpeed:string;
sortingSpeed.subscribe(value => {
    sortSpeed = value;
}); 

export async function insertionSort() {
    let barsToSortArray:HTMLDivElement[] = getBarsWhichArentNull(); 
    refreshBars();
    startTimer();
    for(let i:number = 0; i < barsToSortArray.length; i++) {
        let currentPosition:number = i; 
        let marker:string = barsToSortArray[i].style.height; 
        while(currentPosition > 0 && parseInt(barsToSortArray[currentPosition-1].style.height) > parseInt(marker)) {
            await new Promise(resolve => setTimeout(resolve, +sortSpeed));
            barsToSortArray[currentPosition].style.height = barsToSortArray[currentPosition-1].style.height;
            barsToSortArray[currentPosition].style.background = barColorWhileSwapping;
            if(currentPosition < barsToSortArray.length-1) {
                barsToSortArray[currentPosition+1].style.background = color;
            }
            currentPosition--;
        }
        barsToSortArray[currentPosition].style.height = marker;
        barsToSortArray[currentPosition+1].style.background = color;
    }
    endSorting();
}