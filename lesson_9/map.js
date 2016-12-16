var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.4264535, lng: 32.0868373},
        zoom: 12
    });
    var geocoder = new google.maps.Geocoder();
    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);

    });

    var infoWindow = new google.maps.InfoWindow({map: map});

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };


            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here!');
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
            var coordinates = marker.position.toString().split(',');
            $('#latCoord').text(coordinates[0].slice(1));
            $('#longCoord').text(coordinates[1].slice(1, coordinates[1].length-1));
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}