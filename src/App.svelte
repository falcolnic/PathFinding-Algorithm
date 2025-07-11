<script lang="ts">
  import Heading from "./components/heading.svelte";
  import { typewriteHeading } from "./components/heading.svelte";
  import Bars from "./components/bars.svelte";
  import Buttons from "./components/buttons.svelte";
  import SpeedScrollbar from "./components/speedscrollbar.svelte";
  import Colortheme from "./components/colortheme.svelte";
  import Weather from "./components/weather.svelte";
  import Timer from "./components/Timer.svelte";
  window.addEventListener("mouseover", typewriteHeading);
</script>

<div>
  <Heading/>
  <Buttons/> <Colortheme/>
  <SpeedScrollbar/>
  <Timer/>
</div>
<Bars/>
<Weather/>


