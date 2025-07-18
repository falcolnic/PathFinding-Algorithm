import { writable, type Writable } from "svelte/store";

const colorLight:string  = "blueviolet";
const colorDark:string = "black";
const barColorWhileSwapping:string = "red";
const barColorEndSorting:string = "yellowgreen";
const colors:Writable<string> = writable(colorLight)

const colorModeIconLight:string = "M480 936q-150 0-255-105T120 576q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480 936Zm0-60q109 0 190-67.5T771 650q-25 11-53.667 16.5Q688.667 672 660 672q-114.689 0-195.345-80.655Q384 510.689 384 396q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180 576q0 125 87.5 212.5T480 876Zm-4-297Z";
const colorModeIconDark:string = "M479.765 716Q538 716 579 675.235q41-40.764 41-99Q620 518 579.235 477q-40.764-41-99-41Q422 436 381 476.765q-41 40.764-41 99Q340 634 380.765 675q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280 576q0-83 58.5-141.5T480 376q83 0 141.5 58.5T680 576q0 83-58.5 141.5T480 776ZM70 606q-12.75 0-21.375-8.675Q40 588.649 40 575.825 40 563 48.625 554.5T70 546h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170 606H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790 546h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890 606H790ZM479.825 296Q467 296 458.5 287.375T450 266V166q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 166v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720q-12.825 0-21.325-8.62-8.5-8.63-8.5-21.38V886q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 886v100q0 12.75-8.675 21.38-8.676 8.62-21.5 8.62ZM240 378l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217 270 226 279l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5 774q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743 882 734 873Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786 313 777 322l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897 873.103q-8.897-8.896-8.897-21.5Q174 839 183 830l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291 783 291 795t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480 576Z";
const colorModeIcon:Writable<string> = writable(colorModeIconLight);

const sortingSpeed:Writable<string> = writable("75");
const barsStore = writable([]);
const maxHeight:number = 500;
const minHeight:number = 50;
const firstSorting:Writable<string> = writable("true");
const delayEndSorting:number = 30;

const sortStartTime:Writable<number> = writable(0);
const sortEndTime:Writable<number> = writable(0);
const sortDuration:Writable<string> = writable("0.000");
const isCurrentlySorting:Writable<boolean> = writable(false);


const typewritterSpeed:number = 40;
const headingAsString:string = "how sorting works.";
const headingBegin:string = "See";

const scrollbarMin:string = "0";
const scrollbarMax:string = "150";
const scrollbarStep:string = "5.0";
const scrollbarValue:string = "75";

  function init():void {
    let colorTheme: string | null = localStorage.getItem("colorTheme");
    if(colorTheme === "light") {
      colors.update(value => colorLight)
    } else if(colorTheme === "dark") {
      colors.update(value => colorDark)
    } else {
      colors.update(value => colorLight)
    }

    sortingSpeed.update(value => "75");
  }
  init();
export { delayEndSorting, barColorEndSorting, scrollbarMax, scrollbarMin, scrollbarStep, scrollbarValue, colorLight, colorDark, barsStore, typewritterSpeed, headingAsString, headingBegin, colors, colorModeIcon, colorModeIconDark, colorModeIconLight, maxHeight, minHeight, sortingSpeed, firstSorting, barColorWhileSwapping, sortStartTime, sortEndTime, sortDuration, isCurrentlySorting };