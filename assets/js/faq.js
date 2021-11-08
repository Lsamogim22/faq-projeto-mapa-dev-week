// BUSCAR OS ITENS DA TELA
const itensPerguntasERespostas = document.querySelectorAll('.item');

// ENTENDER QUE O ITEM FOI CLICADO
itensPerguntasERespostas.forEach(function(item) {
    item.addEventListener('click', function() {
        // VERIFICAR SE A PERGUNTA CLICADA ESTÁ ATIVA
        const estaAtiva = item.classList.contains('ativo')

        //PRECISA FECHAR TODAS AS OUTRAS
        itensPerguntasERespostas.forEach(function(item) {
            item.classList.remove('ativo')
        })
        
        // SE A PERGUNTA NÃO ESTÁ ATIVA -> ATIVAR
        if(!estaAtiva){
            //ABRIR A RESPOSTA
            item.classList.add('ativo')
        } else {
            // SE A PERGUNTA ESTÁ ATIVA - DESATIVAR (REMOVER A CLASSE ATIVO)
            item.classList.remove('ativo')
        }
    })
})

