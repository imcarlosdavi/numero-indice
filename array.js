//Encontrar o número inserido em um indice, e printar isso.


let list = []
let indice = []
let contador = 0

const numeroProcurar = parseInt(prompt("Coloque o número para procurar:"))

for(i = 0; i < 10; i++){
   const elemento = parseInt(prompt(`O indice do elemento ${i + 1}:`))
   list[i] = elemento
}

for(i = 0; i < 10; i++){
    if(list[i] === numeroProcurar){
        indice[contador] = i
        contador++
    }
}

document.body.innerHTML+=`O número ${numeroProcurar} foi encontrado no indice: ${indice}`