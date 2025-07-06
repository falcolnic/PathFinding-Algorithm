<script lang="ts">
  import { colors, colorDark, colorLight, colorModeIcon, colorModeIconLight, colorModeIconDark } from "../variables/stores";

  let colorMode:string;

  colorModeIcon.subscribe(value => {
    colorMode = value;
  });

  function setSuitableIcon(): void {
    let colorTheme: string = localStorage.getItem("colorTheme");
    if (colorTheme === "light") {
      colorModeIcon.update(value => colorModeIconLight);
    } else if (colorTheme === "dark") {
      colorModeIcon.update(value => colorModeIconDark);
    } else {
      colorModeIcon.update(value => colorModeIconLight);
    }
  }
  function changeColorTheme() {
    if (localStorage.getItem("colorTheme") == "dark") {
      colors.update(value => colorLight);
      colorModeIcon.update(value => colorModeIconLight);
      localStorage.setItem("colorTheme", "light");
    } else {
      colors.update(value => colorDark);
      colorModeIcon.update(value => colorModeIconDark);
      localStorage.setItem("colorTheme", "dark");
    }
  }
  setSuitableIcon();
</script>

<svg
  on:click={changeColorTheme}
  on:keydown={(e) => { if (e.key === "Enter" || e.key === " ") { changeColorTheme(); } }}
  tabindex="0"
  role="button"
  xmlns="http://www.w3.org/2000/svg"
  height="48"
  viewBox="0 96 960 960"
  width="48"
>
  <path d={colorMode} />
</svg>
