
   function enviar() { //  função que é acionada ao clicar no botão do submit .
    
       
                    // RESULTADO PARA OS CAMPOS  EM BRANCOS DE  NOME, CPF , ENDEREÇO , Nº E TEL CELULAR .
                    
        if (document.getElementById ("name").value.length == ""  || document.getElementById ("cpf1").value.length =="" ||  document.getElementById  ("ender").value.length == "" || document.getElementById("nr").value.length == ""  || document.getElementById("cel").value=="" ) {  // teste l

            window.alert("ATENÇÃO: Há campos em brancos que são obrigatórios .")
            
            // RESULTADO PARA TODOS OS CAMPOS EM BRANCOS

            } else {

            window.alert("Dados cadastrados com sucesso!")
      }
      
     


    }
    
    function formatar(novo) { // FUNÇÃO DO REGEX
        const elementoAlvo = novo
        const aux = novo.value   
        
        let Atualizado;
        
        if(novo.id == "cpf1")
        {
          Atualizado = aux.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        }

        if(novo.id == "rg")
        {
            Atualizado = aux.replace(/(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)/, "$1.$2.$3-$4");
        }


        if(novo.id == "fixo")
        {
            Atualizado = aux.replace(/(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/, "($1)$2$3-$4");
        }


        
        if(novo.id == "cel")
        {
            
          Atualizado = aux.replace(/(^[0-9]{2})?(\s|-)?(9?[0-9]{5})-?([0-9]{4}$)/, "($1)$2$3-$4");
        }


        if(novo.id == "cel")
        {
            
          Atualizado = aux.replace(/(^[0-9]{2})?(\s|-)?(9?[0-9]{5})-?([0-9]{4}$)/, "($1)$2$3-$4");
        }



        elementoAlvo.value = Atualizado; 



        }    


  // TRECHO PARA MUDAR A COR DO BOTÃO 
 var bot = window.document.getElementById('botao')

bot.addEventListener('mouseenter', entrar_bot) // atribuindo o evento de entar com o mouse  a função desejada
bot.addEventListener('mouseout' , sair_bot) // atribuindo o evento de sair com o mouse a função desejada 

function  entrar_bot () { // muda a cor do botão  "ver trailer" ao parar o mouse em cima dele .

  bot.style.background= 'orange'
  bot.style.color='white'


}

function sair_bot ( ) { // muda a cor do botão "ver trailer" ao sair do mouse em cima dele

    bot.style.background = 'white'
    bot.style.color = 'black'

}

        
      
