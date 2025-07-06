<script lang="ts" context="module">
    let latitude:string;
    let longitude:string;
    let weather:string;
    const d:Date = new Date();
    const date:string = d.getFullYear() + "-" + (+d.getUTCMonth() + 1) + "-" + d.getDate();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(makeAPICall);
    }
}

function makeAPICall(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`)
    .then(response => response.json())
    .then(data => {
        weather = data.current_weather.temperature + "°C";
        console.log(data.current_weather.temperature);
    })
    .catch(error => {
        console.log("weather api call failed!")
    });
}
getLocation();
</script>
