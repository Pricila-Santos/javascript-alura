 const form = document.getElementById("novoItem")

 form.addEventListener("submit",(evento) => {  //qual a operação de um formulario enviado?É o submit(evento)
     evento.preventDefault()  //preventDefault é pra parar o conportamento
     
    
   criaElemento(evento.target.elements["nome"].value,evento.target.elements["quantidade"].value)
 })
 function criaElemento(nome,quantidade){
    console.log(nome)
    console.log(quantidade)
 }
 
