const modal_container = document.getElementById('information_container')
const close_information = document.getElementById('close_information')
const input_container = document.getElementById('input_container')
const close_input = document.getElementById("close_input")
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

    async function addMarker(property){
        const marker = new google.maps.Marker({
            position: property.location,
            map:map
        })
        input_container.classList.add('Show');
        close_input.addEventListener("click", () => {
            input_container.classList.remove('Show');
        })
        input_container.addEventListener("click", () => {
            input_container.classList.remove('Show');
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

    google.maps.event.addListener(map, "click", (event) => {
        addMarker({location:event.latLng});
    })

}
