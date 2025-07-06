<script lang="ts">
  import Heading from "./components/heading.svelte";
  import { typewriteHeading } from "./components/heading.svelte";
  import Bars from "./components/bars.svelte";
  import Buttons from "./components/buttons.svelte";
  import SpeedScrollbar from "./components/speedscrollbar.svelte";
  import Colortheme from "./components/colortheme.svelte";
  import Weather from "./components/weather.svelte";
  window.addEventListener("mouseover", typewriteHeading);
</script>

<div>
  <Heading/>
  <Buttons/> <Colortheme/>
  <SpeedScrollbar/>
</div>
<Bars/>
<Weather/>


