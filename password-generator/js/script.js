const passwordBox = document.getElementById("password") //pegando o input via ID
const btn = document.getElementById("btn") //pegando o botão via ID
const copy = document.getElementById("copy") //pegando o ícone de copiar via ID
const length = 12 //tamanho da senha

//caracteres da senha
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXWYZ"
const lowerCase = "abcdefghijklmnopqrstuvxwyz"
const numbers = "1234567890"
const symbols = "@#$%/._{}+[]*()="

const allChars = upperCase + lowerCase + numbers + symbols

//função para gerar a senha
btn.onclick =  () => {
	let password = ""

	//adicionando os caracters na senha
	password += upperCase[Math.floor(Math.random() * upperCase.length)]
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
	password += numbers[Math.floor(Math.random() * numbers.length)]
	password += symbols[Math.floor(Math.random() * symbols.length)]

	while (length > password.length) {
		password += allChars[Math.floor(Math.random() * allChars.length)]
	}

	//adicionando a senha ao input
	passwordBox.value = password
}

//função para copiar senha
copy.onclick = () => {
	passwordBox.select()//seleciona o conteúdo do input
	document.execCommand("copy") // executa o comando de copiar
}
