<script lang="ts">
  import { colors, colorDark, colorLight, colorModeIcon, colorModeIconLight, colorModeIconDark } from "../variables/stores";

  let colorMode:string;

  colorModeIcon.subscribe(value => {
    colorMode = value;
  });

  function setSuitableIcon(): void {
    let colorTheme: string = localStorage.getItem("colorTheme") ?? "light";
    if (colorTheme === "light") {
      colorModeIcon.update(() => colorModeIconLight);
    } else if (colorTheme === "dark") {
      colorModeIcon.update(() => colorModeIconDark);
    } else {
      colorModeIcon.update(() => colorModeIconLight);
    }
  }

  function changeColorTheme() {
    if (localStorage.getItem("colorTheme") == "dark") {
      colors.update(() => colorLight);
      colorModeIcon.update(() => colorModeIconLight);
      localStorage.setItem("colorTheme", "light");
    } else {
      colors.update(() => colorDark);
      colorModeIcon.update(() => colorModeIconDark);
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
