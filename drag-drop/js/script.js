let lists = document.getElementsByClassName("list")
let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")

for (list of lists) {
	list.addEventListener("dragstart", function (e) { //Evento de arrastar
		let selected = e.target //obtemos o elemento selecionado quando arrastamos e atribuímos a varável: selected

		//Arrastando o elemeto da caixa esquerda para direita
		rightBox.addEventListener("dragover", function (e) {
			e.preventDefault()
		})
		//Soltando o elemeto da caixa esquerda para direita
		rightBox.addEventListener("drop", function (e) {
			rightBox.appendChild(selected) //adicionando o elemnto selecionado
			selected = null //limpando a seleção
		})

		//Arrastando o elemeto da caixa direita para esquerda
		leftBox.addEventListener("dragover", function (e) {
			e.preventDefault()
		})
		//Soltando o elemeto da caixa direita para esquerda
		leftBox.addEventListener("drop", function (e) {
			leftBox.appendChild(selected) //adicionando o elemnto selecionado
			selected = null //limpando a seleção
		})
	})
}
