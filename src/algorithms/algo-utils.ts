import { barAsDivElements, generateRandomHeight } from "../components/bars.svelte";
import { colors, firstSorting, sortingSpeed, barColorEndSorting, delayEndSorting, sortStartTime, sortEndTime, sortDuration, isCurrentlySorting } from "../variables/stores";
import { buttonBubbleSort, buttonCreateBars, buttonInsertionSort, buttonSelectionSort } from "../components/buttons.svelte";

let audioPing:HTMLAudioElement = new Audio('/src/assets/ping.mp3');
let audioSuccessSound:HTMLAudioElement = new Audio('/src/assets/success_sound.mp3');

let color:string;
colors.subscribe(value => {
    color = value;
});

let sortSpeedTest:number;
sortingSpeed.subscribe(value => {
    sortSpeedTest = +value;
});

let isFirstSorting:string;
firstSorting.subscribe(value => {
    isFirstSorting = value;
});
let timerInterval: ReturnType<typeof setInterval> | null = null;

export function startTimer():void {
    const startTime = performance.now();
    sortStartTime.set(startTime);
    isCurrentlySorting.set(true);

    const updateInterval = Math.max(5, Math.min(100, 150 - sortSpeedTest + 5));

    timerInterval = setInterval(() => {
        const currentTime = performance.now();
        const duration = (currentTime - startTime) / 1000;
        sortDuration.set(duration.toFixed(3));
    }, updateInterval);
}

export async function endSorting() {
    const endTime = performance.now();
    sortEndTime.set(endTime);
    isCurrentlySorting.set(false);
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    let startTime: number = 0;
    sortStartTime.subscribe(value => { startTime = value; })();
    const duration = (endTime - startTime) / 1000;
    sortDuration.set(duration.toFixed(3));

    console.log(`Sorting completed in ${duration.toFixed(3)} seconds`);

    audioSuccessSound.play();
    let barsToSortArray = getBarsWhichArentNull();
    const delay = (delayInMs) => new Promise((resolve) => setTimeout(resolve, delayInMs));
    for (const bar of barsToSortArray) {
        bar.style.background = barColorEndSorting;
        await delay(delayEndSorting);
        bar.style.transition = "";
        bar.style.boxShadow = "";
    }
    disableOrEnableButtons(false);
    firstSorting.set("false");
}

export function refreshBars():void {
    disableOrEnableButtons(true);
    sortDuration.set("0.000");

    if(isFirstSorting === "false") {
        let barsToSortArray = getBarsWhichArentNull();
        barsToSortArray.map((bar) => {
            bar.style.height = generateRandomHeight() + "px";
            bar.style.background = color;
        });
    }
}

export function getBarsWhichArentNull():HTMLDivElement[] {
    let barsToSortAsArray:HTMLDivElement[] = [];
    barAsDivElements.map(bar => {
        if(bar !== null) {
            barsToSortAsArray.push(bar);
        }
    })
    return barsToSortAsArray;
}

function disableOrEnableButtons(state:boolean):void {
    buttonCreateBars.disabled = state;
    buttonBubbleSort.disabled = state;
    buttonInsertionSort.disabled = state;
    buttonSelectionSort.disabled = state;
}

export function playSortSound():void {
    if(sortSpeedTest >= 65){
        audioPing.play();
    }
}
