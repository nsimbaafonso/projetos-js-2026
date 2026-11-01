var input = document.getElementById("password")
var icon = document.getElementById("icon")

icon.onclick = () => {
	if (input.type === "password") {
		input.type = "text"
		// Remove o olho fechado e adiciona o olho aberto
		icon.classList.remove("fa-eye");
		icon.classList.add("fa-solid", "fa-eye-slash");
	} else {
		input.type = "password"
		// Remove o olho aberto e adiciona o olho fechado
		icon.classList.remove("fa-eye-slash");
		icon.classList.add("fa-solid", "fa-eye");
	}
}