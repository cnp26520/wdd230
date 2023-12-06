const secret = document.querySelector("#secret");
const secretRepeated = document.querySelector("#secret-repeated");
const message = document.querySelector("#message");

secretRepeated.addEventListener("focusout", checkSame);    

function checkSame() {
	if (secret.value !== secretRepeated.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		secretRepeated.style.backgroundColor = "#fff0f3";
		secretRepeated.value = "";
        secret.value = "";
		secret.focus();
	} else {
		message.style.display = "none";
		secretRepeated.style.backgroundColor = "#fff";
		secretRepeated.style.color = "#000";
	}
}