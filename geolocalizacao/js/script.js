/*let p = document.querySelector("p")

function success (pos) {
	var crd = pos.coords

	p.innerHTML = `A sua localização é: <strong>Latitude: ${crd.latitude}</strong> e <strong>Longitude: ${crd.longitude}</strong>`

	console.log(pos)
}

function error (error) {
	console.warn("Erro: " + error.message)
}

//Pega a localização atual
navigator.geolocation.getCurrentPosition(success, error)*/

let p = document.querySelector("p")
var map

function success (pos) {
	var crd = pos.coords

	p.innerHTML = `A sua localização é: <strong>Latitude: ${crd.latitude}</strong> e <strong>Longitude: ${crd.longitude}</strong>`

	console.log(pos)

	if (map === undefined) {
		map = L.map('map').setView([crd.latitude, crd.longitude], 13);
	} else {
		map.remove()
		map = L.map('map').setView([crd.latitude, crd.longitude], 13);
	}

	//O Mapa
	var marker = L.marker([crd.latitude, crd.longitude]).addTo(map); //marcador do mapa

	//Mosaicos do mapa
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map)

	L.marker([crd.latitude, crd.longitude]).addTo(map)
	.bindPopup("Eu estou aqui")
	.openPopup()
}

function error (error) {
	console.warn("Erro: " + error.message)
}

options = {
	enableHighAccuracy: true, //pega com maior precisáo a posição atual do usuário
	timeout: 5000, //tempo para pegar a posição do usuário
}

//Pega a localização toda vez que muda
id = navigator.geolocation.watchPosition(success, error, options)

//Para de pegar a minha localicalização atual
//navigator.geolocation.clearWatch(id)
