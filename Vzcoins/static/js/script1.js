//perfil
function script1(){
console.log("ya");
var database = firebase.database();
var emailreferio = document.getElementById("emailreferido").value;
var emailpaypal = document.getElementById("emailpaypal").value;
var nombreperfil = document.getElementById("nombreperfil").value;
var btnactualizar = document.getElementById("btnactualizar");
	btnactualizar.onclick = function(){
		if(input === invalid){
			console("es invalid");
		}
		console.log("1");
		database.ref(email).update({
        emailreferio: emailreferido,
        emailpaypal: emailpaypal,
        nombreperfil: nombreperfil
        });
	console.log("2");
}
}
