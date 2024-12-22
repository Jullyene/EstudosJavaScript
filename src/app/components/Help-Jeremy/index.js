
const gps = {
    enableHighAccurancy: true,
    timeout: 5000
}

const coords = window.navigator

function success(elemento){
    const cordenadas = elemento.coords;
    console.log(cordenadas, "O que me retorna de coordenadas")

    let latitude = cordenadas.latitude;
    console.log(latitude, "Latitude")

    let longitude = cordenadas.longitude
    console.log(longitude, "Longitude")

}

function error (err) {
    console.warn(`ERROR (${err.code}):
        ${err.message}`)
}


const navegacao = navigator.geolocation.getCurrentPosition(success, error, gps);



function mostrarPosicao (latitude, longitude) {
    let latitudeLongtude = latitude + "," + longitude;
    const url = "https://maps.google.com/maps?q=" + latitudeLongtude ;
    window.location = url
    console.log(latitudeLongtude)
}
mostrarPosicao();
