 const form = document.getElementById("novoItem")

 form.addEventListener("submit",(evento) => {  //qual a operação de um formulario enviado?É o submit(evento)
     evento.preventDefault()  //preventDefault é pra parar o conportamento
     
    
   criaElemento(evento.target.elements["nome"].value,evento.target.elements["quantidade"].value)
 })
 function criaElemento(nome,quantidade){
 
    const novoItem =document.createElement ('li')
    novoItem.classList.add ("item")  //no meu Html tem uma lista com a classe item

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    const lista = document.getElementById("lista")
    lista.appendChild(novoItem)
   
 }
 
