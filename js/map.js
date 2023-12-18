function initMap() {
  var lat = $("#map").data("lat");
  var lng = $("#map").data("lng");
  const myLatlng = { lat: lat, lng: lng };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: myLatlng,
    draggable: true,
  });
}
