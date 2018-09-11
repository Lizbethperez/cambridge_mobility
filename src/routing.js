'use strict';
var dataOrigin =
  {
    lat: 52.1725291,
    lng: 0.1340254
  };

var dataDestiny =
  {
    lat: 52.132509,
    lng: 0.1390254
  };

function initMap() {
    let directionsService = new google.maps.DirectionsService;
    console.log(directionsService);
    let directionsDisplay = new google.maps.DirectionsRenderer;
    let containerMap = document.getElementById('map');
    let map = new google.maps.Map(containerMap,{
      zoom: 0.5,
      center: {lat:52.1920702 , lng: 0.1334396}
    });
    directionsDisplay.setMap(map);

    calculateAndDisplayRoute(directionsService,directionsDisplay,map);
  }
  function calculateAndDisplayRoute(directionsService,directionsDisplay,map) {
    directionsService.route({
      origin: dataOrigin,
      destination: dataDestiny,
      travelMode: 'DRIVING',
      provideRouteAlternatives: true
    }, function(response, status){
      if (status === 'OK') {

        for (var i = 0, len = response.routes.length; i < len; i++) {
          new google.maps.DirectionsRenderer({
              map: map,
              directions: response,
              routeIndex: i
          });
          response.DirectionsResult;
          let address=response.routes[i].summary;
          console.log(address);
         console.log((response));
          let distance=(response.routes[i].legs[0].distance.text);
          console.log(distance);
          let time=(response.routes[i].legs[0].duration.text);
          console.log(time);
          $('#table-routes').append(templateRouts(address,distance,time));
      }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    })
  }

const templateRouts=(address,distance,time)=>{
  var template=`<div class="col-md-10 font-weight-bold box-routes d-inline mb-2">
      <h4 class="text-route font-weight-bold mt-2">ROUT</h4>
      <p class="address text-left pl-4"><i class="fa fa-map-marker pr-2" aria-hidden="true"></i>${address}</p>
      <span class="distance pl-4">${distance}</span>
      <span class="time pl-4">${time}</span>
  </div>
  <div class="more-btn text-center">
    <a class="more btn btn.default btn.rounded col-md-2 b-none font-weight-bold text-items-center text-center" data-toggle="modal" data-target="#sideModalTLInfo">More<i class="fa fa-eye ml-1"></i></a>
  </div>
  
 <div class="modal fade left" id="sideModalTLInfo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-notify modal-info modal-side modal-top-left" role="document">
        <!--Content-->
        <div class="modal-content">
            <!--Header-->
            <div class="modal-header">
<<<<<<< HEAD
                <p class="heading lead">Route Information</p>
=======
                <p class="heading lead">Informacion de la Ruta</p>
>>>>>>> ca6843c0774e7c5c627a82f3d62fa830fb3f948f

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="white-text">&times;</span>
                </button>
            </div>

            <!--Body: Card-->
            <div class="modal-body">
                <div class="text-center">
<<<<<<< HEAD
                    <p class="distance text.left pl-4">Distance: ${distance}</p>
                    <p class="time text.left pl-4">Time: ${time}</p>
                </div>
            </div>

=======
                  <p class="distance text-left pl-4">Distancia: ${distance}</p>
                  <p class="time text-left pl-4">Tiempo: ${time}</p>
                </div>
            </div>
>>>>>>> ca6843c0774e7c5c627a82f3d62fa830fb3f948f
        </div>

<<<<<<< HEAD
    </div>
=======
<div class="text-center">
    <a href="" class="btn btn-default btn-rounded" data-toggle="modal" data-target="#sideModalTLInfo">More Info</i></a>
>>>>>>> ca6843c0774e7c5c627a82f3d62fa830fb3f948f
</div>
<!-- Central Modal Medium Info-->`

return template;  
}
// module.exports = routing;
