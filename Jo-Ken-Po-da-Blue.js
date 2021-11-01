const prompt = require("prompt-sync")();

reset = "SIM";

while (reset == "SIM"){

  // Comparar resultado entre Jogador e Cpu;
  var pontosEmpate = 0;
  var pontosJg = 0;
  var pontosCpu = 0;
  // Introdução ao Jogo;
  console.log("Jo-Ken-Po-Blue");
  console.log();
  console.log("Olá qual o seu Nome?");
  console.log();
  let jogador = prompt("Digite seu Nome: ");
  console.log();
  console.log("Vamos jogar! Jo - Ken - Po - Bem simples, escolha quantas rodadas vamos jogar, depois (Pedra, Papel ou Tesoura)!");
  console.log();
  // Definir quantas rodadas iremos fazer;
  rodadas = +prompt("Digite quantas Jogadas: ");
  console.log();
  for (let i = 0; i <rodadas; i++){
    // Ler escolha Jogador (Pedra, papel ou tesoura);
    let escolhaJg = prompt("Faça sua escolha digitando um número:\n\n1 - Pedra:\n2 - Papel:\n3 - Tesoura:\n");

    if (escolhaJg == 1){
      escolhaJg = 1;
      } else if (escolhaJg == 2){
          escolhaJg = 2;
          } else if (escolhaJg == 3){
              escolhaJg = 3;
              }
                else{
                  console.log("Dado Inválido!!!!")
                  }
    // Ler escolha Cpu;
    let escolhaCpu = Math.floor(Math.random() * (3)) + 1;

    function compara(escolhaJg, escolhaCpu,){

      // Empate;
      if (escolhaJg === escolhaCpu){
        pontosEmpate ++;
        }
      // Pedra;
      if (escolhaJg === 1 && escolhaCpu === 3) {   
        pontosJg ++;
        } else if (escolhaJg === 1 && escolhaCpu === 2) {   
            pontosCpu ++;
            }
      // Papel;
      if (escolhaJg === 2 && escolhaCpu === 1) {   
        pontosJg ++;
        } else if (escolhaJg === 2 && escolhaCpu === 3) {   
            pontosCpu ++;
            }
      // Tesoura;
      if (escolhaJg === 3 && escolhaCpu === 2) {   
        pontosJg ++;
        } else if (escolhaJg === 3 && escolhaCpu === 1) {   
            pontosCpu ++;
            }
    }

    compara(escolhaJg, escolhaCpu);
    console.log();
  }
  console.log("Placar");
  console.log();
  // Mostrar quantas rodadas cada jogador ganhou;
  console.log(`EMPATE = ${pontosEmpate} Pontos`);
  //console.log(`${jogador} = ${pontosJg} Pontos`);
  console.log(`${jogador.toUpperCase()} = ${pontosJg} Pontos`);
  console.log(`COMPUTADOR = ${pontosCpu} Pontos`);
  console.log();
  // Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
  if (pontosJg > pontosCpu){
    console.log(`PARABENS ${jogador.toUpperCase()} VOCÊ FOI O GRANDE CAMPEÃO!!!`)
    }
  else if (pontosCpu > pontosJg){
    console.log(`QUE PENA ${jogador.toUpperCase()} ,MAIS VOCÊ PERDEU TENTE NOVAMENTE!!!`)
    }
  else {
    console.log("EMPATOU !!")
    }
  //Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa.
  console.log();
  var reset = prompt("Digite SIM para jogar novamente: ").toUpperCase();
  console.log();
}