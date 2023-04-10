// Add active class to current nav link
var navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function(link) {
	if (link.href === window.location.href) {
		link.classList.add('active');
	}
});

// Initialize Google Maps API
function initMap() {
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
		center: {lat: 37.7749, lng: -122.4194},
		zoom: 12
	});

	// Add markers for charging stations
	var markers = [
		{
			lat: 37.7886,
			lng: -122.4111,
			name: 'Charging Station 1',
			address: '123 Main St.',
			phone: '(555) 555-1234',
			hours: 'Mon-Fri 9am-5pm',
			type: 'Level 2'
		},
		{
			lat: 37.7749,
			lng: -122.4194,
			name: 'Charging Station 2',
			address: '456 Elm St.',
			phone: '(555) 555-5678',
			hours: 'Mon-Sat 8am-8pm',
			type: 'Level 3'
		}
	];

	markers.forEach(function(marker) {
		var infoWindow = new google.maps.InfoWindow({
			content: '<h3>' + marker.name + '</h3><p>Address: ' + marker.address + '</p><p>Phone: ' + marker.phone + '</p><p>Hours: ' + marker.hours + '</p><p>Charging Type: ' + marker.type + '</p>'
		});

		var position = {lat: marker.lat, lng: marker.lng};

		var marker = new google.maps.Marker({
			position: position,
			map: map,
			title: marker.name
		});

		marker.addListener('click', function() {
			infoWindow.open(map, marker);
		});
	});
}
