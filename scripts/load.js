function preload () {  
  imagemCenario = loadImage('imagens/cenario/cenario.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemKidZombie = loadImage('imagens/inimigos/kid.png');
  imagemZombieWalk = loadImage('imagens/inimigos/Zombie-Walk.png');
  imagemRobotZombie = loadImage('imagens/inimigos/RobotZombie.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemGameOver = loadImage('imagens/assets/gameOver.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/fita.json');
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  gameOverSom = loadSound('sons/gameOverSound.mp3');
  somDoPulo = loadSound('sons/pulo.mp3');
  
}