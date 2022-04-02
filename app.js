const modal_container = document.getElementById('information_container')
const close_information = document.getElementById('close_information')

function initMap(){
    
    // map option
    var options = {
        center:{lat: 49.2827, lng: -123.120},
        zoom: 15
    }
    // new map
    map = new google.maps.Map(document.getElementById('map'), options)

    // marker tester
    /*
    const marker = new google.maps.Marker({
        position:{lat: 49.2716, lng:-123.0947},
        map:map
    });
    */

    function addMarker(property){
        const marker = new google.maps.Marker({
            position: property.location,
            map:map
        })

        const detailWindow = new google.maps.InfoWindow({
            content: property.content
        })

        marker.addListener("click", () => {
            information_container.classList.add('Show');
            close_information.addEventListener("click", () => {
                information_container.classList.remove('Show');
            })
            modal_container.addEventListener("click", () =>{
                information_container.classList.remove('Show');
            })
        })
    }

    addMarker({
        location:{lat:49.2716, lng:-123.0947},
        content: "<h2>A picture I took near Burrard station</h2>"
    })
    addMarker({location:{lat:49.2856, lng:-123.1202}})

    google.maps.event.addListener(map, "click", (event) => {
        addMarker({location:event.latLng});
    })

}
