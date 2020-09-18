
//procurar o botão//clicar no botão executar açção
document.querySelector("#add-time").addEventListener('click', cloneField)    
    //atualizar página


function cloneField(){
//duplicar campo
    
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //copia todos os filhos do nó
    const fields = newFieldContainer.querySelectorAll('input') //lista campos

    //forma simple
    // fields[0].value = '' //limpa os valores
    // fields[1].value = ''

    //forma otimizada de limpar
    fields.forEach(function(field){
        //pegar o field e limpa dentro do laço for
        field.value = ''
    })
     
    document.querySelector("#schedule-items").appendChild(newFieldContainer) //insere a copia.

    // console.log(' Helow World')
}