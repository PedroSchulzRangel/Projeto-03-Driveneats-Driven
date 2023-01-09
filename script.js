let pratoSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;
function selecionarPrato(pratoClicado){
    /*1) Buscar e selecionar o elemento div dentro do container de pratos que contenha a classe .selecionado;
      2) Verificar se o elemento selecionado é diferente de nulo e se for, remover a classe .selecionado
      3) Adicionar a classe .selecionado ao elemento clicado
      4) Atualizar o valor da variável pratoSelecionado
      5) Verificar se as variáveis pratoSelecionado, bebidaSelecionada e sobremesaSelecionada estáo vazias. Se não estiverem, chamar a função habilitarBotãoDeFinalizarPedido.*/
    /*1)*/const pratoSelecionadoAnteriormente = document.querySelector(".container-pratos .selecionado");
    /*2)*/if(pratoSelecionadoAnteriormente !== null){
        /*2)*/pratoSelecionadoAnteriormente.classList.remove("selecionado");
    }
     /*3)*/pratoClicado.classList.add("selecionado");
     /*4)*/ pratoSelecionado = pratoClicado;
    /*5)*/if(pratoSelecionado !== undefined && bebidaSelecionada !== undefined && sobremesaSelecionada !== undefined){
       /*5)*/habilitarBotaoDeFinalizarPedido();
    }
}
function selecionarBebida(bebidaClicada){
    /*1) Buscar e selecionar o elemento div dentro do container de bebidas que contenha a classe .selecionado;
      2) Verificar se o elemento selecionado é diferente de nulo e se for, remover a classe .selecionado
      3) Adicionar a classe .selecionado ao elemento clicado
      4) Atualizar o valor da variável bebidaSelecionada
      5) Verificar se as variáveis pratoSelecionado, bebidaSelecionada e sobremesaSelecionada estáo vazias. Se não estiverem, chamar a função habilitarBotãoDeFinalizarPedido.*/
      /*1)*/const bebidaSelecionadaAnteriormente = document.querySelector(".container-bebidas .selecionado");
     /*2)*/if(bebidaSelecionadaAnteriormente !== null){
          /*2)*/bebidaSelecionadaAnteriormente.classList.remove("selecionado");
      }
     /*3)*/bebidaClicada.classList.add("selecionado");
     /*4)*/ bebidaSelecionada = bebidaClicada;
      /*5)*/if(pratoSelecionado !== undefined && bebidaSelecionada !== undefined && sobremesaSelecionada !== undefined){
        /*5)*/habilitarBotaoDeFinalizarPedido();
    }
}
function selecionarsobremesa(sobremesaClicada){
    /*1) Buscar e selecionar o elemento div dentro do container de sobremesas que contenha a classe .selecionado;
      2) Verificar se o elemento selecionado é diferente de nulo e se for, remover a classe .selecionado
      3) Adicionar a classe .selecionado ao elemento clicado
      4) Atualizar o valor da variável sobremesaSelecionada
      5) Verificar se as variáveis pratoSelecionado, bebidaSelecionada e sobremesaSelecionada estáo vazias. Se não estiverem, chamar a função habilitarBotãoDeFinalizarPedido.*/
      /*1)*/const sobremesaSelecionadaAnteriormente = document.querySelector(".container-sobremesas .selecionado");
      /*2)*/if(sobremesaSelecionadaAnteriormente !== null){
          /*2)*/sobremesaSelecionadaAnteriormente.classList.remove("selecionado");
      }
      /*3)*/sobremesaClicada.classList.add("selecionado");      
      /*4)*/sobremesaSelecionada = sobremesaClicada;
      /*5)*/if(pratoSelecionado !== undefined && bebidaSelecionada !== undefined && sobremesaSelecionada !== undefined){
        /*5)*/habilitarBotaoDeFinalizarPedido();
    }
}
function habilitarBotaoDeFinalizarPedido(){
    /*  1) Buscar e selecionar o elemento com a classe .botao-finalizar-pedido
        2) Tornar o valor do atributo disabled falso
        3) Adicionar a classe botaoSelecionado ao botão
        4) Trocar o valor do innerHTML da variável botão*/
        /*1)*/const botao = document.querySelector(".botao-finalizar-pedido");
        /*2)*/botao.disabled = false;
        /*3)*/botao.classList.add("botaoSelecionado");
        /*4)*/botao.innerHTML = "Fechar pedido";
}
function enviarPedido(){
    /*  1) Criar variavel com o número de telefone WhatsApp;
        2) Buscar e selecionar o nome do prato, bebida e sobremesa selecionados e guardar em variáveis;
        3) Buscar e selecionar os preços do prato, bebida e sobremesa e somá-los, guardando o valor da soma em uma variável;  
        4) Buscar e selecionar o elemento link pelo seu id;
        5) Alterar a propriedade href com o link desejado.*/
    /*1)*/const telefone = "5521999999999";
          const seletorNome = ".produto h3";
          const seletorPreco = ".preco";
    /*2)*/const nomeDoPrato = pratoSelecionado.querySelector(seletorNome).innerHTML;
    /*2)*/const nomeDaBebida = bebidaSelecionada.querySelector(seletorNome).innerHTML;
    /*2)*/const nomeDaSobremesa = sobremesaSelecionada.querySelector(seletorNome).innerHTML;
    /*3)*/const precoDoPrato = Number(pratoSelecionado.querySelector(seletorPreco).innerHTML.replace(",","."));
    /*3)*/const precoDaBebida = Number(bebidaSelecionada.querySelector(seletorPreco).innerHTML.replace(",","."));
    /*3)*/const precoDaSobremesa = Number(sobremesaSelecionada.querySelector(seletorPreco).innerHTML.replace(",","."));
    /*3)*/const soma = precoDoPrato + precoDaBebida + precoDaSobremesa;
    /*3)*/const somastr = soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          const mensagem = "Olá, gostaria de fazer o pedido:"+"\n"+"- Prato: "+nomeDoPrato+"\n"+"- Bebida: "+nomeDaBebida+"\n"+"- Sobremesa: "+nomeDaSobremesa+"\n"+"Total: "+somastr;    
          const mensagemFormatoWhatsApp = encodeURIComponent(mensagem);
    /*4) e 5)*/document.querySelector("#link-WhatsApp").href = `https://wa.me/${telefone}?text=${mensagemFormatoWhatsApp}`;
}