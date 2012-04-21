
var geo_latitude = undefined;
var geo_longitude = undefined;

if (navigator.geolocation) {
    success = function(pos){
        geo_latitude = pos.coords.latitude;
        geo_longitude = pos.coords.longitude;
        console.log(geo_latitude + ', ' + geo_longitude);
    };
    failed = function (error) {
        geo_latitude = geo_longitude = null;
        switch (error.code) {
        case error.POSITION_UNAVAILABLE:
            console.log('position unavailable.');
            break;

        case error.PERMISSION_DENIED:
            console.log('permission denied.');
            break;

        case error.PERMISSION_DENIED_TIMEOUT:
            console.log('time out.');
            break;
        }
    };

    navigator.geolocation.getCurrentPosition(success, failed);
}
else {
    geo_latitude = geo_longitude = null;
    window.alert("Your browser has no geolocation fuctionality.");
}
