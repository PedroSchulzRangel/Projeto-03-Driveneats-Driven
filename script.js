let pratoSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;

function selecionarPrato(pratoClicado){
    /*1) Buscar e selecionar o elemento div dentro do container de pratos que contenha a classe .selecionado;
      2) Verificar se o elemento selecionado é diferente de nulo e se for, remover a classe .selecionado
      3) Adicionar a classe .selecionado ao elemento clicado
      4) Atualizar o valor da variável pratoSelecionado*/

    const pratoSelecionadoAnteriormente = document.querySelector(".container-pratos .selecionado");

    if(pratoSelecionadoAnteriormente !== null){
        pratoSelecionadoAnteriormente.classList.remove("selecionado");
    }
    pratoClicado.classList.add("selecionado");
    
    pratoSelecionado = pratoClicado;

}
function selecionarBebida(bebidaClicada){
    /*1) Buscar e selecionar o elemento div dentro do container de bebidas que contenha a classe .selecionado;
      2) Verificar se o elemento selecionado é diferente de nulo e se for, remover a classe .selecionado
      3) Adicionar a classe .selecionado ao elemento clicado
      4) Atualizar o valor da variável bebidaSelecionada*/

      const bebidaSelecionadaAnteriormente = document.querySelector(".container-bebidas .selecionado");

      if(bebidaSelecionadaAnteriormente !== null){
          bebidaSelecionadaAnteriormente.classList.remove("selecionado");
      }
      bebidaClicada.classList.add("selecionado");
      
      bebidaSelecionada = bebidaClicada;
  
}
function selecionarsobremesa(sobremesaClicada){
    /*1) Buscar e selecionar o elemento div dentro do container de sobremesas que contenha a classe .selecionado;
      2) Verificar se o elemento selecionado é diferente de nulo e se for, remover a classe .selecionado
      3) Adicionar a classe .selecionado ao elemento clicado
      4) Atualizar o valor da variável sobremesaSelecionada*/

      const sobremesaSelecionadaAnteriormente = document.querySelector(".container-sobremesas .selecionado");

      if(sobremesaSelecionadaAnteriormente !== null){
          sobremesaSelecionadaAnteriormente.classList.remove("selecionado");
      }
      sobremesaClicada.classList.add("selecionado");
      
      sobremesaSelecionada = sobremesaClicada;
  
}