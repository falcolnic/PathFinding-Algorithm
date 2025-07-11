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

export async function selectionSort() {
    let barsToSortArray:HTMLDivElement[] = getBarsWhichArentNull();
    refreshBars();
    startTimer();
    let marker:number = barsToSortArray.length - 1;
    while(marker >= 0){
        let max:number = 0;
        for(let i:number = 0; i <= marker; i++){
            barsToSortArray[i].style.background = "DarkMagenta";
            if(parseInt(barsToSortArray[i].style.height) > parseInt(barsToSortArray[max].style.height)) {
                max = i;
                for (let y:number = 0; y <= marker; y++) {
                    barsToSortArray[y].style.background = color;
                }
                barsToSortArray[i].style.background = barColorWhileSwapping;
            }
            await new Promise(resolve => setTimeout(resolve, sortSpeed));
        }
        let temp:string = barsToSortArray[marker].style.height;
        barsToSortArray[marker].style.height = barsToSortArray[max].style.height;
        barsToSortArray[max].style.height = temp;
        barsToSortArray[max].style.background = color;
        barsToSortArray[marker].style.background = "green";
        barsToSortArray[marker].style.transition = "background 1s ease-out";
        barsToSortArray[marker].style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.9)";
        playSortSound();
        marker--;
    }
    endSorting();
}