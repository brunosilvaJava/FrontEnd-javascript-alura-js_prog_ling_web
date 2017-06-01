
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

  var peso = pacientes[i].querySelector(".info-peso").textContent;
  var altura = pacientes[i].querySelector(".info-altura").textContent;
  var tdImc = pacientes[i].querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if ((peso <= 0 || peso >= 1000) && (altura <= 0 || altura >= 3.00)) {
      tdImc.textContent = "Peso/Altura inválido(s)";
      pacientes[i].classList.add("campo-invalido");
  }
  else{
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }

}
