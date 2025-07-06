<script lang="ts" context="module">
    import { headingAsString, headingBegin, typewritterSpeed, colors} from "../variables/stores";
    let counter:number = 0;

    export function typewriteHeading():void {
        window.removeEventListener("mouseover", typewriteHeading);
        const headingElement = document.getElementById("typewritterHeading") as HTMLParagraphElement;
        if(counter < headingAsString.length) {
            headingElement.innerHTML += headingAsString.charAt(counter);
            counter++;
            setTimeout(typewriteHeading, typewritterSpeed);
        }
    }
</script>
<div class="typewritterHeadingContainer">
    <p class="display-3">{headingBegin}</p>
    <p id="typewritterHeading" class="display-3" style="color: {$colors};"></p>
</div>

<style>
    p {
        margin: 20px;
    }
    .typewritterHeadingContainer {
        display: flex;
    }
    #typewritterHeading {
        font-weight: 900;
        margin-left: -5px;
    }
</style>