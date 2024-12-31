// Check if geolocation is available in the browser
var location_btn = document.getElementById("button1");
location_btn.onclick = () => {
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Success callback
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        document.body.innerHTML += `<p>Latitude: ${latitude}, Longitude: ${longitude}</p>`;
      },
      (error) => {
        // Error callback
        console.error(`Error (${error.code}): ${error.message}`);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}
  