const secret = document.querySelector("#secret");
const secretRepeated = document.querySelector("#secret-repeated");
const message = document.querySelector("#message");

secretRepeated.addEventListener("focusout", checkSame);    

function checkSame() {
	if (secret.value !== secretRepeated.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		secretRepeated.value = "";
        secret.value = "";
		secret.focus();
	} else {
		message.style.display = "none";
	}
}