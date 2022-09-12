 const form = document.getElementById("novoItem")
 const lista = document.getElementById("lista")
 const itens = JSON.parse(localStorage.getItem("itens")) || [] // Operador lógico que retorna com dados salvos, ou string vazia, utilizando localStorage.getItem, modificando o valor de `string` com JSON.parse()

 itens.forEach( (elemento) => {// Uso do forEach para que todos os itens já escritos na lista sejam mantidos ao atualizar a página 
  criaElemento(elemento)
 });

 form.addEventListener("submit",(evento) => {  //qual a operação de um formulario enviado?É o submit(evento)
     evento.preventDefault()  //preventDefault é pra parar o conportamento
     
    
   const nome = evento.target.elements["nome"]
   const quantidade = evento.target.elements["quantidade"]
   
   const itemAtual ={
         "nome":nome.value,
         "quantidade":quantidade.value
      }

   criaElemento (itemAtual)

   itens.push (itemAtual)

   localStorage.setItem("itens",JSON.stringify(itens))

   nome.value ="" //para deixar o imput limpo sempre que adicionar um item
   quantidade.value =""
 })

 function criaElemento(item){
    const novoItem =document.createElement ('li')
    novoItem.classList.add ("item")  //no meu Html tem uma lista com a classe item

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome
    lista.appendChild(novoItem)
    
    
    
   
 }
 
