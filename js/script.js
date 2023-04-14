document.getElementById("botaoEnviar").addEventListener("click", validaformulario)

function validaformulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value !="" &&
  documunt.getElementById("telefone").value !=""){
  alert("Prontino! Você receberá as novidades por email!")
}else{
  alert("Por favor, preencha os campos nome e email")
  }
  }

