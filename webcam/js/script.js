var video = document.querySelector("video")

//acedendo a webcam do dispositivo
navigator.mediaDevices.getUserMedia({video:true})
.then(stream => {
	video.srcObject = stream
	video.play()
})
.catch(error => {
	console.log(error.message)
})

//Tirar foto
document.querySelector("#photo").addEventListener("click", function () {
	var canvas = document.querySelector("canvas")
	canvas.height = video.videoHeight
	canvas.width = video.videoWidth

	var context = canvas.getContext("2d")
	context.drawImage(video, 0, 0)

	var link = document.createElement("a")
	var button = document.querySelector(".group-button")

	link.classList.add("btn")
	link.download = "foto.png"
	link.href = canvas.toDataURL()
	link.textContent = "Clique para baixar"
	// Remove qualquer link de download que já tenha sido criado antes
	var linkAntigo = button.querySelector("a.btn");
	if (linkAntigo) {
		linkAntigo.remove();
	}

	button.appendChild(link)
	button.appendChild(link)
})
