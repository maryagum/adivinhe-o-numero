var numeroSecreto = parseInt(Math.random() * 11); // numero sorteado fora da funçao pra se manter o mesmo enquanto a pagina nn eh atualizada
var rodadas = 4; // a variável rodadas deve ficar como global

var botao = document.querySelector('button');
botao.addEventListener('click', clicar);

function clicar(){
    var campoResultado = document.getElementById("resultado");
    var palpite = parseInt(document.getElementById("numero").value);
  
        if(rodadas > 0){

            if(palpite==numeroSecreto){
                campoResultado.innerHTML = "Você acertou! O número era "+numeroSecreto+".";
                botao.disabled = true;
            }
            
            else if(palpite > 10 || palpite < 0){
                campoResultado.innerHTML ="Seu palpite deve ser entre 0 e 10! Rodadas restantes: "+ rodadas.toString();
                rodadas = rodadas - 1;    
            }
            
            else if(palpite>numeroSecreto){
                
                campoResultado.innerHTML ="Errou! Tente um número menor. Rodadas restantes: "+ rodadas.toString();
                rodadas = rodadas - 1;
                
            }
            
            else if(palpite<numeroSecreto){
                campoResultado.innerHTML ="Errou! Tente um número maior. Rodadas restantes: "+ rodadas.toString();
                rodadas = rodadas - 1;
             
            }
        }

        else{
          campoResultado.innerHTML = "Fim de jogo! Suas rodadas acabaram."
          botao.disabled = true;
        }

}

// variavel global = rodadas, checar com if
//obs: colocar um alert caso o input seja nulo