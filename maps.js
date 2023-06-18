// Crie um mapa e defina a posição inicial como vazio
var map = L.map('map').setView([0, 0], 13);

// Obtenha a localização atual do usuário
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // Atualize a posição do mapa com as coordenadas obtidas
    map.setView([latitude, longitude], 13);

    // Adicione uma camada de mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);


L.marker([latitude, longitude]).addTo(map);
  }, function(error) {
    console.error(error);
  });
} else {
  console.error('Geolocation is not supported by this browser.');
}