class Jogo {
  constructor() {
    this.indice = 0;
    
    this.mapa = fita.mapa
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 60, 110, 135, 220, 270);
    const kidZombie = new Inimigo(matrizKidZombie, imagemKidZombie, width -52, 60, 90, 115, 150, 200);
    const zombieWalk = new Inimigo(matrizZombieWalk, imagemZombieWalk, width -52, 60, 100, 168, 200, 336);
    const robotZombie = new Inimigo(matrizRobotZombie, imagemRobotZombie, width -52, 60, 110,138, 220, 275);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 60, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);

    inimigos.push(robotZombie)
    inimigos.push(zombieWalk)
    inimigos.push(kidZombie)
    inimigos.push(inimigo)
    inimigos.push(inimigoVoador)

  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      somDoPulo.play()
    }
    if (optionGameOver==true && keyCode==ENTER) {   
      optionGameOver = false;
      personagem.Recomecar();
      personagem.tornarInvencivel();
      gameOverSom.stop()
      somDoJogo.loop()
      loop();
    }
  }

  draw() {  
  cenario.exibe();
  cenario.move();
    
  vida.draw();
  pontuacao.exibe();
  pontuacao.adicionarPonto();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  const linhaAtual = this.mapa[this.indice]
  const inimigo = inimigos[linhaAtual.inimigo];
  const inimigoVisivel = inimigo.x < - inimigo.largura;
    
  inimigo.velocidade = linhaAtual.velocidade;
  
  inimigo.exibe()
  inimigo.move()
  
  if (inimigoVisivel) {
     this.indice++;
     inimigo.aparece()
     if (this.indice > this.mapa.length - 1) {
       this.indice = 0;      
     }
  }
    
  if (personagem.estaColidindo(inimigo)){
    console.log('colidiu');
    vida.perdeVida();
    personagem.tornarInvencivel();
    if(vida.vidas === 0) {
      image(imagemGameOver, width/2 - 300, height - 400)
      noLoop()
      somDoJogo.stop ();
      gameOverSom.loop();
      optionGameOver = true;
    }
   } 
  }
}